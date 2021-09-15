import DeleteSvg from '../../../assets/svg/ic_close.svg';
import {Dimensions} from 'react-native';
import React from 'react';
import {dateFormatting} from '../../utils/commonUtils';
import {getAlarm_getAlarm_alarm} from '../../../__generated__/getAlarm';
import styled from 'styled-components/native';

const ICON_SIZE = 44;

const Container = styled.View`
  padding-top: 12px;
  padding-left: 12px;
  border-bottom-width: 1px;
  border-color: ${(props: any) => props.theme.colors.grey[2]};
`;

const MainText = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  color: ${(props: any) => props.theme.colors.black[1]};
`;

const PointedText = styled(MainText)`
  color: ${(props: any) => props.theme.colors.primary};
`;

const UnderLineWrapper = styled.View`
  position: relative;
`;

const DeleteButton = styled.TouchableOpacity`
  padding-right: 5px;
  position: absolute;
  right: 0;
  bottom: 0;
`;

const DateText = styled.Text`
  padding-bottom: ${(props: any) => props.theme.size.innerMargin}px;
  margin-top: ${(props: any) => props.theme.size.innerMargin}px;
  font-size: ${(props: any) => props.theme.fonts.mini}px;
  color: ${(props: any) => props.theme.colors.grey[5]};
`;

interface Props {
  item: getAlarm_getAlarm_alarm;
  isDelete: boolean;
  onDelete: (id: string) => void;
}

function AlarmItem({item, isDelete, onDelete}: Props): JSX.Element {
  const regex = /[1-3][시][간]/;
  const pointedText: any = item.message.match(regex);
  const mainText = item.message.split(pointedText);
  return (
    <Container>
      <MainText>
        {mainText[0]}
        <PointedText>{pointedText}</PointedText>
        {mainText[mainText.length - 1]}
      </MainText>
      <UnderLineWrapper>
        <DateText>
          {dateFormatting(item.reserveTime)}{' '}
          {dateFormatting(item.reserveTime, true)}
        </DateText>
        {isDelete && (
          <DeleteButton
            onPress={() => {
              onDelete(item.requestId);
            }}>
            <DeleteSvg width={ICON_SIZE} height={ICON_SIZE} />
          </DeleteButton>
        )}
      </UnderLineWrapper>
    </Container>
  );
}

export default AlarmItem;
