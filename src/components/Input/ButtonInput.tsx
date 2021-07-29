import {GRAY_4, PRIMARY_LIGHT, WHITE} from '../../constants/color';
import {INNER_MARGIN, MEDIUM} from '../../constants/size';
import {StyleProp, ViewProps, ViewStyle} from 'react-native';
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
}

function ButtonInput({
  style,
  placeholder,
  buttonDisabled = false,
  buttonName,
}: Props): JSX.Element {
  return (
    <Wrapper style={style as StyleProp<ViewProps>}>
      <BasicInput
        placeholder={placeholder}
        style={{display: 'flex', flex: 1}}
      />
      <Button
        disabled={buttonDisabled}
        style={{backgroundColor: buttonDisabled ? GRAY_4 : PRIMARY_LIGHT}}>
        <ButtonText>{buttonName}</ButtonText>
      </Button>
    </Wrapper>
  );
}

export default ButtonInput;
