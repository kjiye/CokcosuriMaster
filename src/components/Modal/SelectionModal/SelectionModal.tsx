import {Dimensions, GestureResponderEvent} from 'react-native';
import ModalItem from './ModalItem';
import React from 'react';
import styled from 'styled-components/native';

const {height} = Dimensions.get('screen');

const VIEW_RADIUS = 38;

const Container = styled.View`
  flex: 1;
  position: relative;
`;

const BackDimmer = styled.TouchableOpacity`
  flex: 1;
  background: ${(props: any) => props.theme.colors.grey[6]};
  opacity: 0.5;
`;

const ModalView = styled.View`
  position: absolute;
  bottom: 0;
  padding: 0 ${(props: any) => props.theme.size.standardPadding}px;
  width: 100%;
  height: ${height * 0.55}px;
  background: ${(props: any) => props.theme.colors.grey[0]};
  border-top-left-radius: ${VIEW_RADIUS}px;
  border-top-right-radius: ${VIEW_RADIUS}px;
`;

const Title = styled.Text`
  margin: ${(props: any) => props.theme.fonts.large}px;
  font-size: ${(props: any) => props.theme.fonts.big}px;
  font-weight: bold;
  text-align: center;
`;

interface Props {
  title: string;
  typeList: any[];
  close: (event: GestureResponderEvent) => void;
}

function SelectionModal({title, typeList, close}: Props): JSX.Element {
  return (
    <Container>
      <BackDimmer onPress={close} />
      <ModalView>
        <Title>{title}</Title>
        {typeList.map((v, i) => {
          return <ModalItem key={i.toString()} name={v.name} />;
        })}
      </ModalView>
    </Container>
  );
}

export default SelectionModal;
