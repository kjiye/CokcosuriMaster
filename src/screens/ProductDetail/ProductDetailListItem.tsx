import {CardView} from '../../components/View';
import I18n from '../../utils/i18nHelpers';
import {ImageView} from '../../components/Image';
import React from 'react';
import {TitleInfoItem} from '../../components/Item';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  ${(props: any) => `padding: 0px ${props.theme.size.standardPadding}px`}
`;

const Card = styled(CardView)`
  margin-top: ${(props: any) => props.theme.size.margin}px;
`;

function ProductDetailListItem(): JSX.Element {
  return (
    <Wrapper>
      <ImageView />
      <Card>
        <>
          <TitleInfoItem
            titleText={I18n.t('Product.name')}
            infoText={'크리스탈 평면붙임일체형세면기AL-21 [라운드]'}
          />
          <TitleInfoItem
            titleText={I18n.t('Product.code')}
            infoText={'2100003039002'}
          />
          <TitleInfoItem
            titleText={I18n.t('Product.quantity')}
            infoText={`1${I18n.t('ea')}`}
          />
        </>
      </Card>
    </Wrapper>
  );
}

export default ProductDetailListItem;
