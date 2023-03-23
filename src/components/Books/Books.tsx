import { FC } from 'react'
import styles from './Books.module.scss'
import { useAppDispatch, useAppSelector } from '../../hook/useApp'
import Loader from '../UI/Loader/Loader'
import BookCard from './BookCard'
import MyButton from '../UI/MyButton/MyButton'
import { setStartIndex } from '../../store/slice/form/formSlice'
import { fetchBooks } from '../../store/slice/books/booksAsyncThunk'
import { useFilterBook } from '../../hook/useFilter'

const Books: FC = () => {
	const { books, totalItems, loading, error } = useAppSelector(
		state => state.books
	)
	const { startIndex, maxResult, sortBy, search, filter } = useAppSelector(
		state => state.form
	)
	const dispatch = useAppDispatch()
	const loadMore = () => {
		dispatch(setStartIndex(maxResult + startIndex))
		dispatch(fetchBooks({ search, sortBy, startIndex, maxResult }))
	}
	const filterBook = useFilterBook(filter, books)
	return (
		<div className={styles.books}>
			{error ? (
				<p className={styles.books__text}>Error</p>
			) : (
				<p className={styles.books__text}>Найдено {totalItems} книг</p>
			)}
			<div className={styles.books__list}>
				{filterBook.map(book => (
					<BookCard key={book.id} book={book} />
				))}
				{loading && <Loader />}
			</div>
			{filterBook.length && (
				<div className={styles.book__btn}>
					<MyButton type={'button'} onClick={loadMore}>
						Load More
					</MyButton>
				</div>
			)}
		</div>
	)
}

export default Books
