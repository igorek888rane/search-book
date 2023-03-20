import {FC} from 'react';
import styles from './myToggle.module.scss'
import {sortByType} from "../../../store/slice/sort/sortType";


interface myToggleProps {
    fn: (select: any) => void
    toggleActive: string
    toggles: sortByType[]
}

const MyToggle: FC<myToggleProps> = ({fn, toggleActive, toggles}) => {
    return (
        <div className={styles.myToggle}>
            {toggles.map(toggle => (
                <div
                    key={toggle}
                    onClick={() => fn(toggle)}
                    className={`${styles.myToggleEl} ${
                        toggle === toggleActive ? styles.active : ''
                    }`}
                >
                    {toggle}
                </div>
            ))}
        </div>
    );
};

export default MyToggle;