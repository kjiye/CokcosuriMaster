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
import styled from 'styled-components/native';

const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const Button = styled.TouchableOpacity`
  padding: ${INNER_MARGIN}px 0;
  margin-left: 7px;
  width: 100px;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  background-color: ${PRIMARY_LIGHT};
`;

const ButtonText = styled.Text`
  font-size: ${MEDIUM}px;
  font-weight: bold;
  color: ${WHITE};
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
}: Props): JSX.Element {
  return (
    <Wrapper style={style as StyleProp<ViewProps>}>
      <BasicInput
        placeholder={placeholder}
        value={value}
        style={{display: 'flex', flex: 1}}
        onChange={onChange}
        mask={mask}
        keyboardType={keyboardType}
      />
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
