import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }; // internal state
    
    // Very necessary, see Note 1
    // this === SearchBar instance here ----------v
    this.onInputChange = this.onInputChange.bind(this); 
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });

    // NOTE 1:
    // this.setState({ term: event.target.value });
    // ^ doesn't work because 'this' is different if onChange={this.onInputChange}
    //   we need to pass an anonymous function instead to onChange!!
    //   or 'bind' the context of onInputChange, see comment on line 12
  }

  onFormSubmit(event) {
    event.preventDefault();

    // go get weather data and reset search field
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    // Turning this into a controlled field...
    
    // NOTE 2: forms are an HTML thing.

    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Five-day forecast for favourite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);