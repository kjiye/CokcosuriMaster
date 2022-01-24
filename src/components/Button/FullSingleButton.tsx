import React from 'react';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity<{
  btnWidth: number;
  btnDisabled: boolean;
}>`
  padding: 12px 0;
  border-radius: 24px;
  width: ${({btnWidth}) => btnWidth}px;
  ${({btnDisabled, theme}: any) => `
  background : ${btnDisabled ? theme.colors.grey[4] : theme.colors.primary}
`}
`;

const ButtonText = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.big}px;
  font-weight: bold;
  color: ${(props: any) => props.theme.colors.white};
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
