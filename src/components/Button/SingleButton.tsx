import {GRAY_3, GRAY_6, PRIMARY_LIGHT, WHITE} from '../../constants/color';
import {INNER_MARGIN, LARGE, MINI, SMALL, STANDARD} from '../../constants/size';
import {Dimensions, GestureResponderEvent} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const {width} = Dimensions.get('screen');

const Button = styled.TouchableOpacity<{colored: boolean}>`
  width: ${(width - (STANDARD * 2 + INNER_MARGIN * 2 + 4 + MINI)) / 2}px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  border-width: 1px;
  border-color: ${GRAY_3};
  ${({colored}) => `
    background : ${colored ? PRIMARY_LIGHT : WHITE}
  `}
`;

const IconWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text<{colored: boolean}>`
  font-size: ${LARGE}px;
  font-weight: 600;
  ${({colored}) => `
    color: ${colored ? WHITE : GRAY_6}
  `}
`;

interface Props {
  name: string;
  icon?: JSX.Element;
  primaryColored?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

function SingleButton({
  name,
  icon,
  primaryColored = false,
  onPress,
}: Props): JSX.Element {
  return (
    <Button colored={primaryColored} onPress={onPress}>
      {icon ? (
        <IconWrapper>
          {icon}
          <ButtonText colored={primaryColored} style={{marginLeft: SMALL}}>
            {name}
          </ButtonText>
        </IconWrapper>
      ) : (
        <ButtonText colored={primaryColored}>{name}</ButtonText>
      )}
    </Button>
  );
}

export default SingleButton;
