import {FC} from 'react';
import styles from './searchPage.module.scss'
import Form from "../../components/Form/Form";
import SortFilter from "../../components/SortFilter/SortFilter";
import Books from "../../components/Books/Books";

const SearchPage: FC = () => {
    return (
        <div className={styles.search__page}>
            <div className={styles.search_form}>
                <Form/>
                <SortFilter/>
            </div>
            <Books/>
        </div>
    );
};

export default SearchPage;