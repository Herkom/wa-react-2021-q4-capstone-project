const APIcall = async (url = '') => {
    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error('HTTP error ' + response.status)
        }

        const data = await response.json()
        return data
    } catch (error) {
        return error
    }
}

export default APIcall
