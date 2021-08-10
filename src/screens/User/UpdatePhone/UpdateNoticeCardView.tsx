import {AppTheme} from '../../../themes/theme';
import {CardView} from '../../../components/View';
import React from 'react';
import {TitleItem} from '../../../components/Item';
import styled from 'styled-components/native';

const INFO_VIEW_WIDTH = 130;
const COMPONENT_GAP = 16;
const {colors}: any = AppTheme;

const NoticeMessage = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.small}px;
  color: ${(props: any) => props.theme.colors.black[1]};
`;

const InfoWrapper = styled.View`
  margin-top: ${COMPONENT_GAP}px;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`;

const InfoView = styled.View`
  width: ${INFO_VIEW_WIDTH}px;
  padding-bottom: 4px;
  border-bottom-width: 1px;
  border-color: ${(props: any) => props.theme.colors.primary};
`;

const InfoValueText = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  font-weight: 600;
  color: ${(props: any) => props.theme.colors.black[1]};
  text-align: center;
`;

function UpdateNoticeCardView(): JSX.Element {
  return (
    <CardView>
      <>
        <TitleItem
          frontText={'전화번호가 바뀌셨나요?'}
          frontColor={colors.primary}
        />
        <NoticeMessage>
          원활한 수리업무를 위해 전화번호 변경을 해주세요
        </NoticeMessage>
        <InfoWrapper>
          <TitleItem mainText={'기존 전화번호'} />
          <InfoView>
            <InfoValueText>010-1234-1234</InfoValueText>
          </InfoView>
        </InfoWrapper>
      </>
    </CardView>
  );
}

export default UpdateNoticeCardView;
