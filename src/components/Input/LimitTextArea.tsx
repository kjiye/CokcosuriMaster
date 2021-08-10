import {BLACK_1, GRAY_1, GRAY_5} from '../../constants/color';
import {INNER_MARGIN, MEDIUM, MINI, TINY} from '../../constants/size';
import React from 'react';
import styled from 'styled-components/native';

const ContentInput = styled.TextInput`
  padding: ${INNER_MARGIN}px;
  height: 235px;
  background: ${GRAY_1};
  font-size: ${MEDIUM}px;
  color: ${BLACK_1};
`;

const LimitCountText = styled.Text`
  margin: ${MINI}px 0;
  text-align: right;
  font-size: ${TINY}px;
  color: ${BLACK_1};
`;

interface Props {
  placeholder: string;
  limit: number;
  currentCount: number;
}

function LimitTextArea({placeholder, limit, currentCount}: Props): JSX.Element {
  return (
    <>
      <ContentInput
        placeholder={placeholder}
        placeholderTextColor={GRAY_5}
        textAlignVertical={'top'}
        multiline={true}
        numberOfLines={10}
        maxLength={300}
        onChangeText={() => {
          console.log('aa');
        }}></ContentInput>
      <LimitCountText>
        {currentCount} / {limit}
      </LimitCountText>
    </>
  );
}

export default LimitTextArea;
