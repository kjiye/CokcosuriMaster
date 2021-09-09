import {
  CategoryInput,
  CategoryName,
  VerifyInput,
} from '../../../../__generated__/globalTypes';
import {CategoryType, ImageSelectorOption} from '../../../models/common';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {
  GET_CATEGORIES,
  JOIN_MASTER,
  REQ_VERIFICATION_CODE,
  VERIFY_CODE,
} from './join.queries';
import {JoinFormInput, JoinRegex} from '../../../models/user';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {checkRegex, uploadImageFormatting} from '../../../utils/commonUtils';
import {useLazyQuery, useMutation} from '@apollo/client';
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

  const [getCategories] = useLazyQuery(GET_CATEGORIES, {
    onCompleted: (data: any) => {
      if (workTypeList.length <= 0) {
        const {categories} = data?.getCategories;
        setWorkTypeList(
          categories.map((v: CategoryType) => {
            v = {...v, active: false};
            return v;
          }),
        );
      }
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
          callBackAlert(I18n.t('Alert.req_verification_code'), () => {
            setPlayTimer(true);
            setTimerMs(5 * 60 * 1000);
            const {sendId} = data.reqVerificationCode;
            if (user?.phone) {
              setVerifyInfo({
                sendId: sendId,
                target: user.phone.replace(/-/gi, ''),
                code: '',
              });
            }
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

  useLayoutEffect(() => {
    getCategories({
      variables: {
        name: CategoryName.WORK_TYPE,
      },
    });
  }, []);

  useEffect(() => {
    if (route.params?.imageOption) {
      const {imageOption} = route.params;
      setImageOption(imageOption);
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
    onTimerStop: (ms: number) => {
      setPlayTimer(false);
    },
    onChangeName: (text: string) => {
      setUser({...user, name: text});
    },
    onChangePhone: (text: string) => {
      setUser({...user, phone: text});
      setVerifyInfo(undefined);
      setTimerMs(5 * 60 * 1000);
    },
    reqVerifyBtnDisabled:
      !checkRegex('phone', user?.phone || '') || reqVerifyLoading,
    reqVerifyBtnPress: () => {
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
    onSelectedWorkType: (item: CategoryInput) => {
      setWorkTypeList(
        workTypeList.map(v => {
          if (v.code === item.code) {
            v.active = !v.active;
          }
          return v;
        }),
      );
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
      }
    },
    onChangeLicenseNo: (text: string) => {
      setUser({...user, licenseNo: text});
      if (text.length > 0) {
        setRegexResult({
          ...regexResult,
          // licenseNo: !checkRegex('licenseNo', text),
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
    joinBtnDisabled: !(
      regexResult.password &&
      regexResult.rePassword &&
      regexResult.licenseNo &&
      verified &&
      licenseImage &&
      user.name &&
      workTypeList.length > 0
    ),
    join: () => {
      delete user.rePassword;
      if (!joinLoading && licenseImage) {
        inventActionModal(navigation, {isShow: true});
        join({
          variables: {
            data: {
              phone: user?.phone && user.phone.replace(/-/gi, ''),
              password: user.password,
              name: user.name,
              workCategories: workTypeList.filter(v => {
                if (v.active) {
                  delete v.active;
                  return v;
                }
              }),
              licenseNo: user?.licenseNo && user.licenseNo.replace(/-/gi, ''),
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
