import {
  BasicInput,
  ButtonInput,
  ErrorViewInput,
} from '../../../components/Input';
import {
  CategoryType,
  ImageSelectorOption,
  MaskInputLicenseNo,
  MaskInputPhone,
} from '../../../models/common';
import {GestureResponderEvent, ScrollView} from 'react-native';
import {JoinFormInput, JoinRegex, Stores} from '../../../models/user';
import I18n from '../../../utils/i18nHelpers';
import {Image} from 'react-native-image-crop-picker';
import {ImageSelector} from '../../../components/Image';
import KeyboardBaseContainer from '../../../components/KeyboardBaseContainer';
import {PrimaryButton} from '../../../components/Button';
import React from 'react';
import {SelectionView} from '../../../components/View';
import {TitleItem} from '../../../components/Item';
import {TypeCheckGroup} from '../../../components/Checkbox/TypeCheckbox';
import {VerifyInput} from '../../../../__generated__/globalTypes';
import styled from 'styled-components/native';

const TOP_PADDING = 24;
const BOTTOM_PADDING = 100;
const WIDE_GAP = 16;

const Container = styled(KeyboardBaseContainer)`
  background: ${(props: any) => props.theme.colors.background};
`;

const ContentContainer = styled.View`
  flex: 1;
  padding: ${TOP_PADDING}px
    ${(props: any) => props.theme.size.standardPadding}px ${BOTTOM_PADDING}px;
`;

const WideGapTitleItem = styled(TitleItem)`
  margin-top: ${WIDE_GAP}px;
`;

const BasicGapTitleItem = styled(TitleItem)`
  margin-top: ${(props: any) => props.theme.size.gap}px;
`;

const RemoveBottomTitleItem = styled(WideGapTitleItem)`
  padding-bottom: 0;
`;

const UnderButtonInput = styled(ButtonInput)`
  margin-top: ${(props: any) => props.theme.size.gap}px;
`;

interface Props {
  user: JoinFormInput;
  verifyInfo?: VerifyInput;
  regexResult: JoinRegex;
  workTypeList: CategoryType[];
  workTypeAll: boolean;
  timerMs: number;
  playTimer: boolean;
  area?: CategoryType;
  store?: CategoryType;
  onTimerStop: (ms: number) => void;
  onChangeName: (text: string) => void;
  onChangePhone: (text: string) => void;
  reqVerifyBtnDisabled: boolean;
  reqVerifyBtnPress: (event: GestureResponderEvent) => void;
  onChangeVerificationCode: (text: string) => void;
  verifyCodeBtnDisabled: boolean;
  verifyCodeBtnPress: (event: GestureResponderEvent) => void;
  onChangePassword: (text: string) => void;
  onChangeRePassword: (text: string) => void;
  showSelectionModal: (type: 'area' | 'store') => void;
  onSelectedWorkType: (item: CategoryType) => void;
  onChangeLicenseNo: (text: string) => void;
  showImageOption: () => void;
  imageOption?: ImageSelectorOption;
  addImage: (image: Image) => void;
  deleteImage: () => void;
  resetImageOption: () => void;
  joinBtnDisabled: boolean;
  join: (event: GestureResponderEvent) => void;
}

