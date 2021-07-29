import React from 'react';
import styled from 'styled-components/native';

const MAP_HEIGHT = 330;

// 추후 NaverMapView 상속
const Wrapper = styled.View`
  height: ${MAP_HEIGHT}px;
  background: yellow;
`;

function MapView(): JSX.Element {
  return <Wrapper />;
}

export default MapView;
