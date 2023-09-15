import {
  CategoryInput,
  CategoryName,
  VerifyInput,
} from '../../../../__generated__/globalTypes';
import {CategoryType, ImageSelectorOption} from '../../../models/common';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {
  GET_CATEGORIES,
  GET_STORES,
  JOIN_MASTER,
  REQ_VERIFICATION_CODE,
  VERIFY_CODE,
} from './join.queries';
import {
  JoinFormInput,
  JoinRegex,
  Store,
  UserSelectionModalType,
} from '../../../models/user';
import React, {useEffect, useState} from 'react';
import {checkRegex, uploadImageFormatting} from '../../../utils/commonUtils';
import {useLazyQuery, useMutation, useQuery} from '@apollo/client';
import I18n from '../../../utils/i18nHelpers';
import {Image} from 'react-native-image-crop-picker';
import JoinPresenter from './JoinPresenter';
import {callBackAlert} from '../../../utils/alert';
import {inventActionModal} from '../../../utils/modalUtils';

function JoinContainer({route}: any): JSX.Element {
  const navigation = useNavigation();

  const [user, setUser] = useState<JoinFormInput>({});

  const [verifyInfo, setVerifyInfo] = useState<VerifyInput>(); // 인증요청 후 받은 정보 + 입력한 인증번호 객체
  const [verified, setVerified] = useState<boolean>(false); // 인증 여부

  const [workTypeList, setWorkTypeList] = useState<CategoryType[]>([]);
  const [workTypeAll, setWorkTypeAll] = useState<boolean>(false);

  const [imageOption, setImageOption] = useState<ImageSelectorOption>();
  const [licenseImage, setLicenseImage] = useState<Image>();

  const [regexResult, setRegexResult] = useState<JoinRegex>({});

  const [timerMs, setTimerMs] = useState<number>(5 * 60 * 1000);
  const [playTimer, setPlayTimer] = useState<boolean>(false);

  const [areaList, setAreaList] = useState<CategoryType[]>([]);
  const [storeList, setStoreList] = useState<Store[]>([]);
  const [area, setArea] = useState<CategoryType>();
  const [store, setStore] = useState<CategoryType>();

  const [getAreaCategories] = useLazyQuery(GET_CATEGORIES, {
    onCompleted: (data: any) => {
      if (areaList.length <= 0) {
        const {categories} = data?.getCategories;
        setAreaList(categories);
      }
    },
  });

  const {loading: workTypeLoading} = useQuery(GET_CATEGORIES, {
    variables: {
      name: CategoryName.WORK_TYPE,
    },
    onCompleted: (data: any) => {
      if (workTypeList.length <= 0) {
        const {categories} = data?.getCategories;
        setWorkTypeList(
          categories.map((v: CategoryType) => {
            v = {...v, active: false};
            return v;
          }),
        );
        getAreaCategories({
          variables: {
            name: CategoryName.AREA,
          },
        });
      } else {
        return;
      }
    },
  });

  const {loading: storeLoading} = useQuery(GET_STORES, {
    onError: () => {
      setStoreList([]);
    },
    onCompleted: (data: any) => {
      const {success, stores} = data.getStores;
      if (success) setStoreList(stores);
    },
  });

  const [reqVerificationCode, {loading: reqVerifyLoading}] = useMutation(
    REQ_VERIFICATION_CODE,
    {
      onError: () => {
        callBackAlert(I18n.t('Error.common'), () => {
          return;
        });
      },
      onCompleted: (data: any) => {
        const {
          reqVerificationCode: {success},
        } = data;
        if (success) {
          const {sendId} = data.reqVerificationCode;
          if (user?.phone) {
            setVerifyInfo({
              sendId: sendId,
              target: user.phone.replace(/-/gi, ''),
              code: '',
            });
          }
          callBackAlert(I18n.t('Alert.req_verification_code'), () => {
            setPlayTimer(true);
            setTimerMs(5 * 60 * 1000);
          });
        } else {
          callBackAlert(I18n.t('Error.req_verification_code'), () => {
            return;
          });
        }
      },
    },
  );

  const [verifyCode, {loading: verifyCodeLoading}] = useMutation(VERIFY_CODE, {
    onError: () => {
      callBackAlert(I18n.t('Error.verify_code'), () => {
        if (verifyInfo?.sendId && verifyInfo?.target) {
          setVerifyInfo({
            ...verifyInfo,
            code: '',
          });
        }
        return;
      });
    },
    onCompleted: (data: any) => {
      const {
        verifyCode: {success},
      } = data;

      if (success) {
        setVerified(true);
        callBackAlert(I18n.t('Alert.verify_code'), () => {
          setPlayTimer(false);
          return;
        });
      }
    },
  });

  const [join, {loading: joinLoading}] = useMutation(JOIN_MASTER, {
    onError: () => {
      inventActionModal(navigation, {isShow: false});
      callBackAlert(I18n.t('Error.join'), () => {
        return;
      });
    },
    onCompleted: (data: any) => {
      inventActionModal(navigation, {isShow: false});
      if (data?.joinMaster?.success) {
        callBackAlert(I18n.t('Alert.join'), () => {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'LoginStack'}],
            }),
          );
        });
      } else {
        callBackAlert(I18n.t('Error.join'), () => {
          return;
        });
      }
    },
  });

  useEffect(() => {
    if (route.params?.imageOption) {
      const {imageOption} = route.params;
      setImageOption(imageOption);
    }
    if (route.params?.selectionType) {
      const {selected, selectionType} = route.params;
      switch (selectionType) {
        case 'area':
          setArea(selected);
          break;
        case 'store':
          setStore(selected);
          break;
      }
    }
  }, [route.params]);

  const props = {
    user,
    verifyInfo,
    regexResult,
    workTypeList,
    workTypeAll,
    timerMs,
    playTimer,
    area,
    store,
    onTimerStop: (ms: number) => {
      setPlayTimer(false);
    },
    onChangeName: (text: string) => {
      setUser({...user, name: text});
    },
    onChangePhone: (text: string) => {
      setUser({...user, phone: text});
      setVerifyInfo(undefined);
      setVerified(false);
    },
    reqVerifyBtnDisabled:
      !checkRegex('phone', user?.phone || '') || reqVerifyLoading,
    reqVerifyBtnPress: () => {
      setPlayTimer(false);
      if (user?.phone) {
        reqVerificationCode({
          variables: {
            target: user.phone.replace(/-/gi, ''),
          },
        });
      }
    },
    onChangeVerificationCode: (text: string) => {
      if (verifyInfo?.sendId && verifyInfo?.target) {
        setVerifyInfo({...verifyInfo, code: text});
      }
    },
    verifyCodeBtnDisabled: !(
      verifyInfo?.code &&
      verifyInfo.code.length > 0 &&
      playTimer
    ),
    verifyCodeBtnPress: () => {
      if (!verifyCodeLoading) {
        verifyCode({
          variables: {
            data: verifyInfo,
          },
        });
      }
    },
    onChangePassword: (text: string) => {
      setUser({...user, password: text.toLowerCase()});
      if (text.length > 0) {
        setRegexResult({
          ...regexResult,
          password: checkRegex('password', text.toLowerCase()),
        });
      } else {
        setRegexResult({...regexResult, password: undefined});
      }
    },
    onChangeRePassword: (text: string) => {
      setUser({...user, rePassword: text.toLowerCase()});
      if (text.length > 0) {
        setRegexResult({
          ...regexResult,
          rePassword: user.password === text.toLowerCase(),
        });
      } else {
        setRegexResult({...regexResult, rePassword: undefined});
      }
    },
    showSelectionModal: (type: UserSelectionModalType) => {
      if (type === 'area') {
        navigation.navigate('SelectionModal', {
          selectionType: type,
          title: I18n.t('Title.area'),
          typeList: areaList,
          path: 'JoinScreen',
        });
      } else {
        navigation.navigate('SelectionFullScreenModal', {
          selectionType: type,
          title: I18n.t('Title.store'),
          typeList: storeList,
          path: 'JoinScreen',
        });
      }
    },
    onSelectedWorkType: (item: CategoryInput) => {
      if (!item.code) {
        let current = true;
        workTypeList.map(v => {
          if (!v.active) {
            current = false;
          }
        });
        setWorkTypeList(
          workTypeList.map(v => {
            v.active = !current;
            return v;
          }),
        );
        setWorkTypeAll(!current);
      } else {
        const selectedWorkTypes = workTypeList.map(v => {
          if (v.code === item.code) {
            v.active = !v.active;
          }
          return v;
        });
        const activeCheckArr = selectedWorkTypes.filter(
          v => !!v.active && v.active === true,
        );
        switch (activeCheckArr.length) {
          case 0:
            setWorkTypeAll(false);
            break;
          case selectedWorkTypes.length:
            setWorkTypeAll(true);
            break;
        }
        setWorkTypeList(selectedWorkTypes);
      }
    },
    onChangeLicenseNo: (text: string) => {
      setUser({...user, licenseNo: text});
      if (text.length > 0) {
        setRegexResult({
          ...regexResult,
          licenseNo: text.length === 12,
        });
      } else {
        setRegexResult({...regexResult, licenseNo: undefined});
      }
    },
    showImageOption: () => {
      navigation.navigate('UploadOptionModal', {path: 'JoinScreen'});
    },
    imageOption,
    addImage: (image: Image) => {
      setLicenseImage(image);
    },
    deleteImage: () => {
      setLicenseImage(undefined);
      setImageOption(undefined);
    },
    resetImageOption: () => {
      setImageOption(undefined);
    },
    joinBtnDisabled: !(
      regexResult.password &&
      regexResult.rePassword &&
      regexResult.licenseNo &&
      verified &&
      licenseImage &&
      user.name &&
      workTypeList.length > 0 &&
      area &&
      store
    ),
    join: () => {
      if (!joinLoading && licenseImage && area && store) {
        inventActionModal(navigation, {isShow: true});
        const formWorkTypeList = workTypeList.map(v => {
          if (v.active) {
            return {
              code: v.code,
              name: v.name,
            };
          }
        });
        join({
          variables: {
            data: {
              phone: user?.phone && user.phone.replace(/-/gi, ''),
              password: user.password,
              name: user.name,
              workCategories: formWorkTypeList.filter(v => v !== undefined),
              licenseNo: user?.licenseNo && user.licenseNo.replace(/-/gi, ''),
              area: [area],
              storeId: store.id,
            },
            sendId: verifyInfo?.sendId,
            file: uploadImageFormatting(licenseImage),
          },
        });
      }
    },
  };

  return <JoinPresenter {...props} />;
}

export default JoinContainer;
