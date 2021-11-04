import {MenuAccordianItem, MenuItem} from '../../components/Item';
import {GestureResponderEvent} from 'react-native';
import I18n from '../../utils/i18nHelpers';
import LoadingView from '../../components/View/LoadingView';
import React from 'react';
import styled from 'styled-components/native';

const TOP_PADDING = 80;

const Container = styled.View`
  flex: 1;
  background: ${(props: any) => props.theme.colors.background};
`;

const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
`;

const ContentContainer = styled.View`
  flex: 1;
  padding: ${TOP_PADDING}px
    ${(props: any) => props.theme.size.standardPadding}px 0;
`;

const ScrollContainer = styled.ScrollView`
  height: 100%;
`;

const ProfileView = styled.View`
  min-height: 35px;
  padding-bottom: 8px;
  border-bottom-width: 1px;
  border-color: ${(props: any) => props.theme.colors.primary};
`;

const ProfileText = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.big}px;
  font-weight: bold;
  color: ${(props: any) => props.theme.colors.black[1]};
`;

const AccordianMenu = styled(MenuAccordianItem)`
  margin-top: 4px;
`;

const DividedMenu = styled(MenuItem)`
  padding-bottom: 25px;
  margin-bottom: 10px;
  border-bottom-width: 1px;
  border-color: ${(props: any) => props.theme.colors.grey[3]};
`;

const BottomInfoView = styled.View`
  position: absolute;
  bottom: ${(props: any) => props.theme.size.standardPadding}px;
  left: ${(props: any) => props.theme.size.standardPadding}px;
`;

const BottomInfoText = styled.Text`
  margin-top: 4px;
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  color: ${(props: any) => props.theme.colors.grey[6]};
`;

interface Props {
  isLoading: boolean;
  userName: string;
  goUpdateUserInfo: (event: GestureResponderEvent) => void;
  goUpdatePassword: (event: GestureResponderEvent) => void;
  goUpdatePhone: (event: GestureResponderEvent) => void;
  goCalendar: (event: GestureResponderEvent) => void;
  goQnA: (event: GestureResponderEvent) => void;
  goAlarm: (event: GestureResponderEvent) => void;
  goNotice: (event: GestureResponderEvent) => void;
  goGuide: (event: GestureResponderEvent) => void;
  goTerms: (event: GestureResponderEvent) => void;
}

function DrawerPresenter({
  isLoading,
  userName,
  goUpdateUserInfo,
  goUpdatePassword,
  goUpdatePhone,
  goCalendar,
  goQnA,
  goAlarm,
  goNotice,
  goGuide,
  goTerms,
}: Props): JSX.Element {
  return (
    <Container>
      <SafeAreaContainer>
        <ContentContainer>
          <ProfileView>
            {isLoading ? (
              <LoadingView size={'small'} />
            ) : (
              <ProfileText>{userName}</ProfileText>
            )}
          </ProfileView>
          <ScrollContainer>
            <AccordianMenu
              name={I18n.t('Drawer.menu.update_user')}
              subMenuList={[
                {
                  name: I18n.t('Drawer.menu.update_user_info'),
                  onPress: goUpdateUserInfo,
                },
                {
                  name: I18n.t('Drawer.menu.update_password'),
                  onPress: goUpdatePassword,
                },
                {
                  name: I18n.t('Drawer.menu.update_phone'),
                  onPress: goUpdatePhone,
                },
              ]}
            />
            <DividedMenu
              name={I18n.t('Drawer.menu.calendar')}
              onPress={goCalendar}
            />
            <MenuItem name={I18n.t('Drawer.menu.qna')} onPress={goQnA} />
            <MenuItem name={I18n.t('Drawer.menu.alarm')} onPress={goAlarm} />
            <MenuItem name={I18n.t('Drawer.menu.notice')} onPress={goNotice} />
            <MenuItem name={I18n.t('Drawer.menu.guide')} onPress={goGuide} />
            <MenuItem name={I18n.t('Drawer.menu.terms')} onPress={goTerms} />
          </ScrollContainer>
          <BottomInfoView>
            <BottomInfoText>{I18n.t('Drawer.cs_center')}</BottomInfoText>
            <BottomInfoText>{I18n.t('Drawer.cs_number')}</BottomInfoText>
          </BottomInfoView>
        </ContentContainer>
      </SafeAreaContainer>
    </Container>
  );
}

export default DrawerPresenter;
