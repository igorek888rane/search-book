import axios from "axios";
import {sortByType} from "../store/slice/form/formType";
import {IBook} from "../store/slice/books/booksType";


export interface IBooksApi {
    search: string
    sortBy: sortByType
    startIndex: number
    maxResult:number
}

export interface IData {
    items: IBook[]
    kind: string
    totalItems: number
}

const API = 'https://www.googleapis.com/books/v1/volumes'

export const booksApi = async ({search, sortBy, startIndex,maxResult}: IBooksApi) => {
    const {data} = await axios
        .get<IData>
        (`${API}?q=${search}&startIndex=${startIndex}&maxResults=${maxResult}&orderBy=${sortBy}&key=${process.env.REACT_APP_API_KEY}`)
    return data
}

export const getOneBook = async (id: string) => {
    const {data} = await axios.get<IBook>(`${API}/${id}?key=${process.env.REACT_APP_API_KEY}`)
    return data
}