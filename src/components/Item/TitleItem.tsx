import {StyleProp, ViewProps, ViewStyle} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  padding-bottom: ${(props: any) => props.theme.size.innerMargin}px;
`;

const MainText = styled.Text<{mainColor?: string}>`
  font-size: ${(props: any) => props.theme.fonts.large}px;
  font-weight: bold;
  ${({mainColor, theme}: any) => `
  color : ${
    !!mainColor && mainColor === 'grey'
      ? theme.colors.grey[6]
      : theme.colors.black[1]
  }`}
`;

const FrontText = styled(MainText)``;

const Description = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  color: ${(props: any) => props.theme.colors.grey[5]};
`;

interface Props {
  style?: StyleProp<ViewStyle>;
  mainText?: string;
  mainColor?: 'grey';
  desc?: string;
  frontText?: string;
  frontColor?: string;
}

function TitleItem({
  style,
  mainText,
  mainColor,
  desc,
  frontText,
  frontColor,
}: Props): JSX.Element {
  return (
    <Wrapper style={style as StyleProp<ViewProps>}>
      <MainText mainColor={mainColor}>
        {!!frontText && (
          <FrontText style={{color: frontColor}}>{frontText}</FrontText>
        )}
        {!!mainText && mainText}
        {!!desc && <Description>({desc})</Description>}
      </MainText>
    </Wrapper>
  );
}
export default TitleItem;
