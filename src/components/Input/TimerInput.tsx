import {
  KeyboardTypeOptions,
  StyleProp,
  ViewProps,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import Timer from '../Item/TimerItem';
import styled from 'styled-components/native';
import {useTheme} from 'styled-components';

const DEFAULT_HEIGHT = 50;
const SHORT_HEIGHT = 40;

const Wrapper = styled.View<{focus: boolean; isShort: boolean}>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: ${(props: any) => props.theme.size.innerMargin}px;
  border-width: 1px;
  border-radius: ${(props: any) => props.theme.fonts.mini}px;
  background-color: ${(props: any) => props.theme.colors.grey[0]};
  ${(props: any) => `
    ${`border-color: ${
      props.focus ? props.theme.colors.primaryLight : props.theme.colors.grey[3]
    }`}
  `}
  ${(props: any) => `
    height: ${props.isShort ? SHORT_HEIGHT : DEFAULT_HEIGHT}px
  `};
`;

const Input = styled.TextInput`
  width: 80%;
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
  isShort?: boolean;
  editable?: boolean;
  onChange?: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  millisecond: number;
  playTimer?: boolean;
  timerStart?: (milisecond: number) => void;
  timerStop?: (milisecond: number) => void;
}

function TimerInput({
  style,
  placeholder = '',
  value,
  isShort = false,
  editable = true,
  onChange,
  keyboardType,
  millisecond,
  playTimer,
  timerStart,
  timerStop,
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
        placeholderTextColor={theme.colors.grey[5]}
        value={value}
        onChangeText={onChange}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
      />
      <Timer
        play={playTimer}
        milisecond={millisecond}
        onStart={timerStart}
        onStop={timerStop}
      />
    </Wrapper>
  );
}

export default TimerInput;
