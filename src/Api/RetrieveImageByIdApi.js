const RetrieveImageByIdApi = async (id) => {
    try {
        const res = await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_AUTH_KEY}&id=${id}`);
        const data = await res.json();
        console.log(id, data);
        return data;
    } catch (err) {
        console.log(err);
    }
}

export default RetrieveImageByIdApi