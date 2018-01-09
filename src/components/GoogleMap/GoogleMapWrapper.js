import React from 'react';
import { withGoogleMap, GoogleMap, withScriptjs } from 'react-google-maps';
import { connect } from 'react-redux';
import GoogleMarkerWrapper from './GoogleMarkerWrapper'

import { breweryBeers, updateJumbo } from '../../actions/displayActions';


export const GoogleMapWrapper = withScriptjs(withGoogleMap((props) => {
	const getMarkerBrewery = breweryId => {
		props.dispatch(updateJumbo('beerCard'))
		return props.dispatch(breweryBeers(breweryId))
	}

	const renderMarkers = () => {
		return props.breweryData.map((brewery, index) => {

			return <GoogleMarkerWrapper brewery={brewery} key={index} getMarkerBrewery={getMarkerBrewery} />
		})
	}

    return(
        <GoogleMap
          defaultZoom={ 13 }
          center={{ lat: props.lat, lng: props.lng }}
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