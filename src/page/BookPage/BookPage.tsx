import {FC, useEffect} from 'react';
import styles from './bookPage.module.scss'
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hook/useApp";
import {fetchOneBook} from "../../store/slice/books/booksAsyncThunk";
import Loader from "../../components/UI/Loader/Loader";
import MyButton from "../../components/UI/MyButton/MyButton";

const BookPage: FC = () => {
    const {id} = useParams()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {book, error, loading} = useAppSelector(state => state.books)
    useEffect(() => {
        if (id) {
            dispatch(fetchOneBook(id))
        }

    }, [])

    return (
        <div className={styles.book__page}>
            <MyButton type={'button'} onClick={() => navigate('/')}>Back</MyButton>
            {loading && <Loader/>}
            {error
                ? <h1 style={{textAlign: 'center'}}>Error</h1>
                : book?.volumeInfo?.title}

        </div>
    );
};

export default BookPage;