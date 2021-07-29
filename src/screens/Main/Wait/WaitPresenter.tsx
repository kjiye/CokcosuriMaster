import BaseContainer from '../../../components/BaseContainer';
import {FlatList, GestureResponderEvent} from 'react-native';
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
  goDetail: (event: GestureResponderEvent) => void;
}

function WaitPresenter({goDetail}: Props): JSX.Element {
  return (
    <Container>
      <WorkFlatList
        data={[{id: 1}]}
        keyExtractor={(_: any, i: number) => i.toString()}
        renderItem={({item, index}: any) => (
          <WorkListItem itemPress={goDetail} />
        )}
      />
    </Container>
  );
}

export default WaitPresenter;
