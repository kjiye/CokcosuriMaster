import {
  BLACK_1,
  GRAY_3,
  PLACEHOLDER_COLOR,
  PRIMARY_LIGHT,
  WHITE,
} from '../../constants/color';
import {INNER_MARGIN, MEDIUM, MINI} from '../../constants/size';
import React, {useState} from 'react';
import {StyleProp, ViewProps, ViewStyle} from 'react-native';
import styled from 'styled-components/native';

const DEFAULT_HEIGHT = 50;
const SHORT_HEIGHT = 40;

const Wrapper = styled.View<{focus: boolean; isShort: boolean}>`
  border-width: 1px;
  border-radius: ${MINI}px;
  background-color: ${WHITE};
  ${({focus}) => `border-color: ${focus ? PRIMARY_LIGHT : GRAY_3}`}
  ${({isShort}) => `
    height: ${isShort ? SHORT_HEIGHT : DEFAULT_HEIGHT}px`}
`;

const Input = styled.TextInput`
  height: 100%;
  padding: 0 ${INNER_MARGIN}px;
  font-size: ${MEDIUM}px;
  color: ${BLACK_1};
`;

interface Props {
  style?: StyleProp<ViewStyle>;
  placeholder?: string;
  secure?: boolean;
  isShort?: boolean;
  onChange?: (text: string) => void;
}

// Mask, 내부 우측에 요소 표시 옵션 추가하기
function BasicInput({
  style,
  placeholder = '',
  secure = false,
  isShort = false,
  onChange,
}: Props): JSX.Element {
  const [focus, setFocus] = useState<boolean>(false);
  return (
    <Wrapper
      style={style as StyleProp<ViewProps>}
      focus={focus}
      isShort={isShort}>
      <Input
        placeholder={placeholder}
        placeholderTextColor={PLACEHOLDER_COLOR}
        secureTextEntry={secure}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        onChangeText={onChange}
      />
    </Wrapper>
  );
}

export default BasicInput;
