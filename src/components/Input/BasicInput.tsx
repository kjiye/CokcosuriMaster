import {
  GRAY_3,
  PLACEHOLDER_COLOR,
  PRIMARY_LIGHT,
  WHITE,
} from '../../constants/color';
import {INNER_MARGIN, MEDIUM, MINI} from '../../constants/size';
import React, {useState} from 'react';
import {StyleProp, ViewProps, ViewStyle} from 'react-native';
import {KeyboardTypeOptions} from 'react-native';
import MaskInput from 'react-native-mask-input';
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

const Input = styled(MaskInput)`
  height: 100%;
  padding: 0 ${INNER_MARGIN}px;
  font-size: ${MEDIUM}px;
  color: ${(props: any) =>
    props.editable ? props.theme.colors.black[1] : props.theme.colors.grey[5]};
`;

interface Props {
  style?: StyleProp<ViewStyle>;
  placeholder?: string;
  value?: string;
  secure?: boolean;
  isShort?: boolean;
  editable?: boolean;
  onChange?: (text: string) => void;
  mask?: any[];
  keyboardType?: KeyboardTypeOptions;
}

function BasicInput({
  style,
  placeholder = '',
  value,
  secure = false,
  isShort = false,
  editable = true,
  onChange,
  mask,
  keyboardType,
}: Props): JSX.Element {
  const [focus, setFocus] = useState<boolean>(false);
  return (
    <Wrapper
      style={style as StyleProp<ViewProps>}
      focus={focus}
      isShort={isShort}>
      <Input
        keyboardType={keyboardType}
        editable={editable}
        placeholder={placeholder}
        placeholderTextColor={PLACEHOLDER_COLOR}
        secureTextEntry={secure}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        value={value}
        onChangeText={onChange}
        mask={mask}
      />
    </Wrapper>
  );
}

export default BasicInput;
