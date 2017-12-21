
export const UPDATE_COORDINATES = 'UPDATE_COORDINATES';
export const updateCoordinates = (lat, lng) => ({
	type: UPDATE_COORDINATES,
	lat,
	lng
});

export const getCoordinates = city => dispatch => {
	const geocoder = new window.google.maps.Geocoder();
	geocoder.geocode( {address: city}, (results, status) => {
		 const lat = results[0].geometry.location.lat()
		 const lng = results[0].geometry.location.lng()
		 dispatch(updateCoordinates(lat, lng))
	})
}
