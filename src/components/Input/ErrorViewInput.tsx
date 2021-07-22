import {ACCENT_MAIN, ERROR_DARK} from '../../constants/color';
import BasicInput from './BasicInput';
import React from 'react';
import {TINY} from '../../constants/size';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  height: 60px;
`;

const Message = styled.Text<{regexResult?: boolean}>`
  font-size: ${TINY}px;
  ${({regexResult}) => `color: ${regexResult ? ACCENT_MAIN : ERROR_DARK}`}
`;

interface Props {
  regexResult?: boolean;
  message?: string;
}

function ErrorViewInput({regexResult, message}: Props): JSX.Element {
  return (
    <Wrapper>
      <BasicInput placeholder={'ErrorViewInput TEST'} />
      {!!message && <Message regexResult={regexResult}>{message}</Message>}
    </Wrapper>
  );
}

export default ErrorViewInput;
