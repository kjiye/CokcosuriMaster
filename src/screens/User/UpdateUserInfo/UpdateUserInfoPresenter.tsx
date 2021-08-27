import {
  CategoryType,
  ImageSelectorOption,
  MaskInputLicenseNo,
  MaskInputPhone,
} from '../../../models/common';
import BaseContainer from '../../../components/BaseContainer';
import {BasicInput} from '../../../components/Input';
import {GestureResponderEvent} from 'react-native';
import I18n from '../../../utils/i18nHelpers';
import {Image} from 'react-native-image-crop-picker';
import {ImageSelector} from '../../../components/Image';
import LoadingView from '../../../components/View/LoadingView';
import {PrimaryButton} from '../../../components/Button';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {TinyHiddenButton} from '../../../components/Button';
import {TitleItem} from '../../../components/Item';
import {TypeCheckGroup} from '../../../components/Checkbox/TypeCheckbox';
import {UpdateUser} from '../../../models/user';
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
  loading: boolean;
  user?: UpdateUser;
  workTypeAll: boolean;
  btnDisabled: boolean;
  onChangeName: (text: string) => void;
  onChangeWorkType: (item: CategoryType) => void;
  onChangeLicenseNo: (text: string) => void;
  imageOption?: ImageSelectorOption;
  showImageOption: () => void;
  currentImageDelete: () => void;
  addImage: (image: Image) => void;
  deleteImage: () => void;
  logout: (event: GestureResponderEvent) => void;
  withdrawal: (event: GestureResponderEvent) => void;
  updatePress: (event: GestureResponderEvent) => void;
}

function UpdateUserInfoPresenter({
  loading,
  user,
  workTypeAll,
  btnDisabled,
  onChangeName,
  onChangeWorkType,
  onChangeLicenseNo,
  imageOption,
  currentImageDelete,
  showImageOption,
  addImage,
  deleteImage,
  logout,
  withdrawal,
  updatePress,
}: Props): JSX.Element {
  return loading ? (
    <LoadingView />
  ) : (
    <Container
      button={
        <PrimaryButton
          title={I18n.t('Button.update_info')}
          onPress={updatePress}
          disabled={btnDisabled}
        />
      }>
      <ScrollView>
        <ContentContainer>
          <TitleItem mainText={I18n.t('Title.name')} />
          <BasicInput value={user?.name} onChange={onChangeName} />
          <Title mainText={I18n.t('Title.phone')} />
          <BasicInput
            value={user?.phone}
            editable={false}
            mask={MaskInputPhone}
          />
          <Title
            style={{paddingBottom: 0}}
            mainText={I18n.t('Title.work_type')}
            desc={I18n.t('Title.duplicate_selectable')}
          />
          <TypeCheckGroup
            typeList={user?.workCategories || []}
            numberPerLine={3}
            isAllChecked={workTypeAll}
            allPress={onChangeWorkType}
            itemPress={onChangeWorkType}
          />
          <Title mainText={I18n.t('Title.license_no')} />
          <BasicInput
            value={user?.company.licenseNo}
            onChange={onChangeLicenseNo}
            mask={MaskInputLicenseNo}
          />
          <Title mainText={I18n.t('Title.license_image')} />
          <ImageSelector
            currentImage={user?.company?.licenseImage}
            currentDelete={currentImageDelete}
            desc={I18n.t('Placeholder.upload_image')}
            useOption={true}
            showOption={showImageOption}
            option={imageOption}
            onAdd={addImage}
            onDelete={deleteImage}
          />
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
