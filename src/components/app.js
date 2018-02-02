import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import ForecastList from '../containers/forecast-list';
import ForecastChart from './forecast-chart';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ForecastList />
      </div>
    );
  }
}
