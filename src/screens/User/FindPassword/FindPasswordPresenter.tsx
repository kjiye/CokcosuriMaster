import {BLACK_1, PRIMARY_MAIN} from '../../../constants/color';
import {
  BOTTOM_MARGIN,
  MEDIUM,
  MINI,
  SMALL,
  STANDARD,
} from '../../../constants/size';
import {BasicInput, ErrorViewInput} from '../../../components/Input';
import BaseContainer from '../../../components/BaseContainer';
import {BottomButton} from '../../../components/Button';
import {CardView} from '../../../components/View';
import React from 'react';
import {ScrollView} from 'react-native';
import {TitleItem} from '../../../components/Item';
import styled from 'styled-components/native';

const ContentContainer = styled.View`
  flex: 1;
  padding: ${STANDARD}px ${STANDARD}px ${BOTTOM_MARGIN}px;
`;

const NoticeMessage = styled.Text`
  font-size: ${SMALL}px;
  color: ${BLACK_1};
`;

const RowWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TitleWidth = {
  width: 100,
};

const InputStyle = {
  flex: 1,
};

function FindPasswordPresenter(): JSX.Element {
  return (
    <BaseContainer button={<BottomButton name={'확인'} />}>
      <ScrollView>
        <ContentContainer>
          <CardView>
            <>
              <TitleItem
                mainText={'비밀번호를 잊으셨나요?'}
                frontText={'앗! '}
                frontColor={PRIMARY_MAIN}
              />
              <NoticeMessage>
                걱정마세요! 마스터님의 정보만 알려주시면{'\n'}
                코코수리에서 빠르게 비밀번호를 찾아오겠습니다!
              </NoticeMessage>
            </>
          </CardView>
          <CardView style={{marginTop: MEDIUM}}>
            <>
              <RowWrapper>
                <TitleItem
                  style={{...TitleWidth, paddingTop: MINI}}
                  mainText={'이름'}
                />
                <BasicInput
                  style={InputStyle}
                  placeholder={'이름을 입력해주세요'}
                  isShort={true}
                />
              </RowWrapper>
              <RowWrapper style={{marginTop: SMALL}}>
                <TitleItem style={TitleWidth} mainText={'휴대폰 번호'} />
                <ErrorViewInput
                  style={InputStyle}
                  isShort={true}
                  placeholder={'휴대폰 번호를 입력해주세요'}
                  regexResult={false}
                  message={'유효하지 않는 휴대폰 번호입니다'}
                />
              </RowWrapper>
              <RowWrapper>
                <TitleItem style={TitleWidth} mainText={'사업자 번호'} />
                <ErrorViewInput
                  style={InputStyle}
                  isShort={true}
                  placeholder={'사업자 번호를 입력해주세요'}
                  regexResult={false}
                  message={'올바른 사업자 등록번호가 아닙니다'}
                />
              </RowWrapper>
            </>
          </CardView>
        </ContentContainer>
      </ScrollView>
    </BaseContainer>
  );
}

export default FindPasswordPresenter;
