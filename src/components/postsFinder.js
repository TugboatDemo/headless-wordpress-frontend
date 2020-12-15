import React, { useState, useMemo } from "react"
import { debounce } from "lodash";

import SearchForm from "./searchForm";
import PostsList from "./postsList";

function PostsFinder() {
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')

  const setDebouncedSearchTermMemoized = useMemo(() => debounce(setDebouncedSearchTerm, 300), []);

  function handleSearchTermChange(newSearchTerm) {
    setSearchTerm(newSearchTerm);
    setDebouncedSearchTermMemoized(newSearchTerm);
  }
  
  return (
    <>
      <SearchForm
        searchTerm={searchTerm}
        handleSearchTermChange={handleSearchTermChange}
      />
      <PostsList searchTerm={debouncedSearchTerm} />
    </>
  );
  // Fire off GraphQL request
  // Display results
}

export default PostsFinder
