import 'dayjs/locale/ko';
import {CalendarWorkState, ScheduleData} from '../../../models/work';
import React, {useCallback, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/core';
import CalendarDetailPresenter from './CalendarDetailPresenter';
import {GET_DATE_WORKS} from '../calendar.queries';
import dayjs from 'dayjs';
import {getWorks_getWorks_works} from '../../../../__generated__/getWorks';
import {useLazyQuery} from '@apollo/client';
import {WorkState} from '../../../../__generated__/globalTypes';
dayjs.locale('ko');

function CalendarDetailContainer({
  route: {
    params: {selectedDate, weekArray, workArray},
  },
}: any): JSX.Element {
  const navigation = useNavigation();

  const [schedules, setSchedules] = useState<ScheduleData[]>([]);
  const [activeDate, setActiveDate] = useState<string>(selectedDate);

  const [getDateWorks] = useLazyQuery(GET_DATE_WORKS, {
    onError: () => {
      setSchedules([]);
    },
    onCompleted: (data: any) => {
      const {success, works} = data?.getWorks;
      if (success && works.length > 0) {
        const array = works
          .map((v: getWorks_getWorks_works) => {
            return {
              ...v,
              visitDate: dayjs(parseInt(v.visitDate, 10)).format('HH'),
            };
          })
          .sort((a: getWorks_getWorks_works, b: getWorks_getWorks_works) => {
            return Number(a.visitDate) - Number(b.visitDate);
          });
        let result: ScheduleData[] = [];
        array.map((v: any, i: number) => {
          if (i > 0) {
            if (array[i - 1].visitDate === v.visitDate) {
              result[i - 1] = {
                time: v.visitDate,
                data: [...result[i - 1].data, v],
              };
            } else {
              result = [
                ...result,
                {
                  time: v.visitDate,
                  data: [v],
                },
              ];
            }
          } else {
            result = [
              {
                time: v.visitDate,
                data: [v],
              },
            ];
          }
          return v;
        });
        setSchedules(result);
      } else {
        setSchedules([]);
      }
    },
  });

  useFocusEffect(
    useCallback(() => {
      getDateWorks({
        variables: {
          visitDate: selectedDate.replace(/-/gi, '/'),
          state: CalendarWorkState,
        },
      });
    }, []),
  );

  const props = {
    weekArray,
    workArray,
    selectedDate: activeDate,
    schedules,
    goCalendar: () => {
      navigation.goBack();
    },
    goDetail: (state: WorkState, workId: number) => {
      navigation.navigate('WorkDetail', {state: state, id: workId});
    },
    onSelectDate: (date: string) => {
      setActiveDate(date);
      getDateWorks({
        variables: {
          visitDate: date.replace(/-/gi, '/'),
          state: CalendarWorkState,
        },
      });
    },
  };
  return <CalendarDetailPresenter {...props} />;
}

export default CalendarDetailContainer;
