import {FC, FormEvent, useState} from 'react';
import styles from './Form.module.scss'
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";
import {booksApi} from "../../api/booksApi";

const Form: FC = () => {
    const [search, setSearch] = useState<string>('')
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const res = await booksApi(search)
        console.log(res);
        setSearch('')
    }
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <MyInput value={search} handleChange={setSearch}/>
            <MyButton type={'submit'}>Search</MyButton>
        </form>
    );
};

export default Form;