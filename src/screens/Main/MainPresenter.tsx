import {FlatList, RefreshControl} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import BaseContainer from '../../components/BaseContainer';
import I18n from '../../utils/i18nHelpers';
import LoadingView from '../../components/View/LoadingView';
import {NoDataView} from '../../components/View';
import React from 'react';
import {WorkListItem} from '../../components/Item';
import {getWorks_getWorks_works} from '../../../__generated__/getWorks';

const Container = styled(BaseContainer)`
  background-color: ${(props: any) => props.theme.colors.grey_background};
`;

const WorkFlatList = styled(FlatList)`
  padding: ${(props: any) => props.theme.size.standardPadding}px;
`;

interface Props {
  loading: boolean;
  isRefreshing: boolean;
  onRefreshing: () => void;
  works: getWorks_getWorks_works[];
  goDetail: (item: getWorks_getWorks_works) => void;
  leftBtnPress: (item: getWorks_getWorks_works) => void;
  rightBtnPress: (item: getWorks_getWorks_works) => void;
  writeCaseBtnPress: (id: number) => void;
}

function MainPresenter({
  loading,
  isRefreshing,
  onRefreshing,
  works,
  goDetail,
  leftBtnPress,
  rightBtnPress,
  writeCaseBtnPress,
}: Props): JSX.Element {
  const theme: any = useTheme();
  return (
    <Container>
      {loading ? (
        <LoadingView />
      ) : works.length > 0 ? (
        <WorkFlatList
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: theme.size.bottomPadding,
          }}
          data={works}
          keyExtractor={(_: any, i: number) => i.toString()}
          renderItem={({item, index}: any) => {
            return (
              <WorkListItem
                key={index.toString()}
                style={index > 0 && {marginTop: theme.size.standardPadding}}
                item={item}
                itemPress={goDetail}
                leftBtnPress={leftBtnPress}
                rightBtnPress={rightBtnPress}
                writeCaseBtnPress={writeCaseBtnPress}
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
      ) : (
        <NoDataView
          message={I18n.t('no_data')}
          usingRefresh={true}
          onRefreshing={onRefreshing}
        />
      )}
    </Container>
  );
}

export default MainPresenter;
