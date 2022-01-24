import I18n from '../../utils/i18nHelpers';
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

const SubText = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  color: ${(props: any) => props.theme.colors.grey[5]};
`;

interface Props {
  status: string;
  color?: string;
}

function EmphasisTitleItem({status, color}: Props): JSX.Element {
  return (
    <TitleText>
      {I18n.t('work')} <EmphasisText color={color}>{status}</EmphasisText>{' '}
      {I18n.t('image')}
      <SubText> ({I18n.t('Title.require_image_quantity')})</SubText>
    </TitleText>
  );
}

export default EmphasisTitleItem;
