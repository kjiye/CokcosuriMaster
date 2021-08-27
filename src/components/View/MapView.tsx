import NaverMapView, {Marker} from 'react-native-nmap';
import {Coord} from 'react-native-nmap';
import {ImageSourcePropType} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const MARKER_WIDTH = 55;
const MARKER_HEIGHT = 67;

const Wrapper = styled.View<{height: number}>`
  flex: 1;
  height: ${(props: any) => props.height}px;
  background: ${(props: any) => props.theme.colors.grey_background};
`;

const NMapView = styled(NaverMapView)`
  flex: 1;
  height: 100%;
`;

interface Props {
  coords: Coord;
  zoom?: number;
  markerImage: ImageSourcePropType;
  mapViewHeight: number;
  markerPress?: () => void;
}

function MapView({
  coords,
  zoom = 17,
  markerImage,
  mapViewHeight,
  markerPress,
}: Props): JSX.Element {
  return (
      <Wrapper height={mapViewHeight}>
        <NMapView 
          center={{...coords, zoom: zoom}} 
          useTextureView={true}
          // onInitialized={(e:any) => {console.log(e)}}
          >
          <Marker
            coordinate={coords}
            width={MARKER_WIDTH}
            height={MARKER_HEIGHT}
            onClick={() => {
              if (markerPress) markerPress();
            }}
            image={markerImage}
          />
        </NMapView>
    </Wrapper>
  );
}

export default MapView;
