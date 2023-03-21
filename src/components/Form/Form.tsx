import {FC, FormEvent} from 'react';
import styles from './Form.module.scss'
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";
import {useAppDispatch, useAppSelector} from "../../hook/useApp";
import {fetchBooks} from "../../store/slice/books/booksAsyncThunk";
import {setSearch} from "../../store/slice/form/formSlice";

const Form: FC = () => {
    const dispatch = useAppDispatch()
    const {sortBy, search,startIndex,maxResult} = useAppSelector(state => state.form)
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(fetchBooks(({search, sortBy, startIndex,maxResult})))
        dispatch(setSearch(''))
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <MyInput placeholder={'Enter book tittle'} value={search}
                     handleChange={(value: string) => dispatch(setSearch(value))}/>
            <MyButton type={'submit'}>Search</MyButton>
        </form>
    );
};

export default Form;