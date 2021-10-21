import React from 'react';
import {CategoriesContainer} from 'styled';

//import APIcall from '../../utils/APIcall';
//import APICallHandler from 'utils/APICallHandler';
import CategoriesElement from './CategoriesElement';

import CategoriesMock from 'mocks/en-us/product-categories.json';

const CategoriesCarousel = () => {
    const [FetchedData, setFetchedData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    //const URL = 'https://raw.githubusercontent.com/Herkom/wa-react-2021-q4-capstone-project/feat/deliverable1/mocks/en-us/product-categories.json';


    /* React.useEffect(() => {
        setIsLoading(true);
        
        APIcall(URL)
        .then(response => APICallHandler(setError, setFetchedData, setIsLoading, response)) 

    },[]); */

    React.useEffect(() => {
        setIsLoading(true);
        
        setFetchedData(CategoriesMock.results);
        setError(null);
        setIsLoading(false);
    },[]);
    
    return(
        <>
            {   
                isLoading ? 
                    ('Here should be a skeleton')
                : error ?
                    ('Here should be an apologize and a refresh page button')
                : FetchedData ?
                    <CategoriesContainer>
                        {FetchedData.map( (item, index) => (
                            <li key={item.id} id={item.id}>
                                <CategoriesElement index={index}  {...item} />
                            </li>
                        ))}
                    </CategoriesContainer>
                : null
            }
        </>
    );
};

export default CategoriesCarousel
