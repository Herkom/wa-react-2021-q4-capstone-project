const APICallHandler = (errorSetter, DataFetcher, LoadSetter, response) => {

    if (response.name === "Error") errorSetter(response);
        
    DataFetcher(response.results);
    LoadSetter(false);
}

export default APICallHandler