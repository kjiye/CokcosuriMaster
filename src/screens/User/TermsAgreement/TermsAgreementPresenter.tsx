import {Dimensions, GestureResponderEvent} from 'react-native';
import {AppTheme} from '../../../themes/theme';
import BaseContainer from '../../../components/BaseContainer';
import I18n from '../../../utils/i18nHelpers';
import LogoSvg from '../../../../assets/svg/logo.svg';
import {PrimaryButton} from '../../../components/Button';
import React from 'react';
import {TermsAgreement} from '../../../models/user';
import {TextLineCheckGroup} from '../../../components/Checkbox/TextLineCheckbox';
import styled from 'styled-components/native';

const {height} = Dimensions.get('screen');
const {size, colors}: any = AppTheme;

const Container = styled(BaseContainer)`
  padding: ${height * 0.2}px ${size.standardPadding}px 0
    ${size.standardPadding}px;
  background: ${colors.background};
`;

const LogoView = styled.View`
  align-items: flex-end;
`;

const CheckGroup = styled(TextLineCheckGroup)`
  width: 100%;
  position: absolute;
  left: ${size.standardPadding}px;
  bottom: 110px;
`;

interface Props {
  showPolicy: (title: string, content: string) => void;
  agreements: TermsAgreement;
  checkAll: (event: GestureResponderEvent) => void;
  checkPrivacyPolicy: (event: GestureResponderEvent) => void;
  checkPrivacyThird: (event: GestureResponderEvent) => void;
  checkPrivacyUsage: (event: GestureResponderEvent) => void;
  checkCondition: (event: GestureResponderEvent) => void;
  next: (event: GestureResponderEvent) => void;
}

function TermsAgreementPresenter({
  showPolicy,
  agreements,
  checkAll,
  checkPrivacyPolicy,
  checkPrivacyThird,
  checkPrivacyUsage,
  checkCondition,
  next,
}: Props): JSX.Element {
  return (
    <Container button={<PrimaryButton title={'다음'} onPress={next} />}>
      <LogoView>
        <LogoSvg />
      </LogoView>
      <CheckGroup
        checkAll={checkAll}
        itemTypeList={[
          {
            name: I18n.t('Terms.privacy_policy'),
            content: I18n.t('TempTerms.privacy_policy'),
            textPress: showPolicy,
            onPress: checkPrivacyPolicy,
            checked: agreements.terms_privacy_policy,
          },
          {
            name: I18n.t('Terms.privacy_third'),
            content: I18n.t('TempTerms.privacy_third'),
            textPress: showPolicy,
            onPress: checkPrivacyThird,
            checked: agreements.terms_privacy_third,
          },
          {
            name: I18n.t('Terms.privacy_usage'),
            content: I18n.t('TempTerms.privacy_usage'),
            textPress: showPolicy,
            onPress: checkPrivacyUsage,
            checked: agreements.terms_privacy_usage,
          },
          {
            name: I18n.t('Terms.app_condition'),
            content: I18n.t('TempTerms.app_condition'),
            textPress: showPolicy,
            onPress: checkCondition,
            checked: agreements.terms_condition,
          },
        ]}
      />
    </Container>
  );
}

export default TermsAgreementPresenter;
