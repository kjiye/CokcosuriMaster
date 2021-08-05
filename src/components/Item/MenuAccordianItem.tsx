import React, {useState} from 'react';
import {StyleProp, View, ViewProps, ViewStyle} from 'react-native';
import styled, {css} from 'styled-components/native';
import MenuItem from './MenuItem';
import SubMenuItem from './SubMenuItem';

const SubMenuWrapper = styled.View`
  padding-bottom: 10px;
`;

const MainMenu = styled(MenuItem)<{lessPadding: boolean}>`
  ${({lessPadding}) =>
    lessPadding &&
    css`
      padding-bottom: 6px;
    `}
`;

interface Props {
  style?: StyleProp<ViewStyle>;
  name: string;
  subMenuList: any[];
}

function MenuAccordianItem({style, name, subMenuList}: Props): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <View style={style as StyleProp<ViewProps>}>
      <MainMenu
        lessPadding={open}
        name={name}
        onPress={() => {
          setOpen(!open);
        }}
      />
      {open && (
        <SubMenuWrapper>
          {subMenuList.map((v, i) => {
            return (
              <SubMenuItem
                key={i.toString()}
                name={v.name}
                onPress={v.onPress}
              />
            );
          })}
        </SubMenuWrapper>
      )}
    </View>
  );
}

export default MenuAccordianItem;
