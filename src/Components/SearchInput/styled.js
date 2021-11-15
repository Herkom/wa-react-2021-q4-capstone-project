import styled from 'styled-components'

import searchIcon from 'assets/svgs/search.svg'

export const SearchInputForm = styled.form`
    align-items: center;
    border: 1px solid #ccc;
    display: flex;

    input{
        background: transparent none repeat scroll 0 0;
        border: medium none;
        color: #666666;
        height: 20px;
        outline: medium none;
        padding: 9px 50px 9px 10px;

        @media (max-width: 600px){
            height: 30px;
            width: 80%;
            margin: 1rem 0;
        }
    }

    button{
        background: url(${searchIcon}) no-repeat;
        background-size: 1rem;
        border: none;
        cursor: pointer;
        height: 1rem;
        margin-right: 10px;
        width: 1rem;
    }

`
