import {INNER_MARGIN, MEDIUM, STANDARD} from '../../constants/size';
import {BLACK_1} from '../../constants/color';
import {Dimensions} from 'react-native';
import React from 'react';
import TitleItem from './TitleItem';
import styled from 'styled-components/native';

const {width} = Dimensions.get('screen');
const INFO_WIDTH: number = (width - (STANDARD * 2 + INNER_MARGIN * 2)) * 0.75;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
`;

const TitleView = styled.View`
  flex: 1;
`;

const InfoView = styled.View`
  width: ${INFO_WIDTH}px;
`;

const InfoText = styled.Text`
  width: ${INFO_WIDTH}px;
  text-align: right;
  font-size: ${MEDIUM}px;
  color: ${BLACK_1};
`;

const InfoSubText = styled(InfoText)`
  margin-top: 4px;
`;

interface Props {
  titleText: string;
  infoText: string;
  infoSubText?: string;
}

function TitleInfoItem({titleText, infoText, infoSubText}: Props): JSX.Element {
  return (
    <Wrapper>
      <TitleView>
        <TitleItem
          style={{paddingBottom: 0}}
          mainText={titleText}
          mainColor={'gray'}
        />
      </TitleView>
      <InfoView>
        <InfoText>{infoText}</InfoText>
        {!!infoSubText && <InfoSubText>{infoSubText}</InfoSubText>}
      </InfoView>
    </Wrapper>
  );
}

export default TitleInfoItem;