function JoinPresenter({
  user,
  verifyInfo,
  regexResult,
  workTypeList,
  workTypeAll,
  timerMs,
  playTimer,
  area,
  store,
  onTimerStop,
  onChangeName,
  onChangePhone,
  reqVerifyBtnDisabled,
  reqVerifyBtnPress,
  onChangeVerificationCode,
  verifyCodeBtnDisabled,
  verifyCodeBtnPress,
  onChangePassword,
  onChangeRePassword,
  showSelectionModal,
  onSelectedWorkType,
  onChangeLicenseNo,
  showImageOption,
  imageOption,
  addImage,
  deleteImage,
  resetImageOption,
  joinBtnDisabled,
  join,
}: Props): JSX.Element {
  return (
    <Container
      button={
        <PrimaryButton
          title={I18n.t('Button.join')}
          disabled={joinBtnDisabled}
          onPress={join}
        />
      }>
      <ScrollView scrollIndicatorInsets={{right: 0.1}}>
        <ContentContainer>
          <TitleItem mainText={I18n.t('Title.name')} />
          <BasicInput
            placeholder={I18n.t('Placeholder.name')}
            value={user?.name}
            onChange={onChangeName}
          />
          <WideGapTitleItem mainText={I18n.t('Title.phone')} />
          <ButtonInput
            placeholder={I18n.t('Placeholder.phone_ex')}
            value={user?.phone}
            buttonName={I18n.t('Button.auth_request')}
            buttonDisabled={reqVerifyBtnDisabled}
            onChange={onChangePhone}
            onPress={reqVerifyBtnPress}
            mask={MaskInputPhone}
            keyboardType={'number-pad'}
          />
          <UnderButtonInput
            placeholder={I18n.t('Placeholder.auth_confirm')}
            value={verifyInfo?.code}
            buttonName={I18n.t('Button.auth_confirm')}
            buttonDisabled={verifyCodeBtnDisabled}
            onPress={verifyCodeBtnPress}
            onChange={onChangeVerificationCode}
            keyboardType={'number-pad'}
            millisecond={timerMs}
            usingTimer={true}
            playTimer={playTimer}
            timerStop={onTimerStop}
          />
          <WideGapTitleItem mainText={I18n.t('Title.password')} />
          <ErrorViewInput
            placeholder={I18n.t('Placeholder.password')}
            value={user.password}
            secure={true}
            regexResult={regexResult?.password}
            message={
              regexResult?.password
                ? I18n.t('Regex.success.password')
                : I18n.t('Regex.failed.password')
            }
            onChange={onChangePassword}
          />
          <BasicGapTitleItem mainText={I18n.t('Title.re_password')} />
          <ErrorViewInput
            placeholder={I18n.t('Placeholder.re_password')}
            value={user?.rePassword}
            secure={true}
            regexResult={regexResult?.rePassword}
            message={
              regexResult?.rePassword
                ? I18n.t('Regex.success.re_password')
                : I18n.t('Regex.failed.re_password')
            }
            onChange={onChangeRePassword}
          />
          <BasicGapTitleItem mainText={I18n.t('Title.area')} />
          <SelectionView
            placeholder={I18n.t('Placeholder.area')}
            selectedValue={area}
            onPress={() => {
              showSelectionModal('area');
            }}
          />
          <WideGapTitleItem mainText={I18n.t('Title.store')} />
          <SelectionView
            placeholder={I18n.t('Placeholder.area')}
            selectedValue={store}
            onPress={() => {
              showSelectionModal('store');
            }}
          />
          <RemoveBottomTitleItem
            mainText={I18n.t('Title.work_type')}
            desc={I18n.t('Title.duplicate_selectable')}
          />
          <TypeCheckGroup
            typeList={workTypeList}
            numberPerLine={3}
            isAllChecked={workTypeAll}
            allPress={onSelectedWorkType}
            itemPress={onSelectedWorkType}
          />
          <WideGapTitleItem mainText={I18n.t('Title.license_no')} />
          <ErrorViewInput
            placeholder={I18n.t('Placeholder.license_no')}
            value={user.licenseNo}
            regexResult={regexResult?.licenseNo}
            message={
              regexResult?.licenseNo
                ? I18n.t('Regex.success.license_no')
                : I18n.t('Regex.failed.license_no')
            }
            onChange={onChangeLicenseNo}
            mask={MaskInputLicenseNo}
            keyboardType={'number-pad'}
          />
          <BasicGapTitleItem mainText={I18n.t('Title.license_image')} />
          <ImageSelector
            desc={I18n.t('Placeholder.upload_image')}
            useOption={true}
            showOption={showImageOption}
            option={imageOption}
            onAdd={addImage}
            onDelete={deleteImage}
            isCropped={false}
            resetImageOption={resetImageOption}
          />
        </ContentContainer>
      </ScrollView>
    </Container>
  );
}

export default JoinPresenter;
