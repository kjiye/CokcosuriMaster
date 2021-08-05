import {StyleProp, ViewProps, ViewStyle} from 'react-native';
import React from 'react';
import TextLineCheckItem from './TextLineCheckItem';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  background: ${(props: any) => props.theme.colors.background};
`;

const Divider = styled.View`
  margin: 10px 0;
  border-top-width: 1px;
  border-color: ${(props: any) => props.theme.colors.grey[4]};
`;

interface Props {
  style?: StyleProp<ViewStyle>;
}

function TextLineCheckGroup({style}: Props): JSX.Element {
  return (
    <Wrapper style={style as StyleProp<ViewProps>}>
      <TextLineCheckItem required={false} text={'서비스 전체 동의'} />
      <Divider />
      <TextLineCheckItem text={'개인정보 처리방침'} />
      <TextLineCheckItem text={'개인정보 제 3자 동의'} />
      <TextLineCheckItem text={'개인정보 수집이용 동의'} />
      <TextLineCheckItem text={'COKCOSURI 마스터 이용약관'} />
    </Wrapper>
  );
}

export default TextLineCheckGroup;
