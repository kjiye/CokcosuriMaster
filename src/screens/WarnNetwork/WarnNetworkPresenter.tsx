import {Dimensions, GestureResponderEvent} from 'react-native';
import BaseContainer from '../../components/BaseContainer';
import I18n from '../../utils/i18nHelpers';
import {PrimaryButton} from '../../components/Button';
import React from 'react';
import WifiErrorSvg from '../../../assets/svg/ic_wifi_error.svg';
import styled from 'styled-components/native';

const ICON_SIZE = 80;
const {width} = Dimensions.get('screen');

const Container = styled(BaseContainer)`
  flex: 1;
  background: ${(props: any) => props.theme.colors.background};
`;

const ContentWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const WarnMessage = styled.Text`
  margin-top: ${(props: any) => props.theme.size.margin}px;
  width: ${width - 120}px;
  font-size: ${(props: any) => props.theme.fonts.large}px;
  color: ${(props: any) => props.theme.colors.black[1]}
  text-align: center;
  line-height: 24px;
`;

interface Props {
  settingPress: (event: GestureResponderEvent) => void;
}

function WarnNetworkPresenter({settingPress}: Props): JSX.Element {
  return (
    <Container
      button={
        <PrimaryButton
          title={I18n.t('Button.bottom.setting')}
          onPress={settingPress}
        />
      }>
      <ContentWrapper>
        <WifiErrorSvg width={ICON_SIZE} height={ICON_SIZE} />
        <WarnMessage>{I18n.t('WarnNetwork.message')}</WarnMessage>
      </ContentWrapper>
    </Container>
  );
}

export default WarnNetworkPresenter;
