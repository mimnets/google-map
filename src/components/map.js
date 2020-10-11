import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const location = {
    lat: 23.911002,
    lng: 90.393079
};

const onLoad = marker => {
    console.log('marker: ', marker)
  }

function Map() {
  return (
    <LoadScript
      googleMapsApiKey="get it from Google"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={15}
      >
        <Marker
      onLoad={onLoad}
      position={location}
    />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)