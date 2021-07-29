import React from 'react';
import styled from 'styled-components/native';

const HEIGHT = 235;

const ContentView = styled.View`
  padding: ${(props: any) => props.theme.size.innerMargin}px;
  height: ${HEIGHT}px;
  background: ${(props: any) => props.theme.colors.grey[1]};
`;

const ContentText = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  color: ${(props: any) => props.theme.colors.black[1]};
`;

interface Props {
  value: string;
}

function ContentTextView({value}: Props): JSX.Element {
  return (
    <ContentView>
      <ContentText>{value}</ContentText>
    </ContentView>
  );
}

export default ContentTextView;
