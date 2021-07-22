import {BLACK_1, PRIMARY_LIGHT} from '../../constants/color';
import {MEDIUM} from '../../constants/size';
import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex-direction: row;
  align-items: baseline;
`;

const UnderLineView = styled.View`
  width: 135px;
  border-bottom-width: 1px;
  border-color: ${PRIMARY_LIGHT};
`;

const TextUnit = styled.Text`
  margin-left: 3px;
  font-size: ${MEDIUM}px;
  font-weight: bold;
  color: ${BLACK_1};
`;

interface Props {
  children: JSX.Element;
  unit?: string;
}

function UnderLineInfoItem({children, unit}: Props): JSX.Element {
  return (
    <Wrapper>
      <UnderLineView>{children}</UnderLineView>
      {!!unit && <TextUnit>{unit}</TextUnit>}
    </Wrapper>
  );
}

export default UnderLineInfoItem;
