import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { ISearchProps } from 'src/types';
import TextField from '../TextField';

const Search = ({
  searchValue = '',
  onSearch,
  placeholder = 'Search',
  ...props
}: ISearchProps): JSX.Element => {
  const [debounce, setDebounce] = useState<NodeJS.Timeout>();
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (debounce) {
      clearTimeout(debounce);
    }
    const debounceValue = setTimeout(() => {
      onSearch(e.target.value);
    }, 500);
    setDebounce(debounceValue);
  };

  return (
    <TextField
      {...props}
      placeholder={placeholder}
      value={searchValue}
      onChange={handleSearch}
      iconStart={faMagnifyingGlass}
    />
  );
};

export default Search;
