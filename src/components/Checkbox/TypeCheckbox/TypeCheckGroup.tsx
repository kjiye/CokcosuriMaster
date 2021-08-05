import {SMALL, TINY} from '../../../constants/size';
import CheckItem from './TypeCheckItem';
import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const ItemMargin = {
  marginTop: TINY,
};

const ItemAdditonalMargin = {
  marginRight: SMALL,
};

interface Props {
  typeList: any[];
  numberPerLine: number;
  hasAllItem?: boolean;
}

function TypeCheckGroup({
  typeList,
  numberPerLine,
  hasAllItem = true,
}: Props): JSX.Element {
  return (
    <Wrapper>
      {!!hasAllItem && (
        <CheckItem
          numberPerLine={numberPerLine}
          wrapperStyle={{...ItemMargin, ...ItemAdditonalMargin}}
          name={'전체'}
        />
      )}
      {typeList.map((val, idx) => {
        if ((idx + (hasAllItem ? 2 : 1)) % numberPerLine === 0) {
          return (
            <CheckItem
              key={idx}
              numberPerLine={numberPerLine}
              wrapperStyle={ItemMargin}
              name={val.name}
            />
          );
        } else {
          return (
            <CheckItem
              key={idx}
              numberPerLine={numberPerLine}
              wrapperStyle={{...ItemMargin, marginRight: SMALL}}
              name={val.name}
            />
          );
        }
      })}
    </Wrapper>
  );
}

export default TypeCheckGroup;
