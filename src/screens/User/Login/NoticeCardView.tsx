import React, {useMemo} from 'react';
import {TitleItem} from '../../../components/Item';
import styled from 'styled-components/native';

const BORDER_RADIUS = 15;

const Container = styled.View`
  flex-direction: row;
`;

const CardView = styled.View`
  flex: 1;
  background-color: ${(props: any) => props.theme.colors.background};
  border: 1px solid ${(props: any) => props.theme.colors.primary};
  border-radius: ${BORDER_RADIUS}px;
  padding: 6px ${(props: any) => props.theme.size.padding}px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.16);
  elevation: 3;
`;

const Title = styled(TitleItem)`
  padding-bottom: 5px;
`;

const NoticeMessage = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  color: ${(props: any) => props.theme.colors.black[1]};
`;

interface Props {
  title?: string;
  content?: string;
}

function NoticeCardView({title, content}: Props): JSX.Element {
  return (
    <Container>
      {useMemo(
        () => (
          <CardView>
            <Title mainText={title} />
            <NoticeMessage>{content}</NoticeMessage>
          </CardView>
        ),
        [title, content],
      )}
    </Container>
  );
}

export default NoticeCardView;
