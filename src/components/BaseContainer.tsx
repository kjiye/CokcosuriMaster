import React, {useEffect, useState} from 'react';
import {ViewProps} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
`;

const ButtonContainer = styled.View`
  position: absolute;
`;

interface Props {
  children?: any;
  style?: ViewProps;
  button?: JSX.Element;
}

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
    <SafeAreaContainer style={style}>
      {children}
      {button && (
        <ButtonContainer style={{bottom: bottomSpace}}>
          {button}
        </ButtonContainer>
      )}
    </SafeAreaContainer>
  );
}

export default BaseContainer;
