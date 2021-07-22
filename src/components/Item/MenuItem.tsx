import {BLACK_1} from '../../constants/color';
import {GestureResponderEvent} from 'react-native';
import {MEDIUM} from '../../constants/size';
import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.TouchableOpacity`
  flex: 1;
  padding: ${MEDIUM}px 0;
`;

const MenuText = styled.Text`
  font-size: ${MEDIUM}px;
  color: ${BLACK_1};
`;

interface Props {
  name: string;
  onPress: (event: GestureResponderEvent) => void;
}

function MenuItem({name, onPress}: Props): JSX.Element {
  return (
    <Wrapper onPress={onPress}>
      <MenuText>{name}</MenuText>
    </Wrapper>
  );
}

export default MenuItem;
