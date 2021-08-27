import {GestureResponderEvent} from 'react-native';
import I18n from '../../../utils/i18nHelpers';
import React from 'react';
import styled from 'styled-components/native';

const ButtonWrapper = styled.View`
  margin-top: ${(props: any) => props.theme.fonts.normal}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Button = styled.TouchableOpacity`
  padding: 0 ${(props: any) => props.theme.size.padding}px;
`;

const ButtonText = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.tiny}px;
  color: ${(props: any) => props.theme.colors.grey[5]};
`;

const ButtonSlash = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.tiny}px;
  color: ${(props: any) => props.theme.colors.primary};
`;

interface Props {
  leftBtnPress: (event: GestureResponderEvent) => void;
  rightBtnPress: (event: GestureResponderEvent) => void;
}

function ButtonGroup({leftBtnPress, rightBtnPress}: Props): JSX.Element {
  return (
    <ButtonWrapper>
      <Button onPress={leftBtnPress}>
        <ButtonText>{I18n.t('Button.join')}</ButtonText>
      </Button>
      <ButtonSlash>{'/'}</ButtonSlash>
      <Button onPress={rightBtnPress}>
        <ButtonText>{I18n.t('Button.find_password')}</ButtonText>
      </Button>
    </ButtonWrapper>
  );
}

export default ButtonGroup;
