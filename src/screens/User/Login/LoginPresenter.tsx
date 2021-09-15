import {GestureResponderEvent, ScrollView} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import ButtonGroup from './ButtonGroup';
import {ErrorViewInput} from '../../../components/Input';
import I18n from '../../../utils/i18nHelpers';
import KeyboardBaseContainer from '../../../components/KeyboardBaseContainer';
import {LoginRegex} from '../../../models/user';
import LogoSvg from '../../../../assets/svg/logo.svg';
import {MaskInputPhone} from '../../../models/common';
import NoticeCardView from './NoticeCardView';
import {PrimaryButton} from '../../../components/Button';
import React from 'react';
import {useMemo} from 'react';

const TOP_PADDING = 80;
const BOTTOM_PADDING = 100;
const HORIZONTAL_PADDING = 55;
const LOGO_TOP_MARGIN = 50;
const LOGO_BOTTOM_MARGIN = 40;

const Container = styled(KeyboardBaseContainer)`
  background-color: ${(props: any) => props.theme.colors.background};
`;

const ContentContainer = styled.View`
  flex: 1;
  padding: ${TOP_PADDING}px ${HORIZONTAL_PADDING}px ${BOTTOM_PADDING}px;
  align-items: center;
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
      <ScrollView scrollIndicatorInsets={{right: 0.1}}>
        <ContentContainer>
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
            message={
              !regexResult?.password ? I18n.t('Regex.failed.password') : ''
            }
            secure={true}
            onChange={onChangePassword}
          />
          <ButtonGroup leftBtnPress={goJoin} rightBtnPress={goFindPassword} />
        </ContentContainer>
      </ScrollView>
    </Container>
  );
}

export default LoginPresenter;
