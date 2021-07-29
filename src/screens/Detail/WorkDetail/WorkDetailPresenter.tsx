import {BIG, STANDARD} from '../../../constants/size';
import BaseContainer from '../../../components/BaseContainer';
import {ContentTextView} from '../../../components/View';
import CustomerInfoItem from './CustomerInfoItem';
import I18n from '../../../utils/i18nHelpers';
import {ImageSlider} from '../../../components/Image';
import MapView from '../../../components/View/MapView';
import React from 'react';
import {ScrollView} from 'react-native';
import {TitleItem} from '../../../components/Item';
import {WHITE} from '../../../constants/color';
import styled from 'styled-components/native';

const Container = styled(BaseContainer)`
  background: ${WHITE};
`;

const ContentContainer = styled.View`
  padding: ${STANDARD}px;
`;

const MidTitleItem = styled(TitleItem)`
  margin-top: ${BIG}px;
`;

function WorkDetailPresenter(): JSX.Element {
  return (
    <Container>
      <ScrollView>
        <MapView />
        <ContentContainer>
          <TitleItem mainText={I18n.t('Title.customer_info')} />
          <CustomerInfoItem />
          <MidTitleItem mainText={I18n.t('Title.customer_message')} />
          <ContentTextView value={'고객 요청사항 내용 내용 내용 ...'} />
          <MidTitleItem mainText={I18n.t('Title.customer_place')} />
          <ImageSlider imageList={[{}, {}, {}]} />
        </ContentContainer>
      </ScrollView>
    </Container>
  );
}

export default WorkDetailPresenter;
