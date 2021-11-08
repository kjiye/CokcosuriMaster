import 'dayjs/locale/ko';
import {CalendarWorkCount} from '../../models/work';
import {GestureResponderEvent} from 'react-native';
import React from 'react';
import {StatusDotItem} from '../../components/Item';
import dayjs from 'dayjs';
import styled from 'styled-components/native';
dayjs.locale('ko');

const DAY_COMPONENT_HEIGHT = 70;
const DAY_TEXT_HEIGHT = 45;
const TODAY_CIRCLE_SIZE = 30;

const DayWrapper = styled.TouchableOpacity<{hasBorder: boolean}>`
  flex: 1;
  align-items: center;
  width: 100%;
  height: ${DAY_COMPONENT_HEIGHT}px;
  border-bottom-width: ${({hasBorder}) => (hasBorder ? 1 : 0)}px;
  border-color: ${(props: any) => props.theme.colors.grey[3]};
`;

const DayText = styled.Text<{disabled: boolean}>`
  margin-top: 5px;
  text-align: center;
  font-size: 16px;
  height: ${DAY_TEXT_HEIGHT}px;
  ${(props: any) => `
  color: ${
    props.disabled ? props.theme.colors.grey[3] : props.theme.colors.black[1]
  }
`}
`;

const TodayWrapper = styled.View<{isToday: boolean}>`
  width: ${TODAY_CIRCLE_SIZE}px;
  height: ${TODAY_CIRCLE_SIZE}px;
  border-radius: ${TODAY_CIRCLE_SIZE / 2}px;
  ${(props: any) => `
    background-color: ${
      props.isToday
        ? props.theme.colors.primary
        : props.theme.colors.primaryLight
    }
  `}
`;

const TodayText = styled(DayText)`
  color: ${(props: any) => props.theme.colors.grey[0]};
  font-weight: 500;
`;

const DotPosition = styled.View`
  position: absolute;
  bottom: 10px;
`;

const DotWrapper = styled.View`
  flex-direction: row;
`;

interface Props {
  day: string;
  works?: CalendarWorkCount[];
  isToday?: boolean;
  active?: boolean;
  disabled?: boolean;
  hasBorder?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

function DayItem({
  day,
  works,
  isToday = false,
  active = false,
  disabled = false,
  hasBorder = true,
  onPress,
}: Props): JSX.Element {
  return (
    <DayWrapper hasBorder={hasBorder} onPress={onPress}>
      {active ? (
        <TodayWrapper isToday={isToday}>
          <TodayText disabled={disabled}>{day}</TodayText>
        </TodayWrapper>
      ) : (
        <DayText disabled={disabled}>{day}</DayText>
      )}
      {works &&
        works.length > 0 &&
        works.map((v, i) => {
          if (v.day === parseInt(day, 10) && !disabled) {
            return (
              <DotPosition key={i.toString()}>
                <DotWrapper>
                  {v.data.map((value, index) => {
                    return (
                      <StatusDotItem
                        key={index.toString()}
                        status={value.state}
                      />
                    );
                  })}
                </DotWrapper>
              </DotPosition>
            );
          }
        })}
    </DayWrapper>
  );
}

export default DayItem;
