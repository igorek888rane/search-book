import {FC} from 'react';
import styles from './sortFilter.module.scss'
import MyToggle from "../UI/MyToggle/MyToggle";
import {useAppDispatch, useAppSelector} from "../../hook/useApp";
import {setSortBy} from "../../store/slice/sort/sortSlice";
import {sortByType} from "../../store/slice/sort/sortType";
import MySelect from "../UI/MeSelect/MySelect";
import {filtersType} from "../../store/slice/books/booksType";
import {setFilter} from "../../store/slice/books/booksSlice";

const SortFilter: FC = () => {
    const dispatch = useAppDispatch()
    const {sortBy} = useAppSelector(state => state.sort)

    return (
        <div className={styles.sort_filter}>
            <MyToggle fn={(sortValue: sortByType) => dispatch(setSortBy(sortValue))}
                      toggleActive={sortBy}
                      toggles={['newest', 'relevance']}/>
            <MySelect defaultValue={'all'}
                      setSelect={(value: filtersType) => dispatch(setFilter(value))}
                      options={['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']}/>
        </div>
    );
};

export default SortFilter;