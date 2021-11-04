import React, {useLayoutEffect, useState} from 'react';
import {CategoryType} from '../../../models/common';
import I18n from '../../../utils/i18nHelpers';
import SelectionFullScreenModalPresenter from './SelectionFullScreenModalPresenter';
import {basicHeader} from '../../../components/Header/HeaderOption';
import {useNavigation} from '@react-navigation/core';

function SelectionFullScreenModalContainer({route}: any): JSX.Element {
  const navigation = useNavigation();

  const [selected, setSelected] = useState<CategoryType>();

  useLayoutEffect(() => {
    navigation.setOptions(
      basicHeader({
        title: I18n.t('Header.select_store'),
        isBack: true,
      }),
    );
  }, [navigation]);

  const props = {
    typeList: route.params.typeList,
    selected,
    buttonDisabled: !(selected && selected.id),
    onSelect: (selected: any) => {
      setSelected({
        id: selected.id,
        name: selected.name,
      });
    },
    bottomButtonPress: () => {
      const {selectionType} = route.params;
      navigation.navigate(route.params.path, {
        selected,
        selectionType,
      });
    },
  };
  return <SelectionFullScreenModalPresenter {...props} />;
}

export default SelectionFullScreenModalContainer;
