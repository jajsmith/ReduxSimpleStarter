import React from 'react';

class GoogleMap extends React.Component {


  // lifecycle method
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 11,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      },
    });
  }

  render() {
    // can now be referred to as 'this.refs.map'
    // for helping non-react 3rd party libraries
    return <div ref="map" />;
  }
}

export default GoogleMap;