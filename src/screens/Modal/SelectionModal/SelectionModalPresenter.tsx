import {CategoryType} from '../../../models/common';
import {GestureResponderEvent} from 'react-native';
import React from 'react';
import {SelectionModal} from '../../../components/Modal/SelectionModal';

interface Props {
  title: string;
  typeList: any[];
  close: (event: GestureResponderEvent) => void;
  onSelect: (selected: CategoryType) => void;
}

function SelectionModalPresenter({
  title,
  typeList,
  close,
  onSelect,
}: Props): JSX.Element {
  return (
    <SelectionModal
      title={title}
      typeList={typeList}
      close={close}
      onSelect={onSelect}
    />
  );
}

export default SelectionModalPresenter;
