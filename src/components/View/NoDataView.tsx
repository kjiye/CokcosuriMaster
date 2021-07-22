import {BLACK_1} from '../../constants/color';
import {LARGE} from '../../constants/size';
import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Message = styled.Text`
  text-align: center;
  font-size: ${LARGE}px;
  font-weight: bold;
  line-height: 28px;
  color: ${BLACK_1};
`;

interface Props {
  message: string;
}

function NoDataView({message}: Props): JSX.Element {
  return (
    <Wrapper>
      <Message>{message}</Message>
    </Wrapper>
  );
}

export default NoDataView;
