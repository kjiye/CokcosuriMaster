import {GestureResponderEvent, ViewProps, ViewStyle} from 'react-native';
import {BLACK_1} from '../../constants/color';
import {MEDIUM} from '../../constants/size';
import React from 'react';
import {StyleProp} from 'react-native';
import styled from 'styled-components/native';

const Wrapper = styled.TouchableOpacity`
  padding: ${MEDIUM}px 0;
`;

const MenuText = styled.Text`
  font-size: ${MEDIUM}px;
  font-weight: 500;
  color: ${BLACK_1};
`;

interface Props {
  style?: StyleProp<ViewStyle>;
  name: string;
  onPress: (event: GestureResponderEvent) => void;
}

function MenuItem({style, name, onPress}: Props): JSX.Element {
  return (
    <Wrapper style={style as StyleProp<ViewProps>} onPress={onPress}>
      <MenuText>{name}</MenuText>
    </Wrapper>
  );
}

export default MenuItem;
