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

interface Props {
  okPress: (event: GestureResponderEvent) => void;
  copyAddress: (event: GestureResponderEvent) => void;
  goDetail: (event: GestureResponderEvent) => void;
}

function WaitPresenter({okPress, copyAddress, goDetail}: Props): JSX.Element {
  return (
    <Container>
      <WorkFlatList
        data={[{id: 1}]}
        keyExtractor={(_: any, i: number) => i.toString()}
        renderItem={({item, index}: any) => (
          <WorkListItem
            itemPress={goDetail}
            leftBtnPress={copyAddress}
            rightBtnPress={okPress}
          />
        )}
      />
    </Container>
  );
}

export default WaitPresenter;
