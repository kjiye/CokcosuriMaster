import {BIG, LARGE, MEDIUM, STANDARD} from '../../constants/size';
import {GRAY_6, WHITE} from '../../constants/color';
import {Dimensions} from 'react-native';
import ModalItem from './ModalItem';
import React from 'react';
import styled from 'styled-components/native';

const {height} = Dimensions.get('screen');

const Container = styled.View`
  flex: 1;
  position: relative;
`;

const BackDimmer = styled.View`
  flex: 1;
  background: ${GRAY_6};
  opacity: 0.6;
`;

const ModalView = styled.View`
  position: absolute;
  bottom: 0;
  padding: 0 ${STANDARD}px;
  width: 100%;
  height: ${height * 0.55}px;
  background: ${WHITE};
  border-top-left-radius: 38px;
  border-top-right-radius: 38px;
`;

const Title = styled.Text`
  margin: ${LARGE}px;
  font-size: ${BIG}px;
  font-weight: bold;
  text-align: center;
`;

function SelectionModal() {
  return (
    <Container>
      <BackDimmer />
      <ModalView>
        <Title>문의 사유</Title>
        <ModalItem />
      </ModalView>
    </Container>
  );
}

export default SelectionModal;
