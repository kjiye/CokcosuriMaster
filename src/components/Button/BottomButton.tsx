import {BIG, MASSIVE, MINI, TINY} from '../../constants/size';
import {GRAY_4, PRIMARY_MAIN, WHITE} from '../../constants/color';
import {Dimensions} from 'react-native';
import FullSingleButton from './FullSingleButton';
import React from 'react';
import styled from 'styled-components/native';

const {width} = Dimensions.get('screen');

// margin:0px ${MASSIVE}px ${MASSIVE}px ${MASSIVE}px;
const Wrapper = styled.SafeAreaView`
  margin: 0px ${MASSIVE}px;
`;

const Button = styled.TouchableOpacity<{btnDisabled: boolean}>`
  padding: ${TINY}px 0;
  width: ${width - MASSIVE * 2}px;
  border-radius: ${BIG}px;
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
  name: string;
  disabled?: boolean;
}

function BottomButton({name, disabled}: Props): JSX.Element {
  return (
    <Wrapper>
      {/* <Button
        btnDisabled={!!disabled}
        disabled={disabled}>
        <ButtonText>{name}</ButtonText>
      </Button> */}
      <FullSingleButton
        btnWidth={width - MASSIVE * 2}
        name={name}
        disabled={disabled}
      />
    </Wrapper>
  );
}

export default BottomButton;
