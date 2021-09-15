import {AccordianView, NoDataView} from '../../../components/View';
import {FlatList, RefreshControl} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import BaseContainer from '../../../components/BaseContainer';
import I18n from '../../../utils/i18nHelpers';
import LoadingView from '../../../components/View/LoadingView';
import QnAListContentItem from './QnAListContentItem';
import QnAListTitleItem from './QnAListTitleItem';
import React from 'react';
import {getQnA_getQnA_qnas} from '../../../../__generated__/getQnA';

const Container = styled(BaseContainer)`
  background: ${(props: any) => props.theme.colors.background};
`;

const ListContainer = styled.View`
  padding-bottom: ${(props: any) => props.theme.size.bottomPadding}px;
`;

interface Props {
  loading: boolean;
  isRefreshing: boolean;
  list: getQnA_getQnA_qnas[];
  onRefreshing: () => void;
}

function QnAListPresenter({
  loading,
  isRefreshing,
  list,
  onRefreshing,
}: Props): JSX.Element {
  const theme: any = useTheme();
  return (
    <Container>
      {loading ? (
        <LoadingView />
      ) : list.length > 0 ? (
        <ListContainer>
          <FlatList
            scrollIndicatorInsets={{right: 0.1}}
            data={list}
            keyExtractor={(_: any, i: number) => i.toString()}
            renderItem={({item}: any) => (
              <AccordianView
                titleChildren={<QnAListTitleItem item={item} />}
                cntChildren={<QnAListContentItem item={item} />}
              />
            )}
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
        <NoDataView message={I18n.t('QnA.no_data')} />
      )}
    </Container>
  );
}

export default QnAListPresenter;
