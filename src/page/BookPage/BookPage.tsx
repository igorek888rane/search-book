import { FC, useEffect } from 'react'
import styles from './bookPage.module.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hook/useApp'
import { fetchOneBook } from '../../store/slice/books/booksAsyncThunk'
import Loader from '../../components/UI/Loader/Loader'
import MyButton from '../../components/UI/MyButton/MyButton'
import Book from '../../components/Book/Book'
import { setBookClear, setError } from '../../store/slice/books/booksSlice'

const BookPage: FC = () => {
	const { id } = useParams()
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const { book, error, loading } = useAppSelector(state => state.books)
	const back = () => {
		if (error) {
			dispatch(setError(''))
		}
		dispatch(setBookClear())
		navigate('/')
	}
	useEffect(() => {
		if (id) {
			dispatch(fetchOneBook(id))
		}
	}, [])

	return (
		<div className={styles.book__page}>
			{loading && <Loader />}
			<MyButton type={'button'} onClick={back}>
				Back
			</MyButton>
			{error && <h1>Error</h1>}
			{book && <Book book={book} />}
		</div>
	)
}

export default BookPage