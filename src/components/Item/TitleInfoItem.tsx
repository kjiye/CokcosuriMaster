import {AppTheme} from '../../themes/theme';
import {Dimensions} from 'react-native';
import React from 'react';
import TitleItem from './TitleItem';
import styled from 'styled-components/native';

const {size}: any = AppTheme;
const {width} = Dimensions.get('screen');
const INFO_WIDTH: number =
  (width - (size.standardPadding * 2 + size.innerMargin * 2)) * 0.75;

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
  font-size: ${(props: any) => props.theme.fonts.normal}px;
  color: ${(props: any) => props.theme.colors.black[1]};
`;

const InfoSubText = styled(InfoText)`
  margin-top: 4px;
`;

interface Props {
  titleText: string;
  infoText: string;
  infoSubText?: string | null;
}

function TitleInfoItem({titleText, infoText, infoSubText}: Props): JSX.Element {
  return (
    <Wrapper>
      <TitleView>
        <TitleItem
          style={{paddingBottom: 0}}
          mainText={titleText}
          mainColor={'grey'}
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
