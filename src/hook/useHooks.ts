import { IBook } from '../store/slice/books/booksType'
import { useMemo } from 'react'

export const useFilterBook = (filter: string, books: IBook[]) => {
	return useMemo(() => {
		if (filter === 'all') {
			return books
		}
		return books.filter(book =>
			book.volumeInfo.categories
				?.map(category => category.toLowerCase())
				.includes(filter)
		)
	}, [filter, books])
}