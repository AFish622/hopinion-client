import React from 'react'
import { Marker, InfoWindow } from 'react-google-maps';
import { connect } from 'react-redux';


export class GoogleMarkerWrapper extends React.Component {
	constructor() {
		super()
		this.state = {
			isOpen: false
		}

		this.onToggleOpen = this.onToggleOpen.bind(this);
		this.closeInfoWindow = this.closeInfoWindow.bind(this);

	}

	onToggleOpen(){
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	closeInfoWindow() {
		this.setState({
			isOpen: false
		})
	}

	render() {	
		return (<Marker onClick={() => this.props.getMarkerBrewery(this.props.brewery.brewery.id)} 
					position={{ lat:this.props.brewery.latitude, lng:this.props.brewery.longitude }}
					onMouseOver={this.onToggleOpen}
					onMouseOut={this.closeInfoWindow}
					 >
					}
					}
				 {this.state.isOpen && <InfoWindow onCloseClick={this.onToggleOpen}>
			        <div>{this.props.brewery.brewery.name}</div>
			      </InfoWindow>}

				</Marker>)
	}

}

const mapStateToProps = state => ({
	breweryData: state.display.breweryData,
})

export default connect(mapStateToProps)(GoogleMarkerWrapper)
