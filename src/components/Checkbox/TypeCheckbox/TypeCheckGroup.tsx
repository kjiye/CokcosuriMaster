import {CategoryType} from '../../../models/common';
import CheckItem from './TypeCheckItem';
import I18n from '../../../utils/i18nHelpers';
import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const ItemMargin = {
  marginTop: 12,
};

const ItemAdditonalMargin = {
  marginRight: 14,
};

interface Props {
  typeList: CategoryType[];
  numberPerLine: number;
  hasAllItem?: boolean;
  isAllChecked: boolean;
  allPress?: (item: CategoryType) => void;
  itemPress?: (item: CategoryType) => void;
}

function TypeCheckGroup({
  typeList,
  numberPerLine,
  hasAllItem = true,
  isAllChecked,
  allPress,
  itemPress,
}: Props): JSX.Element {
  return (
    <Wrapper>
      {!!hasAllItem && (
        <CheckItem
          numberPerLine={numberPerLine}
          style={{...ItemMargin, ...ItemAdditonalMargin}}
          value={{name: I18n.t('all')}}
          onPress={allPress}
          checked={isAllChecked}
        />
      )}
      {typeList.map((val, idx) => {
        if ((idx + (hasAllItem ? 2 : 1)) % numberPerLine === 0) {
          return (
            <CheckItem
              key={idx}
              numberPerLine={numberPerLine}
              style={ItemMargin}
              value={val}
              onPress={itemPress}
              checked={!!val.active}
            />
          );
        } else {
          return (
            <CheckItem
              key={idx}
              numberPerLine={numberPerLine}
              style={{...ItemMargin, marginRight: 14}}
              value={val}
              onPress={itemPress}
              checked={!!val.active}
            />
          );
        }
      })}
    </Wrapper>
  );
}

export default TypeCheckGroup;
