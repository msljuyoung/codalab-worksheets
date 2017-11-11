const getCurrentSearchQuery = (state) => {
  return state.search.currentQuery;
};

const getCurrentSearchResults = (state) => {
  const currentSearchQuery = getCurrentSearchQuery(state);
  return {
    worksheetResults: state.search.worksheetQueries[currentSearchQuery],
    bundleResults: state.search.bundleQueries[currentSearchQuery],
  };
};

export {
  getCurrentSearchQuery,
  getCurrentSearchResults,
};