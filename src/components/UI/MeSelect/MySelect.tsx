import {ChangeEvent, FC} from 'react'
import styles from './mySelect.module.scss'
import {filtersType} from "../../../store/slice/sortFilter/sortFilterType";

interface mySelectProps {
    defaultValue: string
    setSelect: (value: filtersType) => void
    options: filtersType[]
}

const MySelect: FC<mySelectProps> = ({defaultValue, setSelect, options}) => {
    return (
        <select
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setSelect(e.target.value as filtersType)
            }
            defaultValue={defaultValue}
            className={styles.mySelect}
        >
            {options.map(item => (
                <option key={item}>{item}</option>
            ))}
        </select>
    )
}

export default MySelect
