import {FC} from 'react';
import styles from './sortFilter.module.scss'
import MyToggle from "../UI/MyToggle/MyToggle";
import {useAppDispatch, useAppSelector} from "../../hook/useApp";
import {setFilter, setSortBy} from "../../store/slice/form/formSlice";
import {sortByType} from "../../store/slice/form/formType";
import MySelect from "../UI/MeSelect/MySelect";
import {filtersType} from "../../store/slice/books/booksType";

const SortFilter: FC = () => {
    const dispatch = useAppDispatch()
    const {sortBy} = useAppSelector(state => state.form)

    return (
        <div className={styles.sort_filter}>
            <MyToggle fn={(sortValue: string) => dispatch(setSortBy(sortValue as sortByType))}
                      toggleActive={sortBy}
                      toggles={['newest', 'relevance']}/>
            <MySelect defaultValue={'all'}
                      setSelect={(value: string) => dispatch(setFilter(value as filtersType))}
                      options={['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']}/>
        </div>
    );
};

export default SortFilter;