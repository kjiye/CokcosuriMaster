import {
  GestureResponderEvent,
  StyleProp,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {CardView} from '../../../components/View';
import React from 'react';
import RightArrowSvg from '../../../../assets/svg/ic_right_arrow.svg';
import styled from 'styled-components/native';

const MESSAGE_LINE_HEIGHT = 20;

const ButtonWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TitleText = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.large}px;
  font-weight: bold;
  color: ${(props: any) => props.theme.colors.black[1]};
`;

const PointTitleText = styled(TitleText)<{color?: string}>`
  color: ${(props: any) =>
    props.color ? props.color : props.theme.colors.primaryDark};
`;

const Message = styled.Text`
  margin-top: 4px;
  font-size: ${(props: any) => props.theme.fonts.small}px;
  color: ${(props: any) => props.theme.colors.black[1]};
  line-height: ${MESSAGE_LINE_HEIGHT}px;
`;

interface Props {
  style?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
  pointedText: string;
  sideText: string;
  desc: string;
  hasDescTitle?: boolean;
}

function ArrowCardView({
  style,
  onPress,
  pointedText,
  sideText,
  desc,
}: Props): JSX.Element {
  return (
    <CardView style={style as StyleProp<ViewProps>}>
      <ButtonWrapper onPress={onPress}>
        <View>
          <TitleText>
            <PointTitleText>{pointedText}</PointTitleText>
            {sideText}
          </TitleText>
          <Message>{desc}</Message>
        </View>
        <RightArrowSvg />
      </ButtonWrapper>
    </CardView>
  );
}

export default ArrowCardView;
