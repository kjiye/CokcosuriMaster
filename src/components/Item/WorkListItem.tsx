import {
  GestureResponderEvent,
  StyleProp,
  TouchableOpacity,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {CardView} from '../View';
import I18n from '../../utils/i18nHelpers';
import {INNER_MARGIN} from '../../constants/size';
import MessageBarLabel from '../Label/MessageBarLabel';
import PhoneSvg from '../../../assets/svg/ic_phone.svg';
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
  style?: StyleProp<ViewStyle>;
  itemPress?: (event: GestureResponderEvent) => void;
  leftBtnPress?: (event: GestureResponderEvent) => void;
  rightBtnPress?: (event: GestureResponderEvent) => void;
  status?: 'wait' | 'working' | 'done' | 'cancel';
}

// function WorkListItem({item, bottom, itemPress}: Props): JSX.Element {
function WorkListItem({
  style,
  itemPress,
  leftBtnPress,
  rightBtnPress,
  status = 'wait',
}: Props): JSX.Element {
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
                infoText={'(10568) 경기도 고양시 덕양구 권율대로 907 KN빌딩'}
                infoSubText={'6층'}
              />
              <TitleInfoItem
                titleText={I18n.t('CustomerInfo.part_status')}
                infoText={'보유'}
              />
            </InfoWrapper>
          </TouchableOpacity>
          {/* 레이아웃 추출용 임시 처리 */}
          {status === 'wait' ? (
            <TwoButtonGroup
              leftBtnName={I18n.t('Button.copy_address')}
              leftBtnPress={leftBtnPress}
              rightBtnName={I18n.t('Button.accept_work')}
              rightPrimaryColored={true}
              rightBtnPress={rightBtnPress}
            />
          ) : status === 'working' ? (
            <TwoButtonGroup
              leftBtnName={I18n.t('Button.copy_address')}
              leftBtnPress={leftBtnPress}
              rightBtnName={I18n.t('Button.call')}
              rightIcon={<PhoneSvg />}
              rightPrimaryColored={true}
              rightBtnPress={rightBtnPress}
            />
          ) : (
            <></>
          )}
        </>
      </CardView>
    </>
  );
}

export default WorkListItem;
