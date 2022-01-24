import {FlatList, GestureResponderEvent, RefreshControl} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import AlarmItem from './AlarmItem';
import BaseContainer from '../../components/BaseContainer';
import I18n from '../../utils/i18nHelpers';
import LoadingView from '../../components/View/LoadingView';
import {NoDataView} from '../../components/View';
import {PrimaryButton} from '../../components/Button';
import React from 'react';
import {getAlarm_getAlarm_alarm} from '../../../__generated__/getAlarm';

const Container = styled(BaseContainer)`
  background: ${(props: any) => props.theme.colors.background};
`;

const ListContainer = styled.View<{isDelete: boolean}>`
  flex: 1;
`;

interface Props {
  loading: boolean;
  isDelete: boolean;
  isRefreshing: boolean;
  alarm: getAlarm_getAlarm_alarm[];
  onRefreshing: () => void;
  onDelete: (id: string) => void;
  onDeleteAll: (event: GestureResponderEvent) => void;
}

function AlarmPresenter({
  loading,
  isDelete,
  isRefreshing,
  alarm,
  onRefreshing,
  onDelete,
  onDeleteAll,
}: Props): JSX.Element {
  const theme: any = useTheme();
  return (
    <Container
      button={
        isDelete ? (
          <PrimaryButton
            title={I18n.t('Button.bottom.delete_all')}
            onPress={onDeleteAll}
          />
        ) : (
          <></>
        )
      }>
      {loading ? (
        <LoadingView />
      ) : alarm && alarm.length > 0 ? (
        <ListContainer isDelete={isDelete}>
          <FlatList
            contentContainerStyle={{paddingBottom: theme.size.bottomPadding}}
            scrollIndicatorInsets={{right: 0.1}}
            data={alarm}
            keyExtractor={(_: any, i: number) => i.toString()}
            renderItem={({item, index}: any) => {
              return (
                <AlarmItem
                  key={index.toString()}
                  item={item}
                  isDelete={isDelete}
                  onDelete={onDelete}
                />
              );
            }}
            refreshControl={
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={onRefreshing}
                colors={[theme.colors.primary]}
                tintColor={theme.colors.primary}
              />
            }
          />
        </ListContainer>
      ) : (
        <NoDataView
          message={I18n.t('Alarm.no_data')}
          usingRefresh={true}
          onRefreshing={onRefreshing}
        />
      )}
    </Container>
  );
}

export default AlarmPresenter;
