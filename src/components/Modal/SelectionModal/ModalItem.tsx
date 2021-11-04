import {CategoryType} from '../../../models/common';
import React from 'react';
import styled from 'styled-components/native';

const VERTICAL_PADDING = 16;
const HORIZON_PADDING = 12;

const Wrapper = styled.TouchableOpacity`
  padding: ${VERTICAL_PADDING}px ${HORIZON_PADDING}px;
  border-bottom-width: 1px;
  border-color: ${(props: any) => props.theme.colors.grey[3]};
`;

const TypeName = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  color: ${(props: any) => props.theme.colors.black[1]};
`;

interface Props {
  data: CategoryType;
  onPress?: (selected: CategoryType) => void;
}

function ModalItem({data, onPress}: Props): JSX.Element {
  return (
    <Wrapper
      onPress={() => {
        if (onPress) {
          onPress(data);
        }
      }}>
      <TypeName>{data.name}</TypeName>
    </Wrapper>
  );
}

export default ModalItem;
