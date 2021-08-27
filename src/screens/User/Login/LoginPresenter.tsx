import styled, {useTheme} from 'styled-components/native';
import BaseContainer from '../../../components/BaseContainer';
import ButtonGroup from './ButtonGroup';
import {ErrorViewInput} from '../../../components/Input';
import {GestureResponderEvent} from 'react-native';
import I18n from '../../../utils/i18nHelpers';
import {LoginRegex} from '../../../models/user';
import LogoSvg from '../../../../assets/svg/logo.svg';
import {MaskInputPhone} from '../../../models/common';
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
  id: string;
  password: string;
  regexResult: LoginRegex;
  loginBtnDisabled: boolean;
  onChangeId: (text: string) => void;
  onChangePassword: (text: string) => void;
  login: (event: GestureResponderEvent) => void;
  goJoin: (event: GestureResponderEvent) => void;
  goFindPassword: (event: GestureResponderEvent) => void;
}

function LoginPresenter({
  id,
  password,
  regexResult,
  loginBtnDisabled,
  onChangeId,
  onChangePassword,
  login,
  goJoin,
  goFindPassword,
}: Props): JSX.Element {
  const theme: any = useTheme();

  return (
    <Container
      button={
        <PrimaryButton
          title={I18n.t('Button.login')}
          onPress={login}
          disabled={loginBtnDisabled}
        />
      }>
      <NoticeCardView
        title={I18n.t('Login.notice')}
        content={I18n.t('Login.notice_message')}
      />
      {useMemo(
        () => (
          <Logo />
        ),
        [],
      )}
      <ErrorViewInput
        placeholder={I18n.t('Login.phone')}
        value={id}
        regexResult={regexResult?.phone}
        message={!regexResult?.phone ? I18n.t('Regex.failed.phone') : ''}
        onChange={onChangeId}
        keyboardType={'number-pad'}
        mask={MaskInputPhone}
      />
      <ErrorViewInput
        style={{marginVertical: theme.size.gap}}
        placeholder={I18n.t('Login.password')}
        value={password}
        regexResult={regexResult?.password}
        message={!regexResult?.password ? I18n.t('Regex.failed.password') : ''}
        secure={true}
        onChange={onChangePassword}
      />
      <ButtonGroup leftBtnPress={goJoin} rightBtnPress={goFindPassword} />
    </Container>
  );
}

export default LoginPresenter;
