import {CategoryType} from '../../../models/common';
import {GestureResponderEvent} from 'react-native';
import I18n from '../../../utils/i18nHelpers';
import React from 'react';
import SelectionFullScreenModal from '../../../components/Modal/SelectionFullScreenModal/SelectionFullScreenModal';

interface Props {
  typeList: CategoryType[];
  selected?: CategoryType;
  buttonDisabled: boolean;
  onSelect: (selected: CategoryType) => void;
  bottomButtonPress: (event: GestureResponderEvent) => void;
}

function SelectionFullScreenModalPresenter({
  typeList,
  selected,
  buttonDisabled,
  onSelect,
  bottomButtonPress,
}: Props): JSX.Element {
  return (
    <SelectionFullScreenModal
      typeList={typeList}
      bottomButtonName={I18n.t('ok')}
      bottomButtonDisabled={buttonDisabled}
      bottomButtonPress={bottomButtonPress}
      onSelect={onSelect}
      selected={selected}
    />
  );
}

export default SelectionFullScreenModalPresenter;
