import React, {FC} from 'react';
import styles from './loader.module.scss';

const Loader: FC = () => {
    return (
        <div className={styles.loading}>
            <div className={styles.loading__item}></div>
            <p className={styles.loading__text}>Loading...</p>
        </div>
    );
};

export default Loader;