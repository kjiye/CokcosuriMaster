import BaseContainer from '../../components/BaseContainer';
import {NoDataView} from '../../components/View';
import React from 'react';
import styled from 'styled-components/native';

const Container = styled(BaseContainer)`
  background: ${(props: any) => props.theme.colors.background};
`;

function AlarmPresenter(): JSX.Element {
  return (
    <Container>
      <NoDataView message={'알림이 없습니다'} />
    </Container>
  );
}

export default AlarmPresenter;
