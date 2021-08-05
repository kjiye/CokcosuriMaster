import {GRAY_4, PRIMARY_LIGHT, WHITE} from '../../constants/color';
import {
  GestureResponderEvent,
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
  buttonDisabled?: boolean;
  buttonName: string;
  onChange?: (text: string) => void;
  onPress?: (event: GestureResponderEvent) => void;
}

function ButtonInput({
  style,
  placeholder,
  buttonDisabled = false,
  buttonName,
  onChange,
  onPress,
}: Props): JSX.Element {
  return (
    <Wrapper style={style as StyleProp<ViewProps>}>
      <BasicInput
        placeholder={placeholder}
        style={{display: 'flex', flex: 1}}
        onChange={onChange}
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
