const APIcall = async (url='', dataSetter, errorSetter, loaderSetter) => {
    try{
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        const data = await response.json();

        data.results.length > 0 ?
            dataSetter(data.results)
        :   console.log('There are no results', data);

        console.log(data.results);

    } catch (error){
        errorSetter(error)
    } finally{
        loaderSetter(false)
    }
}

export default APIcall