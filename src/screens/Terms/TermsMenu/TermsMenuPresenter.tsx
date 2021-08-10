import BaseContainer from '../../../components/BaseContainer';
import I18n from '../../../utils/i18nHelpers';
import {MenuItem} from '../../../components/Item';
import React from 'react';
import styled from 'styled-components/native';
import {GestureResponderEvent} from 'react-native';

const Container = styled(BaseContainer)`
  background: ${(props: any) => props.theme.colors.background};
`;

const Menu = styled(MenuItem)`
  padding: 25px ${(props: any) => props.theme.size.standardPadding}px;
  border-bottom-width: 1px;
  border-color: ${(props: any) => props.theme.colors.grey[2]};
`;

interface Props {
  privacyPolicy: (event: GestureResponderEvent) => void;
  privacyThird: (event: GestureResponderEvent) => void;
  privacyUsage: (event: GestureResponderEvent) => void;
  appCondition: (event: GestureResponderEvent) => void;
}

function TermsMenuPresenter({
  privacyPolicy,
  privacyThird,
  privacyUsage,
  appCondition,
}: Props): JSX.Element {
  return (
    <Container>
      <Menu name={I18n.t('Terms.privacy_policy')} onPress={privacyPolicy} />
      <Menu name={I18n.t('Terms.privacy_third')} onPress={privacyThird} />
      <Menu name={I18n.t('Terms.privacy_usage')} onPress={privacyUsage} />
      <Menu name={I18n.t('Terms.app_condition')} onPress={appCondition} />
    </Container>
  );
}

export default TermsMenuPresenter;
