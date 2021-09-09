import {Platform, SafeAreaView, ViewProps} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import {useHeaderHeight} from '@react-navigation/stack';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const KeyboardAvoidingContainer = styled.KeyboardAvoidingView`
  flex: 1;
  background: ${(props: any) => props.theme.colors.background};
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
      behavior={'padding'}
      keyboardVerticalOffset={headerHeight}>
      <Container style={style}>{children}</Container>
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
