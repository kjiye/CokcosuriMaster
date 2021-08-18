import {
  CategoryInput,
  CategoryName,
  VerifyInput,
} from '../../../../__generated__/globalTypes';
import {CategoryType, ImageSelectorOption} from '../../../models/common';
import {
  GET_CATEGORIES,
  JOIN_MASTER,
  REQ_VERIFICATION_CODE,
  VERIFY_CODE,
} from './join.queries';
import {JoinFormInput, JoinRegex} from '../../../models/user';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useLazyQuery, useMutation} from '@apollo/client';
import I18n from '../../../utils/i18nHelpers';
import {Image} from 'react-native-image-crop-picker';
import JoinPresenter from './JoinPresenter';
import {Platform} from 'react-native';
import {ReactNativeFile} from 'apollo-upload-client';
import {callBackAlert} from '../../../utils/alert';
import {checkRegex} from '../../../utils/commonUtils';
import {useNavigation} from '@react-navigation/native';

function JoinContainer({route}: any): JSX.Element {
  const navigation = useNavigation();
  // 입력한 회원정보 객체
  const [user, setUser] = useState<JoinFormInput>({});
  // 인증요청 후 받은 정보 + 입력한 인증번호 객체
  const [verifyInfo, setVerifyInfo] = useState<VerifyInput>();
  // 인증 여부
  const [verified, setVerified] = useState<boolean>(false);
  // 수리종목
  const [workTypeList, setWorkTypeList] = useState<CategoryType[]>([]);
  // 수리종목 전체 버튼
  const [workTypeAll, setWorkTypeAll] = useState<boolean>(false);
  // 선택한 이미지 옵션
  const [imageOption, setImageOption] = useState<ImageSelectorOption>();
  // 사업자 등록증 이미지
  const [licenseImage, setLicenseImage] = useState<Image>();
  // 유효성 검사 결과
  const [regexResult, setRegexResult] = useState<JoinRegex>({});

  const [getCategories] = useLazyQuery(GET_CATEGORIES, {
    onCompleted: (data: any) => {
      if (workTypeList.length <= 0) {
        setWorkTypeList(
          data?.getCategories.categories.map((v: CategoryType) => {
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
        callBackAlert(
          I18n.t('Error.common'),
          () => {
            return;
          },
          false,
        );
      },
      onCompleted: (data: any) => {
        if (data?.reqVerificationCode?.success) {
          const {sendId} = data.reqVerificationCode;
          if (user?.phone) {
            setVerifyInfo({
              sendId: sendId,
              target: user.phone.replace(/-/gi, ''),
              code: '',
            });
          }
        } else {
          callBackAlert(
            I18n.t('Error.req_verification_code'),
            () => {
              return;
            },
            false,
          );
        }
      },
    },
  );

  const [verifyCode, {loading: verifyCodeLoading}] = useMutation(VERIFY_CODE, {
    onError: () => {
      callBackAlert(
        I18n.t('Error.common'),
        () => {
          return;
        },
        false,
      );
    },
    onCompleted: (data: any) => {
      console.log(data);
      const message = data?.verifyCode?.success
        ? I18n.t('Alert.verify_code')
        : I18n.t('Error.verif_code');
      const result = data?.verifyCode?.success ? true : false;
      setVerified(result);
      callBackAlert(
        message,
        () => {
          return;
        },
        result,
      );
    },
  });

  const [join, {loading: joinLoading}] = useMutation(JOIN_MASTER, {
    onError: (error: any) => {
      console.log('회원가입 에러 ', error);
      callBackAlert(
        I18n.t('Error.join'),
        () => {
          return;
        },
        false,
      );
    },
    onCompleted: (data: any) => {
      // {joinMaster: {success: true}};
      if (data?.joinMaster?.success) {
        callBackAlert(
          I18n.t('Alert.join'),
          () => {
            navigation.navigate('LoginScreen');
          },
          false,
        );
      } else {
        callBackAlert(
          I18n.t('Error.join'),
          () => {
            return;
          },
          false,
        );
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
    onChangeName: (text: string) => {
      setUser({...user, name: text});
    },
    onChangePhone: (text: string) => {
      setUser({...user, phone: text});
    },
    reqVerifyBtnDisabled:
      !checkRegex('phone', user?.phone || '') || reqVerifyLoading,
    reqVerifyBtnPress: () => {
      if (!reqVerifyLoading && user?.phone) {
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
    verifyCodeBtnDisabled: !(verifyInfo?.code && verifyInfo.code.length > 0),
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
          licenseNo: !checkRegex('licenseNo', text),
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
      if (!joinLoading) {
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
            file: new ReactNativeFile({
              uri:
                Platform.OS === 'ios'
                  ? licenseImage?.sourceURL
                  : licenseImage?.path,
              name: licenseImage?.filename,
              type: licenseImage?.mime,
            }),
          },
        });
      }
    },
  };

  return <JoinPresenter {...props} />;
}

export default JoinContainer;
