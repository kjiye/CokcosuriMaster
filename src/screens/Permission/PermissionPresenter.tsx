import {GestureResponderEvent} from 'react-native';
import PermissionView from './PermissionView';
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  position: relative;
`;

const BackDimmer = styled.View`
  flex: 1;
  background: ${(props: any) => props.theme.colors.grey[6]};
  opacity: 0.5;
`;

interface Props {
  okPress: (event: GestureResponderEvent) => void;
}

function PermissionPresenter({okPress}: Props): JSX.Element {
  return (
    <Container>
      <BackDimmer />
      <PermissionView btnPress={okPress} />
    </Container>
  );
}

export default PermissionPresenter;
