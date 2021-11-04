import I18n from '../../utils/i18nHelpers';
import React from 'react';
import {ScheduleData} from '../../models/work';
import {ScheduleStatusBarLabel} from '../../components/Label';
import {WorkState} from '../../../__generated__/globalTypes';
import {getWorks_getWorks_works} from '../../../__generated__/getWorks';
import styled from 'styled-components/native';

const Container = styled.View`
  padding: 10px 20px;
  flex-direction: row;
  flex: 1;
`;

const TimeText = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  font-weight: 600;
  color: ${(props: any) => props.theme.colors.black[1]};
`;

const LabelWrapper = styled.View`
  flex: 1;
  margin-left: 16px;
`;

const MultipleScheduleLabel = styled(ScheduleStatusBarLabel)`
  margin-top: 5px;
`;

interface Props {
  value: ScheduleData;
  goDetail: (state: WorkState, workId: number) => void;
}

function ScheduleItem({value, goDetail}: Props): JSX.Element {
  return (
    <Container>
      <TimeText>
        {value.time}
        {I18n.t('hour')}
      </TimeText>
      <LabelWrapper>
        {value.data.map((v: getWorks_getWorks_works, i: number) => {
          return i === 0 ? (
            <ScheduleStatusBarLabel
              key={i.toString()}
              value={v}
              onPress={() => {
                goDetail(v.state, v.id);
              }}
            />
          ) : (
            <MultipleScheduleLabel
              key={i.toString()}
              value={v}
              onPress={() => {
                goDetail(v.state, v.id);
              }}
            />
          );
        })}
      </LabelWrapper>
    </Container>
  );
}

export default ScheduleItem;
