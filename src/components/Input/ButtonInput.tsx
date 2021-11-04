import {
  GestureResponderEvent,
  KeyboardTypeOptions,
  StyleProp,
  ViewProps,
  ViewStyle,
} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import BasicInput from './BasicInput';
import React from 'react';
import TimerInput from './TimerInput';

const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const Button = styled.TouchableOpacity`
  margin-left: 7px;
  width: 100px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  background-color: ${(props: any) => props.theme.colors.primaryLight};
`;

const ButtonText = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  font-weight: bold;
  color: ${(props: any) => props.theme.colors.grey[0]};
  text-align: center;
`;

interface Props {
  style?: StyleProp<ViewStyle>;
  placeholder?: string;
  value?: string;
  buttonDisabled?: boolean;
  buttonName: string;
  onChange?: (text: string) => void;
  onPress?: (event: GestureResponderEvent) => void;
  mask?: any[];
  keyboardType?: KeyboardTypeOptions;
  millisecond?: number;
  usingTimer?: boolean;
  playTimer?: boolean;
  timerStop?: (ms: number) => void;
}

function ButtonInput({
  style,
  placeholder,
  value,
  buttonDisabled = false,
  buttonName,
  onChange,
  onPress,
  mask,
  keyboardType,
  millisecond = 0,
  usingTimer = false,
  playTimer = false,
  timerStop,
}: Props): JSX.Element {
  const theme: any = useTheme();
  return (
    <Wrapper style={style as StyleProp<ViewProps>}>
      {usingTimer ? (
        <TimerInput
          placeholder={placeholder}
          value={value}
          style={{display: 'flex', flex: 1}}
          onChange={onChange}
          keyboardType={keyboardType}
          millisecond={millisecond}
          playTimer={playTimer}
          timerStop={timerStop}
        />
      ) : (
        <BasicInput
          placeholder={placeholder}
          value={value}
          style={{display: 'flex', flex: 1}}
          onChange={onChange}
          mask={mask}
          keyboardType={keyboardType}
        />
      )}

      <Button
        style={{
          backgroundColor: buttonDisabled
            ? theme.colors.grey[4]
            : theme.colors.primaryLight,
        }}
        disabled={buttonDisabled}
        onPress={onPress}>
        <ButtonText>{buttonName}</ButtonText>
      </Button>
    </Wrapper>
  );
}

export default ButtonInput;
