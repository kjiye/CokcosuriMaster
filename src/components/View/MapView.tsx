import React from 'react';
import styled from 'styled-components/native';

const MAP_HEIGHT = 330;

// 추후 NaverMapView 상속
const Wrapper = styled.View`
  height: ${MAP_HEIGHT}px;
  background: yellow;
`;

// 임시 레이아웃용 view
const SampleView = styled.Image`
  width: 100%;
  height: ${MAP_HEIGHT}px;
`;

function MapView(): JSX.Element {
  return (
    <SampleView
      resizeMode={'cover'}
      source={require('../../../assets/image/map_sample.png')}
    />
  );
}

export default MapView;
