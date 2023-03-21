import {FC, useEffect} from 'react';
import styles from './bookPage.module.scss'
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hook/useApp";
import {fetchOneBook} from "../../store/slice/books/booksAsyncThunk";
import Loader from "../../components/UI/Loader/Loader";
import MyButton from "../../components/UI/MyButton/MyButton";
import Book from "../../components/Book/Book";

const BookPage: FC = () => {
    const {id} = useParams()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {book, errorOneBook, loading} = useAppSelector(state => state.books)

    useEffect(() => {
        if (id) {
            dispatch(fetchOneBook(id))
        }

    }, [])


    return (
        <div className={styles.book__page}>
            {loading && <Loader/>}
            <MyButton type={'button'} onClick={() => navigate('/')}>Back</MyButton>
            {errorOneBook && <h1>Error</h1>}
            {book.id && <Book book={book}/>}
        </div>
    );
};

export default BookPage;