import React from 'react';
import styled from 'styled-components/native';

const TITLE_TOP_MARGIN = 24;

const TitleText = styled.Text`
  margin: ${TITLE_TOP_MARGIN}px 0 ${TITLE_TOP_MARGIN / 2}px;
  font-size: ${(props: any) => props.theme.fonts.large}px;
  font-weight: bold;
  color: ${(props: any) => props.theme.colors.black[1]};
`;

const EmphasisText = styled(TitleText)<{color?: string}>`
  color: ${(props: any) =>
    props.color ? props.color : props.theme.colors.black[1]};
`;

interface Props {
  status: string;
  color?: string;
}

function EmphasisTitleItem({status, color}: Props): JSX.Element {
  return (
    <TitleText>
      작업 <EmphasisText color={color}>{status}</EmphasisText> 사진
    </TitleText>
  );
}

export default EmphasisTitleItem;
