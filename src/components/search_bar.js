import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange(term) {
    this.setState({ term: term });
    this.props.onSearchTermChange(term)
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term} // Controlled component now, so state updates input
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
}
export default SearchBar;