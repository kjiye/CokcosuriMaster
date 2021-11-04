import {GestureResponderEvent} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const LEFT_PADDING = 25;
const DEFAULT_PADDING = 6;

const SubMenu = styled.TouchableOpacity`
  padding: ${DEFAULT_PADDING}px ${DEFAULT_PADDING}px ${DEFAULT_PADDING}px
    ${LEFT_PADDING}px;
`;

const SubMenuText = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  color: ${(props: any) => props.theme.colors.primaryLight};
`;

interface Props {
  name: string;
  onPress?: (event: GestureResponderEvent) => void;
}

function SubMenuItem({name, onPress}: Props): JSX.Element {
  return (
    <SubMenu onPress={onPress}>
      <SubMenuText>{name}</SubMenuText>
    </SubMenu>
  );
}

export default SubMenuItem;
