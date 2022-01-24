import {GestureResponderEvent, StyleProp, ViewStyle} from 'react-native';
import DownActiveSvg from '../../../assets/svg/ic_down_active.svg';
import DownInactiveSvg from '../../../assets/svg/ic_down_inactive.svg';
import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.TouchableOpacity<{selected: boolean}>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 3px ${(props: any) => props.theme.size.innerMargin}px;
  border-width: 1px;
  border-radius: ${(props: any) => props.theme.size.borderRadius}px;
  ${({selected, theme}: any) => `
    border-color: ${
      selected ? theme.colors.primaryLight : theme.colors.grey[3]
    };
  `}
  background: ${(props: any) => props.theme.colors.background};
`;

const SelectionText = styled.Text<{selected: boolean}>`
  max-width: 80%;
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  ${({selected, theme}: any) => `
    color: ${selected ? theme.colors.black[1] : theme.colors.grey[5]}; 
  `}
`;

interface Props {
  style?: StyleProp<ViewStyle>;
  placeholder: string;
  selectedValue?: any;
  onPress?: (event: GestureResponderEvent) => void;
}

function SelectionView({
  style,
  placeholder,
  selectedValue,
  onPress,
}: Props): JSX.Element {
  return (
    <Wrapper style={style} onPress={onPress} selected={!!selectedValue}>
      <SelectionText selected={!!selectedValue}>
        {selectedValue ? selectedValue.name : placeholder}
      </SelectionText>
      {selectedValue ? <DownActiveSvg /> : <DownInactiveSvg />}
    </Wrapper>
  );
}

export default SelectionView;
