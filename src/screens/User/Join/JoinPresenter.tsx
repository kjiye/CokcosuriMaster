import {
  BIG,
  BOTTOM_MARGIN,
  GAP_MARGIN,
  MEDIUM,
  STANDARD,
} from '../../../constants/size';
import {
  BasicInput,
  ButtonInput,
  ErrorViewInput,
} from '../../../components/Input';
import BaseContainer from '../../../components/BaseContainer';
import {BottomButton} from '../../../components/Button';
import I18n from '../../../utils/i18nHelpers';
import {ImageSelector} from '../../../components/Image';
import React from 'react';
import {ScrollView} from 'react-native';
import {TitleItem} from '../../../components/Item';
import {TypeCheckGroup} from '../../../components/Checkbox/TypeCheckbox';
import styled from 'styled-components/native';

const ContentContainer = styled.View`
  flex: 1;
  padding: ${BIG}px ${STANDARD}px ${BOTTOM_MARGIN}px;
  background: white;
`;

function JoinPresenter(): JSX.Element {
  return (
    <BaseContainer
      button={<BottomButton name={I18n.t('Button.join')} disabled={true} />}>
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
            buttonDisabled={true}
          />
          <ButtonInput
            style={{marginTop: GAP_MARGIN}}
            placeholder={I18n.t('Placeholder.auth_confirm')}
            buttonName={I18n.t('Button.auth_confirm')}
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
            regexResult={false}
            message={'입력한 비밀번호와 동일하게 입력해주세요'}
          />
          <TitleItem
            style={{marginTop: GAP_MARGIN, paddingBottom: 0}}
            mainText={I18n.t('Title.work_type')}
            desc={I18n.t('Title.duplicate_selectable')}
          />
          <TypeCheckGroup
            typeList={[{name: '에어컨'}, {name: '전기/조명'}, {name: '욕실'}]}
            numberPerLine={3}
          />
          <TitleItem
            style={{marginTop: MEDIUM}}
            mainText={I18n.t('Title.license_no')}
          />
          <ErrorViewInput
            placeholder={I18n.t('Placeholder.license_no')}
            regexResult={false}
            message={'유효한 사업자 번호를 입력해주세요'}
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
