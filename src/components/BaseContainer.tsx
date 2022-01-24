import React, {useEffect, useState} from 'react';
import {ViewProps} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import {useMemo} from 'react';

const Container = styled.View`
  flex: 1;
`;

const ButtonContainer = styled.View`
  flex: 1;
  width: 100%;
  position: absolute;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

interface Props {
  children?: any;
  style?: ViewProps;
  button?: JSX.Element;
}

/**
 * presenter에서 container역할의 컴포넌트로 사용
 */
function BaseContainer({children, style, button}: Props): JSX.Element {
  const [bottomSpace, setBottomSpace] = useState<number>(0);
  useEffect(() => {
    let space = getBottomSpace();
    if (space <= 0) {
      space = 34;
    }
    setBottomSpace(space);
  }, []);

  return (
    <>
      <Container style={style}>{children}</Container>
      {button &&
        useMemo(() => {
          return (
            <ButtonContainer style={{bottom: bottomSpace}}>
              {button}
            </ButtonContainer>
          );
        }, [button, bottomSpace])}
    </>
  );
}

export default BaseContainer;
