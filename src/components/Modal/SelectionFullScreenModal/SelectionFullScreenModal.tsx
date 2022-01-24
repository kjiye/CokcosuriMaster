import {FlatList, GestureResponderEvent} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import BaseContainer from '../../BaseContainer';
import {CategoryType} from '../../../models/common';
import FullScreenModalItem from './FullScreenModalItem';
import I18n from '../../../utils/i18nHelpers';
import {NoDataView} from '../../View';
import {PrimaryButton} from '../../Button';
import React from 'react';

const Container = styled(BaseContainer)`
  background: ${(props: any) => props.theme.colors.background};
`;

const ListContainer = styled.View`
  flex: 1;
`;

interface Props {
  typeList: CategoryType[];
  bottomButtonName: string;
  bottomButtonDisabled: boolean;
  bottomButtonPress: (event: GestureResponderEvent) => void;
  onSelect: (selected: CategoryType) => void;
  selected?: CategoryType;
}

function SelectionFullScreenModal({
  typeList,
  bottomButtonName,
  bottomButtonDisabled,
  bottomButtonPress,
  onSelect,
  selected,
}: Props): JSX.Element {
  const theme: any = useTheme();
  return (
    <>
      {typeList.length > 0 ? (
        <Container
          button={
            <PrimaryButton
              title={bottomButtonName}
              disabled={bottomButtonDisabled}
              onPress={bottomButtonPress}
            />
          }>
          <ListContainer>
            <FlatList
              contentContainerStyle={{paddingBottom: theme.size.bottomPadding}}
              scrollIndicatorInsets={{right: 0.1}}
              data={typeList}
              keyExtractor={(_: any, i: number) => i.toString()}
              renderItem={({item, index}: any) => {
                return (
                  <FullScreenModalItem
                    key={index.toString()}
                    item={item}
                    active={item.id === selected?.id}
                    onPress={() => {
                      onSelect(item);
                    }}
                  />
                );
              }}
            />
          </ListContainer>
        </Container>
      ) : (
        <Container>
          <NoDataView message={I18n.t('Store.no_data')} />
        </Container>
      )}
    </>
  );
}

export default SelectionFullScreenModal;
