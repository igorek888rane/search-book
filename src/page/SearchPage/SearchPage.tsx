import {FC} from 'react';
import styles from './searchPage.module.scss'
import Form from "../../components/Form/Form";

const SearchPage: FC = () => {
    return (
        <div className={styles.search__page}>
            <Form/>
        </div>
    );
};

export default SearchPage;