import {BIG, TINY} from '../../constants/size';
import {GRAY_4, PRIMARY_MAIN, WHITE} from '../../constants/color';
import React from 'react';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity<{
  btnWidth: number;
  btnDisabled: boolean;
}>`
  padding: ${TINY}px 0;
  border-radius: ${BIG}px;
  width: ${({btnWidth}) => btnWidth}px;
  ${({btnDisabled}) => `
  background : ${btnDisabled ? GRAY_4 : PRIMARY_MAIN}
`}
`;

const ButtonText = styled.Text`
  font-size: ${BIG}px;
  font-weight: bold;
  color: ${WHITE};
  text-align: center;
`;

interface Props {
  btnWidth: number;
  name: string;
  disabled?: boolean;
}

function FullSingleButton({btnWidth, name, disabled}: Props): JSX.Element {
  return (
    <Button btnDisabled={!!disabled} btnWidth={btnWidth}>
      <ButtonText>{name}</ButtonText>
    </Button>
  );
}

export default FullSingleButton;
