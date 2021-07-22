import {GRAY_4, PRIMARY_LIGHT, WHITE} from '../../constants/color';
import {INNER_MARGIN, MEDIUM} from '../../constants/size';
import BasicInput from './BasicInput';
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
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
  buttonDisabled?: boolean;
}

function ButtonInput({buttonDisabled = false}: Props): JSX.Element {
  return (
    <Container>
      <BasicInput wrapperStyle={{display: 'flex', flex: 1}} />
      <Button
        style={{backgroundColor: buttonDisabled ? GRAY_4 : PRIMARY_LIGHT}}>
        <ButtonText>테스트 버튼</ButtonText>
      </Button>
    </Container>
  );
}

export default ButtonInput;
