import React from 'react';
import {GestureResponderEvent} from 'react-native';
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
        <ButtonText>회원가입</ButtonText>
      </Button>
      <ButtonSlash>{'/'}</ButtonSlash>
      <Button onPress={rightBtnPress}>
        <ButtonText>비밀번호 찾기</ButtonText>
      </Button>
    </ButtonWrapper>
  );
}

export default ButtonGroup;
