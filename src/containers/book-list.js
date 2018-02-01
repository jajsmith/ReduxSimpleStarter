import React from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends React.Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title}
          className="list-group-item"
          onClick={() => this.props.selectBook(book)}>
          {book.title}
        </li>
      )
    })
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// This function is a key part of using react-redux.connect
function mapStateToProps(state) {
  // Whatever is returned from here shows up as props inside BookList
  return {
    books: state.books,
  }
}

// Anything returned here will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, we should pass the return value to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
// this makes it ^^^ a 'container' instead of just a component
// Now it knows about dispatch method, selectBook. Make it available as prop