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

const Wrapper = styled.View<{focus: boolean}>`
  padding: ${INNER_MARGIN}px;
  border-width: 1px;
  border-radius: ${MINI}px;
  background-color: ${WHITE};
  ${({focus}) => `border-color: ${focus ? PRIMARY_LIGHT : GRAY_3}`}
`;

const Input = styled.TextInput`
  padding: 0;
  font-size: ${MEDIUM}px;
  color: ${BLACK_1};
`;

interface Props {
  wrapperStyle?: StyleProp<ViewStyle>;
  placeholder?: string;
  secure?: boolean;
}

// Mask, 내부 우측에 요소 표시 옵션 추가하기
function BasicInput({
  wrapperStyle,
  placeholder = '',
  secure = false,
}: Props): JSX.Element {
  const [focus, setFocus] = useState<boolean>(false);
  return (
    <Wrapper style={wrapperStyle as StyleProp<ViewProps>} focus={focus}>
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
        onChangeText={() => {}}
      />
    </Wrapper>
  );
}

export default BasicInput;
