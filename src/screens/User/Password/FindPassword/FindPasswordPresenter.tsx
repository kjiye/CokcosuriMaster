import {BasicInput, ErrorViewInput} from '../../../../components/Input';
import {GestureResponderEvent, ScrollView} from 'react-native';
import {MaskInputLicenseNo, MaskInputPhone} from '../../../../models/common';
import styled, {useTheme} from 'styled-components/native';
import {CardView} from '../../../../components/View';
import I18n from '../../../../utils/i18nHelpers';
import KeyboardBaseContainer from '../../../../components/KeyboardBaseContainer';
import {PasswordRegex} from '../../../../models/user';
import {PrimaryButton} from '../../../../components/Button';
import React from 'react';
import {TitleItem} from '../../../../components/Item';

const BOTTOM_PADDING = 90;

const Container = styled(KeyboardBaseContainer)`
  background: ${(props: any) => props.theme.colors.background};
`;

const ContentContainer = styled.View`
  flex: 1;
  padding: ${(props: any) => `
    ${props.theme.size.standardPadding}px ${props.theme.size.standardPadding}px
    ${BOTTOM_PADDING}px 
  `};
`;

const NoticeMessage = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.small}px;
  color: ${(props: any) => props.theme.colors.black[1]};
`;

const RowWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TitleWidth = {
  width: 100,
};

const InputStyle = {
  flex: 1,
};

interface Props {
  name: string;
  phone: string;
  licenseNo: string;
  regexResult?: PasswordRegex;
  btnDisabled: boolean;
  onChangeName: (text: string) => void;
  onChangePhone: (text: string) => void;
  onChangeLicenseNo: (text: string) => void;
  okPress: (event: GestureResponderEvent) => void;
}

function FindPasswordPresenter({
  name,
  phone,
  licenseNo,
  regexResult,
  btnDisabled,
  onChangeName,
  onChangePhone,
  onChangeLicenseNo,
  okPress,
}: Props): JSX.Element {
  const theme: any = useTheme();
  return (
    <Container
      button={
        <PrimaryButton
          title={I18n.t('ok')}
          onPress={okPress}
          disabled={btnDisabled}
        />
      }>
      <ScrollView>
        <ContentContainer>
          <CardView>
            <>
              <TitleItem
                mainText={'비밀번호를 잊으셨나요?'}
                frontText={'앗! '}
                frontColor={theme.colors.primary}
              />
              <NoticeMessage>
                걱정마세요! 마스터님의 정보만 알려주시면{'\n'}
                코코수리에서 빠르게 비밀번호를 찾아오겠습니다!
              </NoticeMessage>
            </>
          </CardView>
          <CardView style={{marginTop: theme.fonts.normal}}>
            <>
              <RowWrapper>
                <TitleItem
                  style={{...TitleWidth, paddingTop: theme.fonts.mini}}
                  mainText={'이름'}
                />
                <BasicInput
                  style={InputStyle}
                  value={name}
                  placeholder={'이름을 입력해주세요'}
                  isShort={true}
                  onChange={onChangeName}
                />
              </RowWrapper>
              <RowWrapper style={{marginTop: theme.fonts.small}}>
                <TitleItem style={TitleWidth} mainText={'휴대폰 번호'} />
                <ErrorViewInput
                  style={InputStyle}
                  value={phone}
                  isShort={true}
                  placeholder={'휴대폰 번호를 입력해주세요'}
                  regexResult={regexResult?.phone}
                  message={
                    regexResult?.phone
                      ? I18n.t('Regex.success.phone')
                      : I18n.t('Regex.failed.phone')
                  }
                  mask={MaskInputPhone}
                  keyboardType={'number-pad'}
                  onChange={onChangePhone}
                />
              </RowWrapper>
              <RowWrapper>
                <TitleItem style={TitleWidth} mainText={'사업자 번호'} />
                <ErrorViewInput
                  style={InputStyle}
                  value={licenseNo}
                  isShort={true}
                  placeholder={'사업자 번호를 입력해주세요'}
                  regexResult={regexResult?.licenseNo}
                  message={
                    regexResult?.licenseNo
                      ? I18n.t('Regex.success.license_no')
                      : I18n.t('Regex.failed.license_no')
                  }
                  mask={MaskInputLicenseNo}
                  keyboardType={'number-pad'}
                  onChange={onChangeLicenseNo}
                />
              </RowWrapper>
            </>
          </CardView>
        </ContentContainer>
      </ScrollView>
    </Container>
  );
}

export default FindPasswordPresenter;
