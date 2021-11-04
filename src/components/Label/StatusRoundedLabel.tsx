import {StyleProp, ViewProps, ViewStyle} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const BUTTON_WIDTH = 80;

const Label = styled.View`
  padding: 8px 0;
  width: ${BUTTON_WIDTH}px;
  border-radius: ${(props: any) => props.theme.size.borderRadius}px;
  background: ${(props: any) => props.theme.colors.secondary};
`;

const LabelText = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  color: ${(props: any) => props.theme.colors.grey[0]};
  text-align: center;
`;

interface Props {
  style?: StyleProp<ViewStyle>;
  text: string;
}

function StatusRoundedLabel({style, text}: Props): JSX.Element {
  return (
    <Label style={style as StyleProp<ViewProps>}>
      <LabelText>{text}</LabelText>
    </Label>
  );
}

export default StatusRoundedLabel;
