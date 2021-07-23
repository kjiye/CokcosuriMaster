import {BLACK_1, GRAY_5, PRIMARY_MAIN} from '../../../constants/color';
import {GAP_MARGIN, MEDIUM, TINY} from '../../../constants/size';
import BaseContainer from '../../../components/BaseContainer';
import CardView from '../../../components/View/CardView';
import {Dimensions} from 'react-native';
import {ErrorViewInput} from '../../../components/Input';
import {FullSingleButton} from '../../../components/Button';
import LogoSvg from '../../../../assets/svg/logo.svg';
import React from 'react';
import TitleItem from '../../../components/Item/TitleItem';
import styled from 'styled-components/native';

const {width} = Dimensions.get('screen');

const Container = styled.View`
  padding: 90px 55px 0;
  align-items: center;
`;

const NoticeMessage = styled.Text`
  font-size: ${MEDIUM}px;
  color: ${BLACK_1};
`;

const Logo = styled(LogoSvg)`
  margin: 50px 0 40px;
`;

const ButtonWrapper = styled.View`
  margin-top: ${MEDIUM}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Button = styled.TouchableOpacity`
  padding: 0 ${MEDIUM}px;
`;

const ButtonText = styled.Text`
  font-size: ${TINY}px;
  color: ${GRAY_5};
`;

const ButtonSlash = styled.Text`
  font-size: ${MEDIUM}px;
  color: ${PRIMARY_MAIN};
`;

function LoginPresenter(): JSX.Element {
  return (
    <BaseContainer style={{}}>
      <Container>
        <CardView
          wrapperStyle={{
            borderWidth: 1,
            borderColor: PRIMARY_MAIN,
          }}>
          <>
            <TitleItem
              wrapperStyle={{paddingBottom: GAP_MARGIN}}
              mainText={'알림'}
            />
            <NoticeMessage>
              처음 로그인 후에는 자동로그인 됩니다:)
            </NoticeMessage>
          </>
        </CardView>
        <Logo />
        <ErrorViewInput
          placeholder={'휴대폰 번호'}
          regexResult={false}
          message={'유효하지 않는 전화번호입니다'}
        />
        <ErrorViewInput
          wrapperStyle={{marginVertical: GAP_MARGIN}}
          placeholder={'비밀번호(영문/숫자 포함 6자 이상)'}
          regexResult={false}
          message={'모든 요소를 포함시켜주세요'}
          secure={true}
        />
        <FullSingleButton
          btnWidth={width - 55 * 2}
          name={'Login'}
          disabled={true}
        />
        <ButtonWrapper>
          <Button>
            <ButtonText>회원가입</ButtonText>
          </Button>
          <ButtonSlash>{'/'}</ButtonSlash>
          <Button>
            <ButtonText>비밀번호 찾기</ButtonText>
          </Button>
        </ButtonWrapper>
      </Container>
    </BaseContainer>
  );
}

export default LoginPresenter;
