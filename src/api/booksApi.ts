import axios from "axios";
import {sortByType} from "../store/slice/sort/sortType";
import {IBook} from "../store/slice/books/booksType";


export interface IBooksApi {
    search: string
    sortBy: sortByType
}

export interface IData {
    items: IBook[]
    kind: string
    totalItems: number
}

const API = 'https://www.googleapis.com/books/v1/volumes'

export const booksApi = async ({search, sortBy}: IBooksApi) => {
    const {data} = await axios.get<IData>(`${API}?q=${search}&maxResults=30&orderBy=${sortBy}&key=${process.env.REACT_APP_API_KEY}`)
    return data
}

export const getOneBook = async (id: string) => {
    const {data} = await axios.get<IBook>(`${API}/${id}?key=${process.env.REACT_APP_API_KEY}`)
    return data
}