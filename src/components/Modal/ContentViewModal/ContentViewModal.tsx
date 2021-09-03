import {Dimensions, GestureResponderEvent} from 'react-native';
import CloseSvg from '../../../../assets/svg/ic_close.svg';
import React from 'react';
import styled from 'styled-components/native';

const {height} = Dimensions.get('screen');

const VIEW_RADIUS = 38;

const Container = styled.View`
  flex: 1;
  position: relative;
`;

const BackDimmer = styled.TouchableOpacity`
  flex: 1;
  background: ${(props: any) => props.theme.colors.grey[6]};
  opacity: 0.5;
`;

const ModalView = styled.View`
  position: absolute;
  bottom: 0;
  padding: 0 ${(props: any) => props.theme.size.standardPadding}px;
  width: 100%;
  height: ${height * 0.8}px;
  background: ${(props: any) => props.theme.colors.grey[0]};
  border-top-left-radius: ${VIEW_RADIUS}px;
  border-top-right-radius: ${VIEW_RADIUS}px;
`;

const TitleWrapper = styled.View`
  border-bottom-width: 1px;
  border-color: ${(props: any) => props.theme.colors.grey[4]};
`;

const Title = styled.Text`
  margin-bottom: ${(props: any) => props.theme.size.innerMargin}px;
  font-size: ${(props: any) => props.theme.fonts.big}px;
  font-weight: bold;
`;

const CloseButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-end;
`;

const ContentWrapper = styled.ScrollView`
  padding: ${(props: any) => props.theme.size.innerMargin}px 0;
`;

const ContentText = styled.Text`
  margin-bottom: 50px;
  font-size: ${(props: any) => props.theme.fonts.small}px;
  color: ${(props: any) => props.theme.colors.black[1]};
`;

interface Props {
  title: string;
  content: string;
  close: (event: GestureResponderEvent) => void;
}

function ContentViewModal({title, content, close}: Props): JSX.Element {
  return (
    <Container>
      <BackDimmer onPress={close} />
      <ModalView>
        <TitleWrapper>
          <CloseButton onPress={close}>
            <CloseSvg />
          </CloseButton>
          <Title>{title}</Title>
        </TitleWrapper>
        <ContentWrapper>
          <ContentText>{content}</ContentText>
        </ContentWrapper>
      </ModalView>
    </Container>
  );
}

export default ContentViewModal;
