import React from 'react';
import { connect } from 'react-redux';
import { searchQuery } from './actions.jsx';
import { SearchBarPresentation } from './search_bar_presentation.jsx';

/**
 *
 * MVP II Behavior:
 * User clicks on search bar. This search bar is only for worksheets.
 *   Before they have typed they should see no results.
 * Each letter typed sends off a query. All results of the
 *   query are shown in the dropdown.
 * Selecting one of the results takes the user to the appropriate page.
 *
 */

const mapStateToProps = (state) => {
  let results, isLoading;
  if (state.search.currentQuery !== "") {
    let query = state.search.queries[state.search.currentQuery];
    if (query.isFetching) {
      isLoading = true;
      results = [];
    } else {
      isLoading = false;
      // TODO refactor, should really do this parsing in the reducers / action creators
      results = query.results.data.map((item) => {
        return {
          id: item.attributes.uuid,
          title: item.attributes.name
        };
      });
    }
  } else {
    results = [];
    isLoading = false;
  }

  return {
    results: results,
    isLoading: isLoading
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onInputChange: (inputValue) => {
      dispatch(searchQuery(inputValue));
    }
  };
};

const SearchBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBarPresentation);

export {
  SearchBar
};