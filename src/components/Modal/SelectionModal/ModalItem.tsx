import React from 'react';
import styled from 'styled-components/native';

const VERTICAL_PADDING = 16;
const HORIZON_PADDING = 12;

const Wrapper = styled.View`
  padding: ${VERTICAL_PADDING}px ${HORIZON_PADDING}px;
  border-bottom-width: 1px;
  border-color: ${(props: any) => props.theme.colors.grey[3]};
`;

const OptionName = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  color: ${(props: any) => props.theme.colors.black[1]};
`;

interface Props {
  name: string;
}

function ModalItem({name}: Props): JSX.Element {
  return (
    <Wrapper>
      <OptionName>{name}</OptionName>
    </Wrapper>
  );
}

export default ModalItem;
