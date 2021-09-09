import React, {useEffect, useState} from 'react';
import dayjs, {Dayjs} from 'dayjs';
import styled from 'styled-components/native';

const TimerText = styled.Text`
  font-size: ${(props: any) => props.theme.fonts.tiny}px;
  color: ${(props: any) => props.theme.colors.errorDark};
`;

interface Props {
  milisecond: number;
  play?: boolean;
  onStart?: (milisecond: number) => void;
  onStop?: (milisecond: number) => void;
}

function Timer({milisecond, play, onStart, onStop}: Props): JSX.Element {
  const [current, setCurrent] = useState<Dayjs>(dayjs(milisecond));
  const [timer, setTimer] = useState<number>();

  useEffect(() => {
    if (play && !timer && current.unix() > 0) {
      const t: any = setInterval(() => {
        setCurrent(s => s.subtract(1, 's'));
      }, 1000);

      setTimer(t);

      if (onStart) {
        onStart(milisecond);
      }
    }

    if (timer && (!play || current.unix() <= 0)) {
      clearInterval(timer);
      setTimer(undefined);

      if (!play) {
        setCurrent(dayjs(milisecond));
      }

      if (onStop) {
        onStop(milisecond);
      }
    }
  }, [current, milisecond, onStart, onStop, play, timer]);

  useEffect(() => {
    return () => {
      if (timer) {
        clearInterval(timer);
        setTimer(undefined);
      }
    };
  }, [timer]);

  return <TimerText>{current.format('mm:ss')}</TimerText>;
}

export default Timer;
