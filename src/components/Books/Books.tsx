import {FC} from 'react';
import styles from './Books.module.scss'
import {useAppSelector} from "../../hook/useApp";
import Loader from "../UI/Loader/Loader";
import BookCard from "./BookCard";

const Books: FC = () => {
    const {books, totalItems, loading, error} = useAppSelector(state => state.books)

    return (
        <div className={styles.books}>
            {error
                ? <p className={styles.books__text}>Error</p>
                : <p className={styles.books__text}>Найдено {totalItems} книг</p>}

            {loading && <Loader/>}
            <div className={styles.books__list}>
                {books.map(book => <BookCard key={book.id} book={book}/>)}
            </div>
        </div>
    );
};

export default Books;