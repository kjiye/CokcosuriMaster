import React, {useState} from 'react';
import {StyleProp, ViewProps, ViewStyle} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import {KeyboardTypeOptions} from 'react-native';
import MaskInput from 'react-native-mask-input';

const DEFAULT_HEIGHT = 50;
const SHORT_HEIGHT = 40;

const Wrapper = styled.View<{focus: boolean; isShort: boolean}>`
  border-width: 1px;
  border-radius: ${(props: any) => props.theme.size.borderRadius}px;
  background-color: ${(props: any) => props.theme.colors.grey[0]};
  ${({focus, theme}: any) =>
    `border-color: ${focus ? theme.colors.primaryLight : theme.colors.grey[3]}`}
  ${({isShort}) => `
    height: ${isShort ? SHORT_HEIGHT : DEFAULT_HEIGHT}px`}
`;

const Input = styled(MaskInput)`
  height: 100%;
  padding: 0 ${(props: any) => props.theme.size.innerMargin}px;
  font-size: ${(props: any) => props.theme.fonts.normal}px;
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
  value = '',
  secure = false,
  isShort = false,
  editable = true,
  onChange,
  mask,
  keyboardType = 'default',
}: Props): JSX.Element {
  const theme: any = useTheme();
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
        placeholderTextColor={theme.colors.placeholder}
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
