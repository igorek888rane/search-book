import axios from "axios";
import {sortByType} from "../store/slice/sortFilter/sortFilterType";
import {IBook} from "../store/slice/books/booksType";


export interface IBooksApi {
    search: string
    sortBy: sortByType
}

export interface IData {
    items: IBook[]
    kind:string
    totalItems:number
}

export const booksApi = async ({search, sortBy}: IBooksApi) => {
    const {data} = await axios.get<IData>(`${process.env.REACT_APP_API}?q=${search}&maxResults=30&orderBy=${sortBy}&key=${process.env.REACT_APP_API_KEY}`)
    return data
}