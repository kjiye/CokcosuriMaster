import {ACCENT_MAIN, ERROR_DARK} from '../../constants/color';
import {StyleProp, ViewProps, ViewStyle} from 'react-native';
import BasicInput from './BasicInput';
import React from 'react';
import {TINY} from '../../constants/size';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  width: 100%;
  height: 60px;
`;

const Message = styled.Text<{regexResult?: boolean}>`
  font-size: ${TINY}px;
  ${({regexResult}) => `color: ${regexResult ? ACCENT_MAIN : ERROR_DARK}`}
`;

interface Props {
  wrapperStyle?: StyleProp<ViewStyle>;
  placeholder: string;
  secure?: boolean;
  regexResult?: boolean;
  message?: string;
}

function ErrorViewInput({
  wrapperStyle,
  placeholder,
  secure = false,
  regexResult,
  message,
}: Props): JSX.Element {
  return (
    <Wrapper style={wrapperStyle as StyleProp<ViewProps>}>
      <BasicInput
        wrapperStyle={
          regexResult === false && {borderWidth: 1, borderColor: ERROR_DARK}
        }
        placeholder={placeholder}
        secure={secure}
      />
      {!!message && <Message regexResult={regexResult}>{message}</Message>}
    </Wrapper>
  );
}

export default ErrorViewInput;
