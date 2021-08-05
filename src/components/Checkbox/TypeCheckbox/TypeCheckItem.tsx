import {Dimensions, StyleProp, ViewProps, ViewStyle} from 'react-native';
import {GRAY_3, GRAY_5, PRIMARY_LIGHT} from '../../../constants/color';
import React, {useState} from 'react';
import styled, {css} from 'styled-components/native';
import {MEDIUM} from '../../../constants/size';

const {width} = Dimensions.get('screen');

const CheckView = styled.TouchableOpacity<{checked: boolean}>`
  height: 40px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-radius: 9px;
  ${({checked}) => `border-color: ${checked ? PRIMARY_LIGHT : GRAY_3}`}
`;

const TypeText = styled.Text<{checked: boolean}>`
  font-size: ${MEDIUM}px;
  font-weight: 500;
  ${({checked}) => `color : ${checked ? PRIMARY_LIGHT : GRAY_5}`}
`;

interface Props {
  numberPerLine: number;
  wrapperStyle?: StyleProp<ViewStyle>;
  name: string;
}

function TypeCheckItem({
  numberPerLine,
  wrapperStyle,
  name,
}: Props): JSX.Element {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <CheckView
      style={[
        {width: Math.ceil((width - 74) / numberPerLine)},
        wrapperStyle as StyleProp<ViewProps>,
      ]}
      checked={checked}
      onPress={() => {
        setChecked(!checked);
      }}>
      <TypeText checked={checked}>{name}</TypeText>
    </CheckView>
  );
}

export default TypeCheckItem;
