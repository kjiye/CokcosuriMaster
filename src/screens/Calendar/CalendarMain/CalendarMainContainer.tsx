import 'dayjs/locale/ko';
import {BASIC_DATE_FORMAT, getWeekArray} from '../../../utils/commonUtils';
import {CalendarWorkCount, CalendarWorkState} from '../../../models/work';
import React, {useCallback, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/core';
import {APIDateFormatMonth} from '../../../models/common';
import CalendarMainPresenter from './CalendarMainPresenter';
import {GET_WORK_COUNT} from '../calendar.queries';
import dayjs from 'dayjs';
import {lastStayMainTab} from '../../../apollo';
import {useLazyQuery} from '@apollo/client';
dayjs.locale('ko');

function CalendarMainContainer(): JSX.Element {
  const navigation = useNavigation();

  const [works, setWorks] = useState<CalendarWorkCount[]>([]);
  const [visitDate, setVisitDate] = useState<string>(
    dayjs().format(APIDateFormatMonth),
  );

  const [getWorksCount] = useLazyQuery(GET_WORK_COUNT, {
    onError: () => {
      setWorks([]);
    },
    onCompleted: (data: any) => {
      const {success, worksCount} = data?.getWorkCount;
      if (success) setWorks(worksCount);
    },
  });

  useFocusEffect(
    useCallback(() => {
      lastStayMainTab('CalendarStack');
      getWorksCount({
        variables: {
          visitDate: visitDate,
          state: CalendarWorkState,
        },
      });
    }, [visitDate]),
  );

  const props = {
    works,
    onMonthChange: (month: string) => {
      setVisitDate(month);
      getWorksCount({
        variables: {
          visitDate: month,
        },
      });
    },
    onSelectDate: (selectedDate: string) => {
      const weekArray = getWeekArray(selectedDate);
      const workArray = weekArray
        .map(v => {
          let obj;
          works.map(value => {
            const workDate = dayjs(
              value.year + '-' + value.month + '-' + value.day,
            ).format(BASIC_DATE_FORMAT);
            if (v === workDate) {
              obj = value;
              return;
            }
          });
          return obj;
        })
        .filter(v => v !== undefined);

      navigation.navigate('CalendarDetail', {
        selectedDate,
        weekArray,
        workArray,
      });
    },
  };
  return <CalendarMainPresenter {...props} />;
}

export default CalendarMainContainer;
