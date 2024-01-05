const StockApi = async (query, page) => {
    try {
        const res = await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_AUTH_KEY}&q=${query}&page=${page}&per_page=21&safesearch=true`);
        const data = await res.json();
        // console.log(query, page, data);
        return data;
    } catch (err) {
        console.log(err);
    }
}

export default StockApi