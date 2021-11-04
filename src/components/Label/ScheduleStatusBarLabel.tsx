import {
  GestureResponderEvent,
  StyleProp,
  ViewProps,
  ViewStyle,
} from 'react-native';
import React from 'react';
import StatusRoundedLabel from './StatusRoundedLabel';
import {WorkState} from '../../../__generated__/globalTypes';
import {scheduleStateName} from '../../utils/workUtils';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  padding: ${(props: any) => props.theme.size.padding}px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${(props: any) => props.theme.colors.grey[0]};
  border-width: 1px;
  border-color: ${(props: any) => props.theme.colors.primaryLight};
  border-radius: ${(props: any) => props.theme.size.borderRadius}px;
`;

const TitleText = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  color: ${(props: any) => props.theme.colors.black[1]};
  flex: 1;
`;

const StatusLabel = styled(StatusRoundedLabel)<{status: string}>`
  margin-left: 8px;
  ${(props: any) => `
  background-color: ${
    props.status === WorkState.RESERVE
      ? props.theme.colors.secondary
      : props.status === WorkState.DONE
      ? props.theme.colors.primary
      : props.theme.colors.errorDark
  }`}
`;

interface Props {
  style?: StyleProp<ViewStyle>;
  value: any;
  onPress?: (event: GestureResponderEvent) => void;
}

function ScheduleStatusBarLabel({style, value, onPress}: Props): JSX.Element {
  return (
    <Container style={style as StyleProp<ViewProps>} onPress={onPress}>
      <TitleText numberOfLines={1}>
        {value.workCategory.name}/{value.customer.name}/
        {value.address.roadAddress}
      </TitleText>
      <StatusLabel text={scheduleStateName(value.state)} status={value.state} />
    </Container>
  );
}

export default ScheduleStatusBarLabel;
