import {Dimensions, GestureResponderEvent} from 'react-native';
import I18n from '../../utils/i18nHelpers';
import LogoSvg from '../../../assets/svg/logo.svg';
import PermissionItem from './PermissionItem';
import {PrimaryButton} from '../../components/Button';
import React from 'react';
import styled from 'styled-components/native';

const {width, height} = Dimensions.get('screen');
const VIEW_HEIGHT = 560;
const LOGO_WIDTH = 110;

const Container = styled.View`
  position: absolute;
  top: ${(height - VIEW_HEIGHT) / 2}px;
  left: ${(props: any) => props.theme.size.standardPadding}px;
  width: ${(props: any) => width - props.theme.size.standardPadding * 2}px;
`;

const ContentContainer = styled.View`
  padding: 65px 25px 40px 25px;
  background: ${(props: any) => props.theme.colors.background};
  align-items: center;
`;

const NoticeText = styled.Text`
  margin: 12px 0 18px 0;
  font-size: ${(props: any) => props.theme.fonts.small}px;
  color: ${(props: any) => props.theme.colors.black[1]};
  text-align: center;
  line-height: 20px;
`;

const TitleWrapper = styled.View`
  width: 100%;
  padding: ${(props: any) => props.theme.size.padding}px 0;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${(props: any) => props.theme.colors.primaryLight};
`;

const TitleText = styled.Text`
  margin-left: ${(props: any) => props.theme.size.standardPadding}px;
  font-size: ${(props: any) => props.theme.fonts.large}px;
  color: #16284c;
`;

const ButtonSection = styled.View`
  flex: 1;
  padding: 13px 40px 24px;
  background: ${(props: any) => props.theme.colors.grey[1]};
`;

const ExplainText = styled.Text`
  margin-bottom: 16px;
  font-size: ${(props: any) => props.theme.fonts.mini}px;
  color: ${(props: any) => props.theme.colors.grey[4]};
  line-height: 17px;
`;

interface Props {
  btnPress: (event: GestureResponderEvent) => void;
}

function PermissionView({btnPress}: Props): JSX.Element {
  return (
    <Container>
      <ContentContainer>
        <LogoSvg width={LOGO_WIDTH} />
        <NoticeText>{I18n.t('Permission.notice')}</NoticeText>
        <TitleWrapper>
          <TitleText>{I18n.t('Permission.optional_permission')}</TitleText>
        </TitleWrapper>
        <PermissionItem
          title={I18n.t('Permission.photo')}
          explain={I18n.t('Permission.explain.photo')}
        />
        <PermissionItem
          title={I18n.t('Permission.camera')}
          explain={I18n.t('Permission.explain.camera')}
        />
        <PermissionItem
          title={I18n.t('Permission.alarm')}
          explain={I18n.t('Permission.explain.alarm')}
        />
      </ContentContainer>
      <ButtonSection>
        <ExplainText>{I18n.t('Permission.bottom_explain')}</ExplainText>
        <PrimaryButton title={I18n.t('ok')} onPress={btnPress} />
      </ButtonSection>
    </Container>
  );
}

export default PermissionView;
