import {MenuAccordianItem, MenuItem} from '../../components/Item';
import React from 'react';
import styled from 'styled-components/native';
import {GestureResponderEvent} from 'react-native';

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
  goUpdateUserInfo: (event: GestureResponderEvent) => void;
  goUpdatePassword: (event: GestureResponderEvent) => void;
  goUpdatePhone: (event: GestureResponderEvent) => void;
  goQnA: (event: GestureResponderEvent) => void;
  goAlarm: (event: GestureResponderEvent) => void;
  goNotice: (event: GestureResponderEvent) => void;
  goGuide: (event: GestureResponderEvent) => void;
  goTerms: (event: GestureResponderEvent) => void;
}

function DrawerPresenter({
  goUpdateUserInfo,
  goUpdatePassword,
  goUpdatePhone,
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
            <ProfileText>홍길동</ProfileText>
          </ProfileView>
          <ScrollContainer>
            <AccordianMenu
              name={'회원정보 수정'}
              subMenuList={[
                {
                  name: '개인정보 변경',
                  onPress: goUpdateUserInfo,
                },
                {name: '비밀번호 변경', onPress: goUpdatePassword},
                {name: '전화번호 변경', onPress: goUpdatePhone},
              ]}
            />
            <DividedMenu name={'1:1 문의하기'} onPress={goQnA} />
            <MenuItem name={'알림'} onPress={goAlarm} />
            <MenuItem name={'공지사항'} onPress={goNotice} />
            <MenuItem name={'APP 사용법'} onPress={goGuide} />
            <MenuItem name={'이용약관'} onPress={goTerms} />
          </ScrollContainer>
          <BottomInfoView>
            <BottomInfoText>고객센터</BottomInfoText>
            <BottomInfoText>1899-1692</BottomInfoText>
          </BottomInfoView>
        </ContentContainer>
      </SafeAreaContainer>
    </Container>
  );
}

export default DrawerPresenter;
