import {AccordianView, NoDataView} from '../../../components/View';
import BaseContainer from '../../../components/BaseContainer';
import {FlatList} from 'react-native';
import I18n from '../../../utils/i18nHelpers';
import LoadingView from '../../../components/View/LoadingView';
import QnAListContentItem from './QnAListContentItem';
import QnAListTitleItem from './QnAListTitleItem';
import React from 'react';
import {getQnA_getQnA_qnas} from '../../../../__generated__/getQnA';
import styled from 'styled-components/native';

const Container = styled(BaseContainer)`
  background: ${(props: any) => props.theme.colors.background};
`;

interface Props {
  loading: boolean;
  list: getQnA_getQnA_qnas[];
}

function QnAListPresenter({loading, list}: Props): JSX.Element {
  return (
    <Container>
      {loading ? (
        <LoadingView />
      ) : list.length > 0 ? (
        <FlatList
          data={list}
          keyExtractor={(_: any, i: number) => i.toString()}
          renderItem={({item}: any) => (
            <AccordianView
              titleChildren={<QnAListTitleItem item={item} />}
              cntChildren={<QnAListContentItem item={item} />}
            />
          )}
        />
      ) : (
        <NoDataView message={I18n.t('QnA.no_data')} />
      )}
    </Container>
  );
}

export default QnAListPresenter;
