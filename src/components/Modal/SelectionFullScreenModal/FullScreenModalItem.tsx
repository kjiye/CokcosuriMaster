import {CategoryType} from '../../../models/common';
import {GestureResponderEvent} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.TouchableOpacity`
  padding: 25px 20px;
  border-bottom-width: 1px;
  border-color: ${(props: any) => props.theme.colors.grey[3]};
`;

const TypeName = styled.Text<{active: boolean}>`
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  ${(props: any) => `
  color: ${
    props.active ? props.theme.colors.primary : props.theme.colors.black[1]
  }
  `}
`;

interface Props {
  item: CategoryType;
  active?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

function FullScreenModalItem({
  item,
  active = false,
  onPress,
}: Props): JSX.Element {
  return (
    <Wrapper onPress={onPress}>
      <TypeName active={active}>{item.name}</TypeName>
    </Wrapper>
  );
}

export default FullScreenModalItem;
