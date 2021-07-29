import {GestureResponderEvent, TouchableOpacity} from 'react-native';
import {CardView} from '../View';
import I18n from '../../utils/i18nHelpers';
import {INNER_MARGIN} from '../../constants/size';
import MessageBarLabel from '../Label/MessageBarLabel';
import React from 'react';
import TitleInfoItem from './TitleInfoItem';
import {TwoButtonGroup} from '../Button';
import styled from 'styled-components/native';

const InfoWrapper = styled.View`
  padding: ${INNER_MARGIN}px ${INNER_MARGIN}px 0px ${INNER_MARGIN}px;
`;

interface Props {
  itemPress?: (event: GestureResponderEvent) => void;
}

function WorkListItem({itemPress}: Props): JSX.Element {
  return (
    <>
      <CardView hasPadding={false} hasShadow={false}>
        <>
          <TouchableOpacity onPress={itemPress}>
            <MessageBarLabel
              message={'[서울] 전등 갈아주세요'}
              labelLeftText={'후 결제'}
              labelRightText={'설치'}
            />
            <InfoWrapper>
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
                infoText={
                  '(03048) 경기도 수원시 센트럴타운로 85 메트로큐브, 써밋플레이스'
                }
                infoSubText={'202'}
              />
              <TitleInfoItem
                titleText={I18n.t('CustomerInfo.part_status')}
                infoText={'전등 보유'}
              />
            </InfoWrapper>
          </TouchableOpacity>
          <TwoButtonGroup
            leftBtnName={I18n.t('Button.copy_address')}
            rightBtnName={I18n.t('Button.accept_work')}
            rightPrimaryColored={true}
          />
        </>
      </CardView>
    </>
  );
}

export default WorkListItem;
