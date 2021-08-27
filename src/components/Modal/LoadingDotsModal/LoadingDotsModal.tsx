import styled, {useTheme} from 'styled-components/native';
import LoadingDots from 'react-native-loading-dots';
import React from 'react';

const PRIMARY_BRIGHT = '#ffbb7d';
const DOTS_SIZE = 16;

const Container = styled.View`
  flex: 1;
  position: relative;
`;

const BackDimmer = styled.View<{isShow: boolean}>`
  flex: 1;
  background: ${(props: any) => props.theme.colors.grey[6]};
  opacity: ${({isShow}) => (isShow ? 0.2 : 0)};
`;

const ModalView = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const LoadingWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

interface Props {
  isShow: boolean;
}

function LoadingDotsModal({isShow}: Props): JSX.Element {
  const theme: any = useTheme();
  const {primaryLight, primary, primaryDark} = theme.colors;
  return (
    <Container>
      <BackDimmer isShow={isShow} />
      <ModalView>
        <LoadingWrapper>
          <LoadingDots
            size={DOTS_SIZE}
            colors={[PRIMARY_BRIGHT, primaryLight, primary, primaryDark]}
          />
        </LoadingWrapper>
      </ModalView>
    </Container>
  );
}

export default LoadingDotsModal;
