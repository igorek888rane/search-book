import {ChangeEvent, FC} from 'react'
import styles from './mySelect.module.scss'

interface mySelectProps {
    defaultValue: string
    setSelect: (value: string) => void
    options: string[]
}

const MySelect: FC<mySelectProps> = ({defaultValue, setSelect, options}) => {
    return (
        <select
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setSelect(e.target.value)
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
