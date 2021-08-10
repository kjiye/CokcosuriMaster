import {FlatList, GestureResponderEvent} from 'react-native';
import BaseContainer from '../../../components/BaseContainer';
import React from 'react';
import {WorkListItem} from '../../../components/Item';
import styled from 'styled-components';

const GRAY_BACKGROUND_COLOR = '#F1F1F1';

const Container = styled(BaseContainer)`
  background: ${GRAY_BACKGROUND_COLOR};
`;

const WorkFlatList = styled(FlatList)`
  padding: ${(props: any) => props.theme.size.standardPadding}px;
`;

interface Props {
  goDetail: (event: GestureResponderEvent) => void;
  copyAddress: (event: GestureResponderEvent) => void;
}

function WorkingPresenter({goDetail, copyAddress}: Props): JSX.Element {
  return (
    <Container>
      <WorkFlatList
        data={[{id: 1}]}
        keyExtractor={(_: any, i: number) => i.toString()}
        renderItem={({item, index}: any) => (
          <WorkListItem
            itemPress={goDetail}
            leftBtnPress={copyAddress}
            status={'working'}
          />
        )}
      />
    </Container>
  );
}

export default WorkingPresenter;
