import {FC} from 'react';
import styles from './sortFilter.module.scss'
import MyToggle from "../UI/MyToggle/MyToggle";
import {useAppDispatch, useAppSelector} from "../../hook/useApp";
import {setFilter, setSortBy} from "../../store/slice/sortFilter/sortFilter";
import {filtersType, sortByType} from "../../store/slice/sortFilter/sortFilterType";
import MySelect from "../UI/MeSelect/MySelect";

const SortFilter: FC = () => {
    const dispatch = useAppDispatch()
    const {sortBy} = useAppSelector(state => state.sortFilter)

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