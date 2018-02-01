import React from 'react';
import { connect } from 'react-redux';

class BookDetail extends React.Component {
  render() {
    if (!this.props.activeBook) {
      return <div>Select a book to get started...</div>
    }
    return (
      <div>
        <h1>The Book is:</h1>
        <h3>{this.props.activeBook.title}</h3>
        <p>Has {this.props.activeBook.pages} pages</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeBook: state.activeBook,
  };
}

export default connect(mapStateToProps)(BookDetail);