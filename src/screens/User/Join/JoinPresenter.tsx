import {
  BasicInput,
  ButtonInput,
  ErrorViewInput,
} from '../../../components/Input';
import {GAP_MARGIN, MEDIUM} from '../../../constants/size';
import {GestureResponderEvent, ScrollView} from 'react-native';
import BaseContainer from '../../../components/BaseContainer';
import I18n from '../../../utils/i18nHelpers';
import {ImageSelector} from '../../../components/Image';
import {PrimaryButton} from '../../../components/Button';
import React from 'react';
import {TitleItem} from '../../../components/Item';
import {TypeCheckGroup} from '../../../components/Checkbox/TypeCheckbox';
import styled from 'styled-components/native';

const BOTTOM_PADDING = 100;

const ContentContainer = styled.View`
  flex: 1;
  padding: 24px ${(props: any) => props.theme.size.standardPadding}px
    ${BOTTOM_PADDING}px;
  background: white;
`;

interface Props {
  onChangePhone: (text: string) => void;
  reqVerifyBtnDisabled: boolean;
  reqVerifyBtnPress: (event: GestureResponderEvent) => void;
  verifyCodeBtnPress: (event: GestureResponderEvent) => void;
  join: (event: GestureResponderEvent) => void;
}

function JoinPresenter({
  onChangePhone,
  reqVerifyBtnDisabled,
  reqVerifyBtnPress,
  verifyCodeBtnPress,
  join,
}: Props): JSX.Element {
  return (
    <BaseContainer
      // button={<BottomButton name={I18n.t('Button.join')} disabled={false} />}>
      button={
        <PrimaryButton
          title={I18n.t('Button.join')}
          disabled={false}
          onPress={join}
        />
      }>
      <ScrollView>
        <ContentContainer>
          <TitleItem mainText={I18n.t('Title.name')} />
          <BasicInput placeholder={I18n.t('Placeholder.name')} />
          <TitleItem
            style={{marginTop: MEDIUM}}
            mainText={I18n.t('Title.phone')}
          />
          <ButtonInput
            placeholder={I18n.t('Placeholder.phone_ex')}
            buttonName={I18n.t('Button.auth_request')}
            buttonDisabled={reqVerifyBtnDisabled}
            onChange={onChangePhone}
            onPress={reqVerifyBtnPress}
          />
          <ButtonInput
            style={{marginTop: GAP_MARGIN}}
            placeholder={I18n.t('Placeholder.auth_confirm')}
            buttonName={I18n.t('Button.auth_confirm')}
            onPress={verifyCodeBtnPress}
          />
          <TitleItem
            style={{marginTop: MEDIUM}}
            mainText={I18n.t('Title.password')}
          />
          <ErrorViewInput
            placeholder={I18n.t('Placeholder.password')}
            secure={true}
            // regexResult={true}
            // message={"유효한 비밀번호입니다"}
          />
          <TitleItem
            style={{marginTop: GAP_MARGIN}}
            mainText={I18n.t('Title.re_password')}
          />
          <ErrorViewInput
            placeholder={I18n.t('Placeholder.re_password')}
            secure={true}
            // regexResult={true}
            // message={'입력한 비밀번호와 동일하게 입력해주세요'}
          />
          <TitleItem
            style={{marginTop: GAP_MARGIN, paddingBottom: 0}}
            mainText={I18n.t('Title.work_type')}
            desc={I18n.t('Title.duplicate_selectable')}
          />
          <TypeCheckGroup
            typeList={[
              {name: '에어컨'},
              {name: '전기/조명'},
              {name: '욕실'},
              {name: '주방'},
              {name: '방충망/방범창'},
              {name: '새시'},
              {name: '블라인드'},
              {name: '페인트/방수'},
              {name: '도어락'},
              {name: '수리/설치 기타'},
            ]}
            numberPerLine={3}
          />
          <TitleItem
            style={{marginTop: MEDIUM}}
            mainText={I18n.t('Title.license_no')}
          />
          <ErrorViewInput
            placeholder={I18n.t('Placeholder.license_no')}
            // regexResult={false}
            // message={'유효한 사업자 번호를 입력해주세요'}
          />
          <TitleItem
            style={{marginTop: GAP_MARGIN}}
            mainText={I18n.t('Title.license_image')}
          />
          <ImageSelector desc={I18n.t('Placeholder.upload_image')} />
        </ContentContainer>
      </ScrollView>
    </BaseContainer>
  );
}

export default JoinPresenter;
