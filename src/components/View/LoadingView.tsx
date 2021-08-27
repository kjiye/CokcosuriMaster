import {ActivityIndicator} from 'react-native';
import BaseContainer from '../BaseContainer';
import React from 'react';
import styled from 'styled-components/native';
import {useTheme} from 'styled-components';

const Container = styled(BaseContainer)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

interface Props {
  size?: 'small' | 'large';
}

function LoadingView({size = 'large'}: Props): JSX.Element {
  const theme: any = useTheme();
  return (
    <Container>
      <ActivityIndicator size={size} color={theme.colors.primary} />
    </Container>
  );
}

export default LoadingView;
