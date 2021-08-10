import {GestureResponderEvent, TouchableOpacity} from 'react-native';
import {CardView} from '../View';
import I18n from '../../utils/i18nHelpers';
import {INNER_MARGIN} from '../../constants/size';
import MessageBarLabel from '../Label/MessageBarLabel';
import React from 'react';
import TitleInfoItem from './TitleInfoItem';
import dayjs from 'dayjs';
import styled from 'styled-components/native';

const InfoWrapper = styled.View`
  padding: ${INNER_MARGIN}px ${INNER_MARGIN}px 0px ${INNER_MARGIN}px;
`;

interface Props {
  item: any;
  bottom?: JSX.Element;
  itemPress?: (event: GestureResponderEvent) => void;
}

function WorkListItem({item, bottom, itemPress}: Props): JSX.Element {
  return (
    <>
      <CardView hasPadding={false} hasShadow={false}>
        <>
          <TouchableOpacity onPress={itemPress}>
            <MessageBarLabel
              message={item.title}
              labelLeftText={item.payment ? '후 결제' : '선 결제'}
              labelRightText={item.workCategory.name}
            />
            <InfoWrapper style={bottom ? {} : {paddingBottom: 12}}>
              <TitleInfoItem
                titleText={I18n.t('CustomerInfo.visit_date')}
                infoText={dayjs(parseInt(item.visitDate, 10)).format(
                  'YYYY.MM.DD',
                )}
              />
              <TitleInfoItem
                titleText={I18n.t('CustomerInfo.visit_time')}
                infoText={dayjs(parseInt(item.visitDate, 10)).format(
                  'A HH시 mm분',
                )}
              />
              <TitleInfoItem
                titleText={I18n.t('CustomerInfo.address')}
                infoText={`(${item.customer.address.postalCode}) ${item.customer.address.roadAddress}`}
                infoSubText={item.customer.address.detail}
              />
              <TitleInfoItem
                titleText={I18n.t('CustomerInfo.part_status')}
                infoText={item.hasParts.name}
              />
            </InfoWrapper>
          </TouchableOpacity>
          {bottom}
          {/* <TwoButtonGroup
            leftBtnName={I18n.t('Button.copy_address')}
            rightBtnName={I18n.t('Button.accept_work')}
            rightPrimaryColored={true}
          /> */}
        </>
      </CardView>
    </>
  );
}

export default WorkListItem;
