import {BLACK_1, GRAY_5, GRAY_6} from '../../constants/color';
import {INNER_MARGIN, LARGE, MEDIUM} from '../../constants/size';
import {StyleProp, ViewProps, ViewStyle} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  padding-bottom: ${INNER_MARGIN}px;
`;

const MainText = styled.Text`
  font-size: ${LARGE}px;
  font-weight: 500;
  color: ${BLACK_1};
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
      <MainText style={{color: !!mainColor && mainColor === 'gray' && GRAY_6}}>
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
