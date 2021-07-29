import {CardView} from '../../../components/View';
import {GRAY_2} from '../../../constants/color';
import I18n from '../../../utils/i18nHelpers';
import {INNER_MARGIN} from '../../../constants/size';
import React from 'react';
import {TitleInfoItem} from '../../../components/Item';
import {TwoButtonGroup} from '../../../components/Button';
import styled from 'styled-components/native';

const SeperatedSection = styled(CardView)`
  margin-top: ${INNER_MARGIN}px;
`;

const InnerWrapper = styled.View`
  border-top-width: 3px;
  border-color: ${GRAY_2};
  padding: ${INNER_MARGIN}px;
`;

function CustomerInfoItem(): JSX.Element {
  return (
    <>
      <CardView>
        <>
          <TitleInfoItem
            titleText={I18n.t('CustomerInfo.name')}
            infoText={'홍길동'}
          />
          <TitleInfoItem
            titleText={I18n.t('CustomerInfo.contact')}
            infoText={'010-1234-1234'}
          />
        </>
      </CardView>
      <SeperatedSection hasPadding={false}>
        <>
          <TwoButtonGroup
            leftBtnName={'주소복사'}
            rightBtnName={'전화'}
            rightPrimaryColored={true}
          />
          <InnerWrapper>
            <TitleInfoItem
              titleText={I18n.t('CustomerInfo.visit_date')}
              infoText={'2021.05.30'}
            />
            <TitleInfoItem
              titleText={I18n.t('CustomerInfo.visit_time')}
              infoText={'오전 11시'}
            />
            <TitleInfoItem
              titleText={I18n.t('CustomerInfo.address')}
              infoText={'(03048)서울특별시 종로구 청와대대로 1'}
              infoSubText={'대통령비서실'}
            />
            <TitleInfoItem
              titleText={I18n.t('CustomerInfo.part_status')}
              infoText={'전등 보유'}
            />
          </InnerWrapper>
        </>
      </SeperatedSection>
    </>
  );
}

export default CustomerInfoItem;
