import {StyleProp, TouchableOpacity, ViewProps, ViewStyle} from 'react-native';
import {CardView} from '../View';
import I18n from '../../utils/i18nHelpers';
import MessageBarLabel from '../Label/MessageBarLabel';
import PhoneSvg from '../../../assets/svg/ic_phone.svg';
import React from 'react';
import TitleInfoItem from './TitleInfoItem';
import {TwoButtonGroup} from '../Button';
import {WorkState} from '../../../__generated__/globalTypes';
import {dateFormatting} from '../../utils/commonUtils';
import {getWorks_getWorks_works} from '../../../__generated__/getWorks';
import styled from 'styled-components/native';
import {useTheme} from 'styled-components';

const InfoWrapper = styled.View`
  ${(props: any) => `
  padding: ${props.theme.size.innerMargin}px ${props.theme.size.innerMargin}px 0px ${props.theme.size.innerMargin}px`}
`;

interface Props {
  item: any;
  style?: StyleProp<ViewStyle>;
  itemPress?: (item: getWorks_getWorks_works) => void;
  leftBtnPress?: (item: getWorks_getWorks_works) => void;
  rightBtnPress?: (item: getWorks_getWorks_works) => void;
}

function WorkListItem({
  item,
  style,
  itemPress,
  leftBtnPress,
  rightBtnPress,
}: Props): JSX.Element {
  const theme: any = useTheme();
  return (
    <CardView
      style={style as StyleProp<ViewProps>}
      hasPadding={false}
      hasShadow={false}>
      <>
        <TouchableOpacity
          onPress={() => {
            if (itemPress) itemPress(item);
          }}>
          <MessageBarLabel
            message={item.title}
            labelLeftText={
              item.payment ? I18n.t('pay_later') : I18n.t('pay_first')
            }
            labelRightText={item.workCategory.name}
          />
          <InfoWrapper
            style={
              item.state === WorkState.DONE || item.state === WorkState.CANCEL
                ? {paddingBottom: theme.size.innerMargin}
                : {}
            }>
            <TitleInfoItem
              titleText={I18n.t('CustomerInfo.visit_date')}
              infoText={dateFormatting(item.visitDate)}
            />
            <TitleInfoItem
              titleText={I18n.t('CustomerInfo.visit_time')}
              infoText={dateFormatting(item.visitDate, true)}
            />
            <TitleInfoItem
              titleText={I18n.t('CustomerInfo.address')}
              infoText={`(${item.address.postalCode}) ${item.address.roadAddress}`}
              infoSubText={item.address.detail}
            />
            <TitleInfoItem
              titleText={I18n.t('CustomerInfo.part_status')}
              infoText={item.hasParts.name}
            />
          </InfoWrapper>
        </TouchableOpacity>
        {item.state === WorkState.WAIT ? (
          <TwoButtonGroup
            leftBtnName={I18n.t('Button.copy_address')}
            rightBtnName={I18n.t('Button.accept_work')}
            rightPrimaryColored={true}
            leftBtnPress={() => {
              if (leftBtnPress) leftBtnPress(item);
            }}
            rightBtnPress={() => {
              if (rightBtnPress) rightBtnPress(item);
            }}
          />
        ) : item.state === WorkState.RESERVE ||
          item.state === WorkState.WORKING ? (
          <TwoButtonGroup
            leftBtnName={I18n.t('Button.copy_address')}
            rightBtnName={I18n.t('Button.call')}
            rightIcon={<PhoneSvg />}
            rightPrimaryColored={true}
            leftBtnPress={() => {
              if (leftBtnPress) leftBtnPress(item);
            }}
            rightBtnPress={() => {
              if (rightBtnPress) rightBtnPress(item);
            }}
          />
        ) : (
          <></>
        )}
      </>
    </CardView>
  );
}

export default WorkListItem;
