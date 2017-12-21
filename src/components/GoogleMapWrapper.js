import React from 'react';
import { withGoogleMap, GoogleMap, Marker, withScriptjs } from 'react-google-maps';

import { connect } from 'react-redux';

export const GoogleMapWrapper = withScriptjs(withGoogleMap((props) => {


	const renderMarkers = () => {
		return props.breweryData.map((brewery, index) => {
			return <Marker key={index} position={{ lat:brewery.latitude, lng:brewery.longitude }} />
		})
	}

    return(
        <GoogleMap
          defaultZoom={13 }
          defaultCenter={{ lat: props.lat, lng: props.lng }}
        >
          {props.breweryData ? renderMarkers() : '' }
          
        </GoogleMap>
    )
}))

const mapStateToProps = state => ({
	breweryData: state.display.breweryData,
	lat: state.map.lat,
	lng: state.map.lng
})

export default connect(mapStateToProps)(GoogleMapWrapper)