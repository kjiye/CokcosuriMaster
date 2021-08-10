import {StyleProp, ViewProps, ViewStyle} from 'react-native';
import React from 'react';
import RequiredSvg from '../../../../assets/svg/ic_required.svg';
import {TitleItem} from '../../../components/Item';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  flex-direction: row;
`;

interface Props {
  style?: StyleProp<ViewStyle>;
  title: string;
}

function RequiredTitleItem({style, title}: Props): JSX.Element {
  return (
    <Wrapper style={style as StyleProp<ViewProps>}>
      <TitleItem mainText={title} />
      <RequiredSvg />
    </Wrapper>
  );
}

export default RequiredTitleItem;
