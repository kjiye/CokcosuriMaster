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
import {TwoButtonGroup} from '../Button';
import styled from 'styled-components/native';

const InfoWrapper = styled.View`
  padding: ${INNER_MARGIN}px ${INNER_MARGIN}px 0px ${INNER_MARGIN}px;
`;

interface Props {
  style?: StyleProp<ViewStyle>;
  itemPress?: (event: GestureResponderEvent) => void;
  leftBtnPress?: (event: GestureResponderEvent) => void;
  rightBtnPress?: (event: GestureResponderEvent) => void;
  status?: 'wait' | 'working' | 'done' | 'cancel';
}

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
              message={'[고양] 전등 갈아주세요'}
              labelLeftText={'후 결제'}
              labelRightText={'전등'}
            />
            <InfoWrapper style={style as StyleProp<ViewProps>}>
              <TitleInfoItem
                titleText={I18n.t('CustomerInfo.visit_date')}
                infoText={'2021.08.30'}
              />
              <TitleInfoItem
                titleText={I18n.t('CustomerInfo.visit_time')}
                infoText={'오전 11시'}
              />
              <TitleInfoItem
                titleText={I18n.t('CustomerInfo.address')}
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
