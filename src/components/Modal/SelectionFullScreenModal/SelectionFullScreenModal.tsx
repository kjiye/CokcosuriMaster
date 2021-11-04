import {FlatList, GestureResponderEvent} from 'react-native';
import BaseContainer from '../../BaseContainer';
import {CategoryType} from '../../../models/common';
import FullScreenModalItem from './FullScreenModalItem';
import I18n from '../../../utils/i18nHelpers';
import {NoDataView} from '../../View';
import {PrimaryButton} from '../../Button';
import React from 'react';
import styled from 'styled-components/native';

const Container = styled(BaseContainer)`
  background: ${(props: any) => props.theme.colors.background};
`;

const FlatListWrapper = styled.View`
  flex: 1;
  padding-bottom: ${(props: any) => props.theme.size.bottomPadding}px;
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
          <FlatListWrapper>
            <FlatList
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
          </FlatListWrapper>
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
