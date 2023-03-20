import {FC, FormEvent, useState} from 'react';
import styles from './Form.module.scss'
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";
import {useAppDispatch, useAppSelector} from "../../hook/useApp";
import {fetchBooks} from "../../store/slice/books/booksAsyncThunk";

const Form: FC = () => {
    const [search, setSearch] = useState<string>('')
    const dispatch = useAppDispatch()
    const {sortBy} = useAppSelector(state => state.sort)
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(fetchBooks(({search, sortBy})))
        setSearch('')
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <MyInput placeholder={'Enter book tittle'} value={search} handleChange={setSearch}/>
            <MyButton type={'submit'}>Search</MyButton>
        </form>
    );
};

export default Form;