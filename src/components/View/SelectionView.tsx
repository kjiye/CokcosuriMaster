import {BLACK_1, GRAY_3, GRAY_5, PRIMARY_LIGHT} from '../../constants/color';
import {INNER_MARGIN, MEDIUM, MINI} from '../../constants/size';
import DownActiveSvg from '../../../assets/svg/ic_down_active.svg';
import DownInactiveSvg from '../../../assets/svg/ic_down_inactive.svg';
import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.TouchableOpacity<{selected: boolean}>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 3px ${INNER_MARGIN}px;
  border-width: 1px;
  border-radius: ${MINI}px;
  ${({selected}) => `
    border-color: ${selected ? PRIMARY_LIGHT : GRAY_3};
  `}
`;

const SelectionText = styled.Text<{selected: boolean}>`
  max-width: 80%;
  font-size: ${MEDIUM}px;
  ${({selected}) => `
    color: ${selected ? BLACK_1 : GRAY_5}; 
  `}
`;

interface Props {
  placeholder: string;
  selectedValue?: any;
}

function SelectionView({placeholder, selectedValue}: Props): JSX.Element {
  return (
    <Wrapper selected={!!selectedValue}>
      <SelectionText selected={!!selectedValue}>{placeholder}</SelectionText>
      {selectedValue ? <DownActiveSvg /> : <DownInactiveSvg />}
    </Wrapper>
  );
}

export default SelectionView;
