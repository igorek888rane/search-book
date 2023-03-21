import {FC} from 'react';
import styles from "./book.module.scss";
import {IBook} from "../../store/slice/books/booksType";

interface BookProps {
    book: IBook
}

const Book: FC<BookProps> = ({book}) => {
    const parser = new DOMParser()

    return (
        <div className={styles.book}>
            <div className={styles.book__img}>
                <img src={book?.volumeInfo.imageLinks.thumbnail} alt=""/>
            </div>
            <div className={styles.book__info}>
                <p className={styles.book__text}>{book.volumeInfo.title}</p>
                <p className={styles.book__text}>
                    {book.volumeInfo.categories?.length
                        ? book.volumeInfo.categories.join(', ')
                        : ''}</p>
                <p className={styles.book__text}>
                    {book.volumeInfo.authors?.length
                        ? book.volumeInfo.authors.join(', ')
                        : book.volumeInfo.authors}</p>
                <p className={styles.book__text}>{parser
                    .parseFromString(book.volumeInfo.description, 'text/html')
                    .body.textContent}</p>
            </div>
        </div>
    );
};

export default Book;