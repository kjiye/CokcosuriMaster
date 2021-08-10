import {GestureResponderEvent} from 'react-native';
import React from 'react';
import {SelectionModal} from '../../../components/Modal/SelectionModal';
import styled from 'styled-components/native';

interface Props {
  title: string;
  typeList: any[];
  close: (event: GestureResponderEvent) => void;
}

function SelectionModalPresenter({title, typeList, close}: Props): JSX.Element {
  return <SelectionModal title={title} typeList={typeList} close={close} />;
}

export default SelectionModalPresenter;
