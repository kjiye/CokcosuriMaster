import {DrawerActions, useNavigation} from '@react-navigation/native';
import styled, {css} from 'styled-components/native';
import BackSvg from '../../../assets/svg/ic_back.svg';
import {GestureResponderEvent} from 'react-native';
import HamburgerSvg from '../../../assets/svg/ic_hamburger.svg';
import React from 'react';

const HEADER_SIDE_PADDING = 20;
const BACK_LEFT_PADDING = 5;
const TEXT_WEIGHT = 500;

const BasicButton = styled.TouchableOpacity`
  display: flex;
  padding: 0 ${HEADER_SIDE_PADDING}px;
  justify-content: center;
  height: 100%;
`;

const BackButton = styled(BasicButton)`
  padding-left: ${BACK_LEFT_PADDING}px;
`;

const HamburgerButton = styled(BasicButton)`
  padding: 0 ${HEADER_SIDE_PADDING}px;
`;

const ButtonText = styled.Text<{buttonTextColor?: string}>`
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  font-weight: ${TEXT_WEIGHT};
  ${({buttonTextColor}) =>
    !!buttonTextColor &&
    css`
      color: ${buttonTextColor};
    `};
`;

interface Props {
  isBack?: boolean;
  buttonType?: 'drawer' | 'text';
  buttonText?: string;
  buttonTextColor?: string;
  buttonPress?: (event: GestureResponderEvent) => void;
}

function HeaderButton({
  isBack = true,
  buttonType,
  buttonText,
  buttonTextColor,
  buttonPress,
}: Props): JSX.Element {
  const navigation = useNavigation();
  return (
    <>
      {isBack ? (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}>
          <BackSvg />
        </BackButton>
      ) : buttonType ? (
        buttonType === 'drawer' ? (
          <HamburgerButton
            onPress={() => {
              navigation.dispatch(DrawerActions.toggleDrawer());
            }}>
            <HamburgerSvg />
          </HamburgerButton>
        ) : (
          <BasicButton onPress={buttonPress}>
            <ButtonText buttonTextColor={buttonTextColor}>
              {buttonText}
            </ButtonText>
          </BasicButton>
        )
      ) : (
        <></>
      )}
    </>
  );
}

export default HeaderButton;
