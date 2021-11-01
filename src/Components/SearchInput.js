import React, { useState } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";

import searchIcon from 'assets/svgs/search.svg';

const SearchInputForm = styled.form`
    border: 1px solid #ccc;
    display: flex;
    align-items: center;

    input{
        background: transparent none repeat scroll 0 0;
        padding: 9px 50px 9px 10px;
        border: medium none;
        height: 20px;
        color: #666666;
        outline: medium none;

        @media (max-width: 600px){
            height: 30px;
            width: 80%;
            margin: 1rem 0;
        }
    }

    button{
        background: url(${searchIcon}) no-repeat;
        background-size: 1rem;
        width: 1rem;
        height: 1rem;
        border: none;
        margin-right: 10px;
        cursor: pointer;
    }

`;

const SearchInput = withRouter((props) => {
    const [searchInputValue, setSearchInputValue] = useState('')

    const { history } = props;

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
});

export default SearchInput
