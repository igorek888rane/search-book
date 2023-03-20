import axios from "axios";

export const booksApi = async (search: string) => {
    const {data} = await axios.get(`${process.env.REACT_APP_API}?q=${search}&maxResults=30&key=${process.env.REACT_APP_API_KEY}`)
    return data
}