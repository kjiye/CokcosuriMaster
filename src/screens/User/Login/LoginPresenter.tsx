import styled, {useTheme} from 'styled-components/native';
import BaseContainer from '../../../components/BaseContainer';
import ButtonGroup from './ButtonGroup';
import {ErrorViewInput} from '../../../components/Input';
import {GestureResponderEvent} from 'react-native';
import LogoSvg from '../../../../assets/svg/logo.svg';
import NoticeCardView from './NoticeCardView';
import {PrimaryButton} from '../../../components/Button';
import React from 'react';
import {useMemo} from 'react';

const TOP_PADDING = 80;
const HORIZONTAL_PADDING = 55;
const LOGO_TOP_MARGIN = 50;
const LOGO_BOTTOM_MARGIN = 40;

const Container = styled(BaseContainer)`
  padding: ${TOP_PADDING}px ${HORIZONTAL_PADDING}px 0;
  align-items: center;
  background-color: ${(props: any) => props.theme.colors.background};
`;

const Logo = styled(LogoSvg)`
  margin: ${LOGO_TOP_MARGIN}px 0 ${LOGO_BOTTOM_MARGIN}px;
`;

interface Props {
  login: (event: GestureResponderEvent) => void;
  tempLogin: (event: GestureResponderEvent) => void;
  goJoin: (event: GestureResponderEvent) => void;
  goFindPassword: (event: GestureResponderEvent) => void;
}

function LoginPresenter({
  login,
  tempLogin,
  goJoin,
  goFindPassword,
}: Props): JSX.Element {
  const theme: any = useTheme();

  return (
    <Container button={<PrimaryButton title={'로그인'} onPress={tempLogin} />}>
      <NoticeCardView
        title={'알림'}
        content={'처음 로그인 후에는 자동로그인 됩니다:)'}
      />
      {useMemo(
        () => (
          <Logo />
        ),
        [],
      )}
      <ErrorViewInput
        placeholder={'휴대폰 번호'}
        regexResult={false}
        message={'유효하지 않는 전화번호입니다'}
      />
      <ErrorViewInput
        style={{marginVertical: theme.size.gap}}
        placeholder={'비밀번호(영문/숫자 포함 6자 이상)'}
        regexResult={false}
        message={'모든 요소를 포함시켜주세요'}
        secure={true}
      />
      <ButtonGroup leftBtnPress={goJoin} rightBtnPress={goFindPassword} />
    </Container>
  );
}

export default LoginPresenter;
