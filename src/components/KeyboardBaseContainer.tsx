import {Platform, SafeAreaView, ViewProps} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import {useHeaderHeight} from '@react-navigation/stack';

const KeyboardAvoidingContainer = styled.KeyboardAvoidingView`
  flex: 1;
`;

const Container = styled.SafeAreaView`
  flex: 1;
`;

const ButtonContainer = styled.View`
  position: absolute;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

interface Props {
  children?: any;
  style?: ViewProps;
  button?: JSX.Element;
}

/**
 * 키보드 toggle이 발생하는 presenter에서 container 컴포넌트로 사용
 */
function KeyboardBaseContainer({children, style, button}: Props): JSX.Element {
  const headerHeight = useHeaderHeight();
  const [bottomSpace, setBottomSpace] = useState<number>(0);
  useEffect(() => {
    let space = getBottomSpace();
    if (space <= 0) {
      space = 34;
    }
    setBottomSpace(space);
  }, []);
  return Platform.OS === 'ios' ? (
    <KeyboardAvoidingContainer
      style={style}
      behavior={'padding'}
      keyboardVerticalOffset={headerHeight}>
      <Container>{children}</Container>
      {button &&
        useMemo(() => {
          return (
            <SafeAreaView>
              <ButtonContainer style={{bottom: bottomSpace}}>
                {button}
              </ButtonContainer>
            </SafeAreaView>
          );
        }, [button, bottomSpace])}
    </KeyboardAvoidingContainer>
  ) : (
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

export default KeyboardBaseContainer;
