import React, {useState} from 'react';
import {FIND_PASSWORD} from './findPassword.queries';
import FindPasswordPresenter from './FindPasswordPresenter';
import I18n from '../../../../utils/i18nHelpers';
import {PasswordRegex} from '../../../../models/user';
import {callBackAlert} from '../../../../utils/alert';
import {checkRegex} from '../../../../utils/commonUtils';
import {useMutation} from '@apollo/client';
import {useNavigation} from '@react-navigation/native';

function FindPasswordContainer(): JSX.Element {
  const navigation = useNavigation();
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [licenseNo, setLicenseNo] = useState<string>('');
  const [regexResult, setRegexResult] = useState<PasswordRegex>();

  const [findPassword] = useMutation(FIND_PASSWORD, {
    onError: () => {
      callBackAlert(I18n.t('Error.find_password'), () => {
        return;
      });
    },
    onCompleted: (data: any) => {
      callBackAlert(I18n.t('Alert.temp_password'), async () => {
        navigation.goBack();
      });
    },
  });

  const props = {
    name,
    phone,
    licenseNo,
    regexResult,
    btnDisabled: !(
      name.length > 0 &&
      regexResult?.phone &&
      regexResult?.licenseNo
    ),
    onChangeName: (text: string) => {
      setName(text);
    },
    onChangePhone: (text: string) => {
      setPhone(text);
      if (text.length > 0) {
        setRegexResult({
          ...regexResult,
          phone: checkRegex('phone', text),
        });
      } else {
        setRegexResult({...regexResult, phone: undefined});
      }
    },
    onChangeLicenseNo: (text: string) => {
      setLicenseNo(text);
      if (text.length > 0) {
        setRegexResult({
          ...regexResult,
          // licenseNo: checkRegex('licenseNo', text),
          licenseNo: text.length === 12,
        });
      } else {
        setRegexResult({...regexResult, licenseNo: undefined});
      }
    },
    okPress: () => {
      callBackAlert(
        '임시 비밀번호를 발급받으시겠습니까?',
        () => {
          findPassword({
            variables: {
              name: name,
              phone: phone.replace(/-/gi, ''),
              licenseNo: licenseNo.replace(/-/gi, ''),
            },
          });
        },
        true,
      );
    },
  };
  return <FindPasswordPresenter {...props} />;
}

export default FindPasswordContainer;
