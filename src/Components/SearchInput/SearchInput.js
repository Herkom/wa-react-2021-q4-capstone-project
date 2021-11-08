import React, { useState } from "react";
import { useHistory } from "react-router";

import { SearchInputForm } from './styled'

const SearchInput = () => {
    const [searchInputValue, setSearchInputValue] = useState('')

    let history = useHistory();

    const handleSearch = (event) => {
        
        event.preventDefault();
        const searchWord = searchInputValue;

        console.log(searchWord);

        if (searchWord) {
            history.push(`/search?q=${searchWord}`);
            history.go(0);
        }
    }

    const handleChange = (event) =>{
        setSearchInputValue(event.target.value)
    }

    return(
        <SearchInputForm onSubmit={handleSearch}>
            <input
                type='text'
                placeholder="Catalog search"
                autoComplete="off"
                autoFocus="autofocus"
                value={searchInputValue}
                onChange={handleChange}
            />
            <button type="submit">
            </button>
        </SearchInputForm>
    )
};

export default SearchInput
