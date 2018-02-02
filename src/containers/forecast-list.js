import React from 'react';
import { connect } from 'react-redux';
import ForecastChart from '../components/forecast-chart';
import ForecastChartD3 from '../components/forecast-chart-d3';
import GoogleMap from '../components/google_map';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class ForecastList extends React.Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weatherInstance => weatherInstance.main.temp);
    const pressures = cityData.list.map(weatherInstance => weatherInstance.main.pressure);
    const humidities = cityData.list.map(weatherInstance => weatherInstance.main.humidity);
    const {lon, lat} = cityData.city.coord; // {a,b} = x      nice ES6 syntax

// // Use D3:
// <td ><ForecastChartD3 data={humidities} size={[180,120]} /></td>
    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><ForecastChart data={temps} color="orange" units="K" /></td>
        <td><ForecastChart data={pressures} color="blue" units="hPa" /></td>
        <td><ForecastChart data={humidities} color="purple" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temp (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }; // === { weather: weather } === { weather: state.weather }
}

export default connect(mapStateToProps)(ForecastList);