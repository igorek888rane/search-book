import { FC } from 'react'
import styles from './Books.module.scss'
import { IBook } from '../../store/slice/books/booksType'
import { Link } from 'react-router-dom'

interface BooksItemProps {
	book: IBook
}

const BookCard: FC<BooksItemProps> = ({ book }) => {
	return (
		<div className={styles.book__item}>
			<Link to={`/${book.id}`} className={styles.book}>
				<img src={book.volumeInfo.imageLinks?.thumbnail} alt='Book' />
				<p className={styles.book__tittle}>{book.volumeInfo.title}</p>
			</Link>
			<p className={styles.book__text}>
				{book.volumeInfo.categories?.length
					? book.volumeInfo.categories[0]
					: ''}
			</p>

			<p className={styles.book__text}>
				{book.volumeInfo.authors?.length
					? book.volumeInfo.authors.join(', ')
					: book.volumeInfo.authors}
			</p>
		</div>
	)
}

export default BookCard
