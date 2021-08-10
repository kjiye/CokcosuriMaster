import {AccordianView} from '../../../components/View';
import BaseContainer from '../../../components/BaseContainer';
import {FlatList} from 'react-native';
import QnAListContentItem from './QnAListContentItem';
import QnAListTitleItem from './QnAListTitleItem';
import React from 'react';
import styled from 'styled-components/native';

const Container = styled(BaseContainer)`
  background: ${(props: any) => props.theme.colors.background};
`;

function QnAListPresenter(): JSX.Element {
  return (
    <Container>
      <FlatList
        data={[{id: 1}]}
        keyExtractor={(_: any, i: number) => i.toString()}
        renderItem={({item, index}: any) => (
          <AccordianView
            titleChildren={<QnAListTitleItem />}
            cntChildren={<QnAListContentItem />}
          />
        )}
      />
    </Container>
  );
}

export default QnAListPresenter;
