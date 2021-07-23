import {BLACK_1, GRAY_3} from '../../constants/color';
import {MEDIUM, TINY} from '../../constants/size';
import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  padding: ${MEDIUM}px ${TINY}px;
  border-bottom-width: 1px;
  border-color: ${GRAY_3};
`;

const OptionName = styled.Text`
  font-size: ${MEDIUM}px;
  color: ${BLACK_1};
`;

function ModalItem() {
  return (
    <Wrapper>
      <OptionName>기타</OptionName>
    </Wrapper>
  );
}

export default ModalItem;
