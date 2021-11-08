import CheckActiveSvg from '../../../../assets/svg/ic_check_active.svg';
import CheckInactiveSvg from '../../../../assets/svg/ic_check_inactive.svg';
import {GestureResponderEvent} from 'react-native';
import I18n from '../../../utils/i18nHelpers';
import React from 'react';
import styled from 'styled-components/native';

const INNER_PADDING = 10;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TextButton = styled.TouchableOpacity`
  padding: ${INNER_PADDING}px 0;
`;

const Text = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  color: ${(props: any) => props.theme.colors.grey[5]};
`;

const CheckButton = styled.TouchableOpacity`
  padding: ${INNER_PADDING}px 0 ${INNER_PADDING}px ${INNER_PADDING}px;
`;

interface Props {
  required?: boolean;
  text: string;
  content?: string;
  checked?: boolean;
  textPress?: (title: string, content: string) => void;
  onPress?: (event: GestureResponderEvent) => void;
}

function TextLineCheckItem({
  required = true,
  text,
  content,
  checked = false,
  textPress,
  onPress,
}: Props): JSX.Element {
  return (
    <Wrapper>
      <TextButton
        onPress={() => {
          if (textPress && content) {
            textPress(text, content);
          }
        }}>
        <Text>
          {required && I18n.t('Terms.required')}
          {text}
        </Text>
      </TextButton>
      <CheckButton onPress={onPress}>
        {checked ? <CheckActiveSvg /> : <CheckInactiveSvg />}
      </CheckButton>
    </Wrapper>
  );
}

export default TextLineCheckItem;
