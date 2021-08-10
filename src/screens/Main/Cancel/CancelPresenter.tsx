import {FlatList, GestureResponderEvent} from 'react-native';
import BaseContainer from '../../../components/BaseContainer';
import React from 'react';
import {WorkListItem} from '../../../components/Item';
import styled from 'styled-components/native';

const GRAY_BACKGROUND_COLOR = '#F1F1F1';

const Container = styled(BaseContainer)`
  background: ${GRAY_BACKGROUND_COLOR};
`;

const WorkFlatList = styled(FlatList)`
  padding: ${(props: any) => props.theme.size.standardPadding}px;
`;

const WorkList = styled(WorkListItem)`
  padding-bottom: ${(props: any) => props.theme.size.innerMargin}px;
`;

interface Props {
  goDetail: (event: GestureResponderEvent) => void;
}

function CancelPresenter({goDetail}: Props): JSX.Element {
  return (
    <Container>
      <WorkFlatList
        data={[{id: 1}]}
        keyExtractor={(_: any, i: number) => i.toString()}
        renderItem={({item, index}: any) => (
          // <WorkList itemPress={goDetail} status={'cancel'} />
          <WorkList item={item} itemPress={goDetail} />
        )}
      />
    </Container>
  );
}

export default CancelPresenter;
