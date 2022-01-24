import {GestureResponderEvent, ViewProps, ViewStyle} from 'react-native';
import React from 'react';
import {StyleProp} from 'react-native';
import styled from 'styled-components/native';

const Wrapper = styled.TouchableOpacity`
  padding: 16px 0;
`;

const MenuText = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  font-weight: 500;
  color: ${(props: any) => props.theme.colors.black[1]};
`;

interface Props {
  style?: StyleProp<ViewStyle>;
  name: string;
  onPress?: (event: GestureResponderEvent) => void;
}

function MenuItem({style, name, onPress}: Props): JSX.Element {
  return (
    <Wrapper style={style as StyleProp<ViewProps>} onPress={onPress}>
      <MenuText>{name}</MenuText>
    </Wrapper>
  );
}

export default MenuItem;
