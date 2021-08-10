import {INNER_MARGIN, LARGE, MEDIUM} from '../../constants/size';
import {StyleProp, ViewProps, ViewStyle} from 'react-native';
import {AppTheme} from '../../themes/theme';
import {GRAY_5} from '../../constants/color';
import React from 'react';
import styled from 'styled-components/native';

const {colors}: any = AppTheme;

const Wrapper = styled.View`
  padding-bottom: ${INNER_MARGIN}px;
`;

const MainText = styled.Text<{mainColor?: string}>`
  font-size: ${LARGE}px;
  font-weight: bold;
  ${({mainColor}) => `
  color : ${
    !!mainColor && mainColor === 'gray' ? colors.grey[6] : colors.black[1]
  }`}
`;

const FrontText = styled(MainText)``;

const Description = styled.Text`
  font-size: ${MEDIUM}px;
  color: ${GRAY_5};
`;

interface Props {
  style?: StyleProp<ViewStyle>;
  mainText?: string;
  mainColor?: 'gray';
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
      {/* <MainText style={{color: !!mainColor && mainColor === 'gray' && GRAY_6}}> */}
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
