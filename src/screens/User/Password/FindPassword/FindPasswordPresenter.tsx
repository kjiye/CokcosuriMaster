import {BLACK_1, PRIMARY_MAIN} from '../../../../constants/color';
import {
  BOTTOM_MARGIN,
  MEDIUM,
  MINI,
  SMALL,
  STANDARD,
} from '../../../../constants/size';
import {BasicInput, ErrorViewInput} from '../../../../components/Input';
import {GestureResponderEvent, ScrollView} from 'react-native';
import BaseContainer from '../../../../components/BaseContainer';
import {CardView} from '../../../../components/View';
import {PrimaryButton} from '../../../../components/Button';
import React from 'react';
import {TitleItem} from '../../../../components/Item';
import styled from 'styled-components/native';

const BOTTOM_PADDING = 90;

const Container = styled(BaseContainer)`
  background: ${(props: any) => props.theme.colors.background};
`;

const ContentContainer = styled.View`
  flex: 1;
  padding: ${(props: any) => `
    ${props.theme.size.standardPadding}px ${props.theme.size.standardPadding}px
    ${BOTTOM_PADDING}px 
  `};
`;

const NoticeMessage = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.small}px;
  color: ${(props: any) => props.theme.colors.black[1]};
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

interface Props {
  ok: (event: GestureResponderEvent) => void;
}

function FindPasswordPresenter({ok}: Props): JSX.Element {
  return (
    <Container button={<PrimaryButton title={'확인'} onPress={ok} />}>
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
                  regexResult={true}
                  // message={'유효하지 않는 휴대폰 번호입니다'}
                />
              </RowWrapper>
              <RowWrapper>
                <TitleItem style={TitleWidth} mainText={'사업자 번호'} />
                <ErrorViewInput
                  style={InputStyle}
                  isShort={true}
                  placeholder={'사업자 번호를 입력해주세요'}
                  regexResult={true}
                  // message={'올바른 사업자 등록번호가 아닙니다'}
                />
              </RowWrapper>
            </>
          </CardView>
        </ContentContainer>
      </ScrollView>
    </Container>
  );
}

export default FindPasswordPresenter;
