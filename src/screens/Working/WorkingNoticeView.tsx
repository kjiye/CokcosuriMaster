import {CardView} from '../../components/View';
import {MessageBarLabel} from '../../components/Label';
import React from 'react';
import {paymentText} from '../../utils/workUtils';
import styled from 'styled-components/native';

const MESSAGE_LINE_HEIGHT = 20;
const TITLE_TOP_MARGIN = 12;

const Wrapper = styled(CardView)``;

const TitleText = styled.Text`
  margin: ${TITLE_TOP_MARGIN}px 0 ${TITLE_TOP_MARGIN / 2}px 0;
  font-size: ${(props: any) => props.theme.fonts.large}px;
  font-weight: bold;
  color: ${(props: any) => props.theme.colors.black[1]};
`;

const Divider = styled.View`
  margin-top: ${(props: any) => props.theme.size.innerMargin}px;
  border-top-width: 1px;
  border-color: ${(props: any) => props.theme.colors.grey[2]};
`;

const MiddleTitleText = styled(TitleText)`
  margin: ${TITLE_TOP_MARGIN}px 0;
`;

const PointTitleText = styled(TitleText)<{color?: string}>`
  color: ${(props: any) =>
    props.color ? props.color : props.theme.colors.primaryLight};
`;

const Message = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.small}px;
  color: ${(props: any) => props.theme.colors.black[1]};
  line-height: ${MESSAGE_LINE_HEIGHT}px;
`;

interface Props {
  status: string;
  itemInfo?: any;
  statusColor?: string;
  endingWord: string;
  message: string;
  middleTitle: string;
}

function WorkingNoticeView({
  status,
  itemInfo,
  statusColor,
  endingWord,
  message,
  middleTitle,
}: Props): JSX.Element {
  return (
    <Wrapper>
      <>
        <TitleText>
          <PointTitleText color={statusColor}>{status} </PointTitleText>
          {endingWord}
        </TitleText>
        <Message>{message}</Message>
        <Divider>
          <MiddleTitleText>{middleTitle}</MiddleTitleText>
        </Divider>
        <MessageBarLabel
          message={itemInfo?.title}
          labelLeftText={paymentText(itemInfo?.payment)}
          labelRightText={itemInfo?.hasParts.name}
          allRadius={true}
        />
      </>
    </Wrapper>
  );
}

export default WorkingNoticeView;
