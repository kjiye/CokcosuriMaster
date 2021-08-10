import {
  GestureResponderEvent,
  StyleProp,
  ViewProps,
  ViewStyle,
} from 'react-native';
import I18n from '../../../utils/i18nHelpers';
import {ItemType} from '../../../models/common';
import React from 'react';
import TextLineCheckItem from './TextLineCheckItem';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  background: ${(props: any) => props.theme.colors.background};
`;

const Divider = styled.View`
  margin: 10px 0;
  border-top-width: 1px;
  border-color: ${(props: any) => props.theme.colors.grey[4]};
`;

interface Props {
  style?: StyleProp<ViewStyle>;
  hasAll?: boolean;
  checkAll?: (event: GestureResponderEvent) => void;
  itemTypeList: ItemType[];
}

function TextLineCheckGroup({
  style,
  hasAll = true,
  checkAll,
  itemTypeList,
}: Props): JSX.Element {
  const checkedStatus = itemTypeList.find(v => !v.checked)?.checked;
  const isCheckedAll =
    typeof checkedStatus === 'undefined' ? true : checkedStatus;
  return (
    <Wrapper style={style as StyleProp<ViewProps>}>
      {hasAll && (
        <>
          <TextLineCheckItem
            required={false}
            text={I18n.t('Terms.all')}
            onPress={checkAll}
            checked={isCheckedAll}
          />
          <Divider />
        </>
      )}
      {itemTypeList.map((v, i) => {
        return (
          <TextLineCheckItem
            key={i.toString()}
            text={v.name}
            content={v.content}
            textPress={v.textPress}
            onPress={v.onPress}
            checked={v.checked}
          />
        );
      })}
    </Wrapper>
  );
}

export default TextLineCheckGroup;
