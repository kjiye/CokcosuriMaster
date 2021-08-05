import {ACCENT_MAIN, ERROR_DARK} from '../../constants/color';
import {StyleProp, ViewProps, ViewStyle} from 'react-native';
import BasicInput from './BasicInput';
import React from 'react';
import {TINY} from '../../constants/size';
import styled from 'styled-components/native';

const DEFAULT_HEIGHT = 67;
const SHORT_HEIGHT = 57;

const Wrapper = styled.View<{isShort: boolean}>`
  width: 100%;
  ${({isShort}) => `
    height: ${isShort ? SHORT_HEIGHT : DEFAULT_HEIGHT}px
  `}
`;

const Message = styled.Text<{regexResult?: boolean}>`
  font-size: ${TINY}px;
  ${({regexResult}) => `color: ${regexResult ? ACCENT_MAIN : ERROR_DARK}`}
`;

interface Props {
  style?: StyleProp<ViewStyle>;
  isShort?: boolean;
  placeholder: string;
  secure?: boolean;
  regexResult?: boolean;
  message?: string;
}

function ErrorViewInput({
  style,
  isShort = false,
  placeholder,
  secure = false,
  regexResult,
  message,
}: Props): JSX.Element {
  return (
    <Wrapper style={style as StyleProp<ViewProps>} isShort={isShort}>
      <BasicInput
        style={
          regexResult === false && {borderWidth: 1, borderColor: ERROR_DARK}
        }
        placeholder={placeholder}
        secure={secure}
        isShort={isShort}
      />
      {!!message && <Message regexResult={regexResult}>{message}</Message>}
    </Wrapper>
  );
}

export default ErrorViewInput;
