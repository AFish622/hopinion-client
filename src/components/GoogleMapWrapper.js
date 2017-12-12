import React from 'react';
import { withGoogleMap, GoogleMap, Marker, withScriptjs } from 'react-google-maps';

export const GoogleMapWrapper = withScriptjs(withGoogleMap((props) => {

    return(
        <GoogleMap
          defaultZoom={13 }
          defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
        >
          {props.isMarkerShown && <Marker position={{ lat: 37.7636, lng: -122.400542 }} />}
        </GoogleMap>
    )
}))