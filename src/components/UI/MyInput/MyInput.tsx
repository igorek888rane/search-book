import {ChangeEvent, FC} from 'react';
import styles from './myInput.module.scss'


interface MyInputProps {
    value: string
    handleChange: (value: string) => void
}

const MyInput: FC<MyInputProps> = ({value, handleChange}) => {
    return (
        <input className={styles.myInput}
               value={value}
               onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}/>
    );
};

export default MyInput;