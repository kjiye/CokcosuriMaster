import BaseContainer from '../../../components/BaseContainer';
import {BasicInput} from '../../../components/Input';
import {GestureResponderEvent} from 'react-native';
import I18n from '../../../utils/i18nHelpers';
import {ImageSelector} from '../../../components/Image';
import {PrimaryButton} from '../../../components/Button';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {TinyHiddenButton} from '../../../components/Button';
import {TitleItem} from '../../../components/Item';
import {TypeCheckGroup} from '../../../components/Checkbox/TypeCheckbox';
import styled from 'styled-components/native';

const CONTAINER_TOP_PADDING = 24;
const BOTTOM_PADDING = 100;
const COMPONENT_GAP = 16;

const Container = styled(BaseContainer)`
  flex: 1;
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

const ButtonWrapper = styled.View`
  margin-top: ${(props: any) => props.theme.fonts.normal}px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

interface Props {
  logout: (event: GestureResponderEvent) => void;
  withdrawal: (event: GestureResponderEvent) => void;
  update: (event: GestureResponderEvent) => void;
}

function UpdateUserInfoPresenter({
  logout,
  withdrawal,
  update,
}: Props): JSX.Element {
  return (
    <Container
      button={
        <PrimaryButton title={I18n.t('Button.update_info')} onPress={update} />
      }>
      <ScrollView>
        <ContentContainer>
          <TitleItem mainText={I18n.t('Title.name')} />
          <BasicInput value={'홍길동'} />
          <Title mainText={I18n.t('Title.phone')} />
          <BasicInput value={'010-1234-1234'} editable={false} />
          <Title
            style={{paddingBottom: 0}}
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
          <Title mainText={I18n.t('Title.license_no')} />
          <BasicInput value={'12-345-67890'} />
          <Title mainText={I18n.t('Title.license_image')} />
          <ImageSelector desc={I18n.t('Placeholder.upload_image')} />
          <ButtonWrapper>
            <TinyHiddenButton name={I18n.t('Button.logout')} onPress={logout} />
            <TinyHiddenButton
              name={I18n.t('Button.withdrawal')}
              onPress={withdrawal}
            />
          </ButtonWrapper>
        </ContentContainer>
      </ScrollView>
    </Container>
  );
}

export default UpdateUserInfoPresenter;
