import React from 'react';
import styled from 'styled-components/native';

const WeekdayWrapper = styled.View`
  align-items: center;
`;

const WeekdayText = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.large}px;
  color: ${(props: any) => props.theme.colors.grey[5]};
`;

interface Props {
  weekday: string;
}

function WeekdayItem({weekday}: Props): JSX.Element {
  return (
    <WeekdayWrapper>
      <WeekdayText>{weekday}</WeekdayText>
    </WeekdayWrapper>
  );
}

export default WeekdayItem;
