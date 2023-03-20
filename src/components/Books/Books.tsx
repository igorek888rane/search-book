import {FC} from 'react';
import styles from './Books.module.scss'
import {useAppSelector} from "../../hook/useApp";
import Loader from "../UI/Loader/Loader";
import BooksItem from "./BooksItem";

const Books: FC = () => {
    const {books, totalItems, loading} = useAppSelector(state => state.books)


    return (
        <>
            <p style={{textAlign: 'center', marginTop: '15px'}}>Найдено {totalItems} книг</p>
            <div className={styles.books}>
                {loading
                    ? <Loader/>
                    : books.map(book => <BooksItem key={book.id} book={book}/>)}

            </div>
        </>
    );
};

export default Books;