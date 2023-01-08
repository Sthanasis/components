import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { IBaseProps } from 'src/types/props';
import { ThemeVariantType } from 'src/types/types';
import TextField from '../TextField';
import { TextfieldVariant } from '../TextField/TextField';

export interface ISearchProps extends IBaseProps {
  searchValue?: string;
  onSearch: (v: string) => void;
  placeholder?: string;
  variant?: TextfieldVariant;
  color?: ThemeVariantType;
}

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
