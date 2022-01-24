import {AccordianView, NoDataView} from '../../components/View';
import BaseContainer from '../../components/BaseContainer';
import {FlatList} from 'react-native';
import I18n from '../../utils/i18nHelpers';
import LoadingView from '../../components/View/LoadingView';
import NoticeListContentItem from './NoticeListContentItem';
import NoticeListTitleItem from './NoticeListTitleItem';
import React from 'react';
import {getNotices_getNotices_notices} from '../../../__generated__/getNotices';
import styled, {useTheme} from 'styled-components/native';

const Container = styled(BaseContainer)`
  background: ${(props: any) => props.theme.colors.background};
`;

interface Props {
  loading: boolean;
  list: getNotices_getNotices_notices[];
}

function NoticePresenter({loading, list}: Props): JSX.Element {
  const theme: any = useTheme();
  return (
    <Container>
      {loading ? (
        <LoadingView />
      ) : list.length > 0 ? (
        <FlatList
          contentContainerStyle={{paddingBottom: theme.size.bottomPadding}}
          scrollIndicatorInsets={{right: 0.1}}
          data={list}
          keyExtractor={(_: any, i: number) => i.toString()}
          renderItem={({item}: any) => (
            <AccordianView
              titleChildren={<NoticeListTitleItem item={item} />}
              cntChildren={<NoticeListContentItem content={item.content} />}
            />
          )}
        />
      ) : (
        <NoDataView message={I18n.t('Notice.no_data')} />
      )}
    </Container>
  );
}

export default NoticePresenter;
