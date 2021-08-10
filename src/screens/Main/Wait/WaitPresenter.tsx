import {FlatList, GestureResponderEvent} from 'react-native';
import BaseContainer from '../../../components/BaseContainer';
import {GRAY_BACKGROUND_COLOR} from '../../../constants/color';
import React from 'react';
import {STANDARD} from '../../../constants/size';
import {WorkListItem} from '../../../components/Item';
import styled from 'styled-components/native';

const Container = styled(BaseContainer)`
  background: ${GRAY_BACKGROUND_COLOR};
`;

const WorkFlatList = styled(FlatList)`
  padding: ${STANDARD}px;
`;

interface Props {
  loading: boolean;
  works: any[];
  goDetail: (event: GestureResponderEvent) => void;
}

function WaitPresenter({loading, works, goDetail}: Props): JSX.Element {
  return (
    <Container>
      <WorkFlatList
        data={works}
        keyExtractor={(_: any, i: number) => i.toString()}
        renderItem={({item, index}: any) => (
          <WorkListItem item={item} itemPress={goDetail} />
        )}
      />
    </Container>
  );
}

export default WaitPresenter;
