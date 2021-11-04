import React from 'react';
import {WorkState} from '../../../__generated__/globalTypes';
import styled from 'styled-components/native';

const DOT_SIZE = 8;

const StatusDot = styled.View<{status: string}>`
  margin: 0 2px;
  width: ${DOT_SIZE}px;
  height: ${DOT_SIZE}px;
  border-radius: ${DOT_SIZE / 2}px;
  ${(props: any) => `
  background-color: ${
    props.status === WorkState.RESERVE
      ? props.theme.colors.secondary
      : props.status === WorkState.DONE
      ? props.theme.colors.primary
      : props.theme.colors.errorDark
  };
`}
`;

interface Props {
  status: WorkState;
}

function StatusDotItem({status}: Props): JSX.Element {
  return <StatusDot status={status} />;
}

export default StatusDotItem;
