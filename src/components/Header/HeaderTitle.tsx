import {Dimensions} from 'react-native';
import HeaderLogoSvg from '../../../assets/svg/header_logo.svg';
import React from 'react';
import styled from 'styled-components/native';

const {width} = Dimensions.get('screen');

const HeaderTitleView = styled.View`
  width: ${width / 2}px;
  align-items: center;
  justify-content: center;
`;

const HeaderTitleText = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.big}px;
  font-weight: bold;
  color: ${(props: any) => props.theme.colors.black[1]};
`;

interface Props {
  title?: string;
  isTitleLogo?: boolean;
}

function HeaderTitle({title = '', isTitleLogo = false}: Props): JSX.Element {
  return (
    <HeaderTitleView>
      {isTitleLogo ? (
        <HeaderLogoSvg />
      ) : (
        <HeaderTitleText numberOfLines={1}>{title}</HeaderTitleText>
      )}
    </HeaderTitleView>
  );
}

export default HeaderTitle;
