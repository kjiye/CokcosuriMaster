import BaseContainer from '../../components/BaseContainer';
import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';

const Container = styled(BaseContainer)`
  background: ${(props: any) => props.theme.colors.background};
`;

const ContentContainer = styled.View`
  padding: ${(props: any) => props.theme.size.standardPadding}px;
`;

const ImageView = styled.Image`
  width: 100%;
`;

function GuidePresenter(): JSX.Element {
  return (
    <Container>
      <ScrollView>
        <ContentContainer>
          <ImageView source={require('../../../assets/image/app_guide.png')} />
        </ContentContainer>
      </ScrollView>
    </Container>
  );
}

export default GuidePresenter;
