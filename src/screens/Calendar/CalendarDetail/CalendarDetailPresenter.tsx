import {CalendarWorkCount, ScheduleData} from '../../../models/work';
import {Dimensions, GestureResponderEvent, ScrollView} from 'react-native';
import BaseContainer from '../../../components/BaseContainer';
import DayItem from '../DayItem';
import {DayNamesShort} from '../../../models/common';
import I18n from '../../../utils/i18nHelpers';
import PrevArrowSvg from '../../../../assets/svg/ic_prev_white_arrow.svg';
import {PrimaryButton} from '../../../components/Button';
import React from 'react';
import ScheduleItem from '../ScheduleItem';
import WeekdayItem from '../WeekdayItem';
import {WorkState} from '../../../../__generated__/globalTypes';
import styled from 'styled-components/native';

const {height} = Dimensions.get('screen');
const CALENDAR_HEIGHT = 135;

const Container = styled(BaseContainer)`
  background: ${(props: any) => props.theme.colors.grey_background};
`;

const CalendarWrapper = styled.View`
  width: 100%;
  height: ${CALENDAR_HEIGHT}px;
  padding: 20px 10px 5px;
  position: absolute;
  top: 0;
  left: 0;
  background: ${(props: any) => props.theme.colors.grey[0]};
`;

const WeekdayWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const DateWrapper = styled(WeekdayWrapper)`
  margin-top: 20px;
`;

const ScheduleWrapper = styled.View`
  flex: 1;
  margin-top: ${CALENDAR_HEIGHT + 5}px;
`;

const NoDataText = styled.Text`
  margin-top: ${height / 6}px;
  text-align: center;
  font-size: ${(props: any) => props.theme.fonts.large}px;
  font-weight: bold;
  color: ${(props: any) => props.theme.colors.black[1]};
`;

const ScrollInnerWrapper = styled.View`
  padding-bottom: ${(props: any) => props.theme.size.bottomPadding}px;
`;

interface Props {
  weekArray: string[];
  workArray: CalendarWorkCount[];
  selectedDate: string;
  schedules: ScheduleData[];
  goCalendar: (event: GestureResponderEvent) => void;
  goDetail: (state: WorkState, workId: number) => void;
  onSelectDate: (date: string) => void;
}

function CalendarDetailPresenter({
  weekArray,
  workArray,
  selectedDate,
  schedules,
  goCalendar,
  goDetail,
  onSelectDate,
}: Props): JSX.Element {
  return (
    <Container
      button={
        <PrimaryButton
          title={I18n.t('Button.bottom.go_calendar')}
          icon={<PrevArrowSvg />}
          onPress={goCalendar}
        />
      }>
      <CalendarWrapper>
        <WeekdayWrapper>
          {DayNamesShort.map((v: string, i: number) => {
            return <WeekdayItem key={i.toString()} weekday={v} />;
          })}
        </WeekdayWrapper>
        <DateWrapper>
          {weekArray.map((v: string, i: number) => {
            const day = v.split('-')[2];
            return (
              <DayItem
                key={i.toString()}
                day={day}
                works={workArray}
                hasBorder={false}
                active={v === selectedDate ? true : false}
                onPress={() => {
                  onSelectDate(v);
                }}
              />
            );
          })}
        </DateWrapper>
      </CalendarWrapper>
      <ScheduleWrapper>
        {schedules.length > 0 ? (
          <ScrollView scrollIndicatorInsets={{right: 0.1}}>
            <ScrollInnerWrapper>
              {schedules.map((v: ScheduleData, i: number) => {
                return (
                  <ScheduleItem
                    key={i.toString()}
                    value={v}
                    goDetail={goDetail}
                  />
                );
              })}
            </ScrollInnerWrapper>
          </ScrollView>
        ) : (
          <NoDataText>{I18n.t('Schedule.no_data')}</NoDataText>
        )}
      </ScheduleWrapper>
    </Container>
  );
}

export default CalendarDetailPresenter;
