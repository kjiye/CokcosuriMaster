import {GRAY_4, PRIMARY_LIGHT, WHITE} from '../../constants/color';
import {
  GestureResponderEvent,
  KeyboardTypeOptions,
  StyleProp,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {INNER_MARGIN, MEDIUM} from '../../constants/size';
import BasicInput from './BasicInput';
import React from 'react';
import TimerInput from './TimerInput';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

// padding: ${INNER_MARGIN}px 0;

const Button = styled.TouchableOpacity`
  margin-left: 7px;
  width: 100px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  background-color: ${PRIMARY_LIGHT};
`;

const ButtonText = styled.Text`
  font-size: ${MEDIUM}px;
  font-weight: bold;
  color: ${WHITE};
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

// usingTimer 옵션 추가

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
        style={{backgroundColor: buttonDisabled ? GRAY_4 : PRIMARY_LIGHT}}
        disabled={buttonDisabled}
        onPress={onPress}>
        <ButtonText>{buttonName}</ButtonText>
      </Button>
    </Wrapper>
  );
}

export default ButtonInput;
