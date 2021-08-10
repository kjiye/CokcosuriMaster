import {AppTheme} from '../../../../themes/theme';
import {CardView} from '../../../../components/View';
import React from 'react';
import {TitleItem} from '../../../../components/Item';
import styled from 'styled-components/native';

const {colors}: any = AppTheme;

const Wrapper = styled(CardView)`
  padding-bottom: 24px;
`;

const NoticeMessage = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.small}px;
  color: ${(props: any) => props.theme.colors.black[1]};
`;

function UpdateNoticeCardView(): JSX.Element {
  return (
    <Wrapper>
      <>
        <TitleItem
          frontText={'비밀번호를 바꾸시겠어요?'}
          frontColor={colors.primary}
        />
        <NoticeMessage>영문/숫자 포함 6자이상으로 입력해주세요.</NoticeMessage>
      </>
    </Wrapper>
  );
}

export default UpdateNoticeCardView;
