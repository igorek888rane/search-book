import {FC, PropsWithChildren} from 'react';
import styles from './myButton.module.scss'


interface MyButtonProps {
    type: 'submit' | 'button'
}

const MyButton: FC<PropsWithChildren<MyButtonProps>> = ({type, children}) => {
    return (
        <button type={type} className={styles.myBtn}>{children}</button>
    );
};

export default MyButton;