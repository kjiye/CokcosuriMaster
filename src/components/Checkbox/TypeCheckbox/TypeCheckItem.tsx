import {Dimensions, StyleProp, ViewProps, ViewStyle} from 'react-native';
import {CategoryType} from '../../../models/common';
import React from 'react';
import styled from 'styled-components/native';

const {width} = Dimensions.get('screen');
const PADDING_TOTAL = 74;
const ITEM_HEIGHT = 40;

const CheckView = styled.TouchableOpacity<{checked: boolean}>`
  height: ${ITEM_HEIGHT}px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-radius: 9px;
  ${(props: any) => `
    border-color: ${
      props.checked
        ? props.theme.colors.primaryLight
        : props.theme.colors.grey[3]
    }
  `}
`;

const TypeText = styled.Text<{checked: boolean}>`
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  font-weight: 500;
  ${(props: any) => `
    color: ${
      props.checked
        ? props.theme.colors.primaryLight
        : props.theme.colors.grey[5]
    }
  `}
`;

interface Props {
  numberPerLine: number;
  wrapperStyle?: StyleProp<ViewStyle>;
  value: CategoryType;
  checked: boolean;
  onPress?: (item: CategoryType) => void;
}

function TypeCheckItem({
  numberPerLine,
  wrapperStyle,
  value,
  checked,
  onPress,
}: Props): JSX.Element {
  return (
    <CheckView
      style={[
        {width: Math.ceil((width - PADDING_TOTAL) / numberPerLine)},
        wrapperStyle as StyleProp<ViewProps>,
      ]}
      checked={checked}
      onPress={() => {
        if (onPress) {
          onPress(value);
        }
      }}>
      <TypeText checked={checked}>{value.name}</TypeText>
    </CheckView>
  );
}

export default TypeCheckItem;
