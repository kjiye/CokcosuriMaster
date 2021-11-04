import 'dayjs/locale/ko';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {DayNames, DayNamesShort, MonthNames} from '../../../models/common';
import styled, {useTheme} from 'styled-components/native';
import BaseContainer from '../../../components/BaseContainer';
import {CalendarWorkCount} from '../../../models/work';
import {DateData} from 'react-native-calendars/src/types';
import DayItem from '../DayItem';
import I18n from '../../../utils/i18nHelpers';
import NextArrowSvg from '../../../../assets/svg/ic_next_arrow_gray.svg';
import PrevArrowSvg from '../../../../assets/svg/ic_prev_arrow_gray.svg';
import React from 'react';
import {ScrollView} from 'react-native';
import {calendarDayIndex} from '../../../utils/commonUtils';
import dayjs from 'dayjs';
dayjs.locale('ko');

const HEADER_MARGIN = 15;
const DATE_FORMAT = 'YYYY-MM-DD';

const Container = styled(BaseContainer)`
  background: ${(props: any) => props.theme.colors.background};
`;

const WorkCalendar = styled(Calendar)`
  margin-top: 20px;
`;

const HeaderMonth = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.large}px;
  font-weight: 600;
  color: ${(props: any) => props.theme.colors.black[1]};
`;

LocaleConfig.locales['ko'] = {
  monthNames: MonthNames,
  monthNamesShort: MonthNames,
  dayNames: DayNames,
  dayNamesShort: DayNamesShort,
};
LocaleConfig.defaultLocale = 'ko';

interface Props {
  works: CalendarWorkCount[];
  onMonthChange: (month: string) => void;
  onSelectDate: (selectedDate: string) => void;
}

function CalendarMainPresenter({
  works,
  onMonthChange,
  onSelectDate,
}: Props): JSX.Element {
  const theme: any = useTheme();
  return (
    <Container>
      <ScrollView>
        <WorkCalendar
          onVisibleMonthsChange={(months: DateData[]) => {
            onMonthChange(months[0].year + '/' + months[0].month);
          }}
          theme={{
            textDayHeaderFontWeight: '500',
            'stylesheet.calendar.header': {
              dayHeader: {
                marginTop: HEADER_MARGIN,
                marginBottom: HEADER_MARGIN,
                fontSize: theme.fonts.large,
                fontWeight: 'bold',
                color: theme.colors.grey[5],
              },
              [`dayTextAtIndex${calendarDayIndex()}`]: {
                color: theme.colors.primaryLight,
              },
            },
          }}
          current={dayjs().format(DATE_FORMAT)}
          enableSwipeMonths={true}
          renderArrow={direction => {
            switch (direction) {
              case 'left':
                return <PrevArrowSvg />;
              case 'right':
                return <NextArrowSvg />;
            }
          }}
          renderHeader={date => {
            if (date) {
              return (
                <HeaderMonth>
                  {date.getMonth() + 1}
                  {I18n.t('month')}
                </HeaderMonth>
              );
            }
          }}
          dayComponent={({date, state}: any) => {
            switch (state) {
              case 'disabled':
                return <DayItem day={date.day} works={works} disabled={true} />;
              case 'today':
                return (
                  <DayItem
                    day={date.day}
                    works={works}
                    isToday={true}
                    active={true}
                    onPress={() => {
                      onSelectDate(date.dateString);
                    }}
                  />
                );
              default:
                return (
                  <DayItem
                    day={date.day}
                    works={works}
                    onPress={() => {
                      onSelectDate(date.dateString);
                    }}
                  />
                );
            }
          }}
        />
      </ScrollView>
    </Container>
  );
}

export default CalendarMainPresenter;
