import {BasicInput, ErrorViewInput} from '../../../../components/Input';
import {GestureResponderEvent} from 'react-native';
import I18n from '../../../../utils/i18nHelpers';
import KeyboardBaseContainer from '../../../../components/KeyboardBaseContainer';
import {PasswordRegex} from '../../../../models/user';
import {PrimaryButton} from '../../../../components/Button';
import React from 'react';
import {ScrollView} from 'react-native';
import {TitleItem} from '../../../../components/Item';
import UpdateNoticeCardView from './UpdateNoticeCardView';
import styled from 'styled-components/native';

const CONTAINER_TOP_PADDING = 24;
const BOTTOM_PADDING = 100;
const COMPONENT_GAP = 16;

const Container = styled(KeyboardBaseContainer)`
  background: ${(props: any) => props.theme.colors.background};
`;

const ContentContainer = styled.View`
  flex: 1;
  padding: ${CONTAINER_TOP_PADDING}px
    ${(props: any) => props.theme.size.standardPadding}px ${BOTTOM_PADDING}px;
`;

const Title = styled(TitleItem)`
  margin-top: ${COMPONENT_GAP}px;
`;

const Divider = styled.View`
  margin-top: ${COMPONENT_GAP}px;
  border-bottom-width: 1px;
  border-color: ${(props: any) => props.theme.colors.grey[2]};
`;

interface Props {
  password: string;
  newPassword: string;
  rePassword: string;
  regexResult: PasswordRegex;
  btnDisabled: boolean;
  onChangePassword: (text: string) => void;
  onChangeNewPassword: (text: string) => void;
  onChangeRePassword: (text: string) => void;
  updatePress: (event: GestureResponderEvent) => void;
}

function UpdatePasswordPresenter({
  password,
  newPassword,
  rePassword,
  regexResult,
  btnDisabled,
  onChangePassword,
  onChangeNewPassword,
  onChangeRePassword,
  updatePress,
}: Props): JSX.Element {
  return (
    <Container
      button={
        <PrimaryButton
          title={I18n.t('Button.bottom.update_password')}
          onPress={updatePress}
          disabled={btnDisabled}
        />
      }>
      <ScrollView>
        <ContentContainer>
          <UpdateNoticeCardView />
          <Title mainText={I18n.t('Password.password')} />
          <BasicInput
            placeholder={I18n.t('Placeholder.current_password')}
            secure={true}
            value={password}
            onChange={onChangePassword}
          />
          <Divider />
          <Title mainText={I18n.t('Password.new_password')} />
          <ErrorViewInput
            secure={true}
            placeholder={I18n.t('Placeholder.password')}
            value={newPassword}
            onChange={onChangeNewPassword}
            regexResult={regexResult?.password}
            message={
              regexResult?.password
                ? I18n.t('Regex.success.password')
                : I18n.t('Regex.failed.password')
            }
          />
          <TitleItem mainText={I18n.t('Password.re_password')} />
          <ErrorViewInput
            secure={true}
            placeholder={I18n.t('Placeholder.re_password')}
            value={rePassword}
            onChange={onChangeRePassword}
            regexResult={regexResult?.rePassword}
            message={
              regexResult?.rePassword
                ? I18n.t('Regex.success.re_password')
                : I18n.t('Regex.failed.re_password')
            }
          />
        </ContentContainer>
      </ScrollView>
    </Container>
  );
}

export default UpdatePasswordPresenter;
