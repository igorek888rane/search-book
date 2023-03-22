import { FC, FormEvent, useState } from 'react'
import styles from './Form.module.scss'
import MyInput from '../UI/MyInput/MyInput'
import MyButton from '../UI/MyButton/MyButton'
import { useAppDispatch, useAppSelector } from '../../hook/useApp'
import { fetchBooks } from '../../store/slice/books/booksAsyncThunk'
import { setSearch, setStartIndex } from '../../store/slice/form/formSlice'
import { setBooksClear } from '../../store/slice/books/booksSlice'

const Form: FC = () => {
	const dispatch = useAppDispatch()
	const { sortBy, startIndex, maxResult } = useAppSelector(
		state => state.form
	)
	const [searchValue, setSearchValue] = useState('')
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatch(setStartIndex(0))
		dispatch(setBooksClear())
		dispatch(
			fetchBooks({ search: searchValue, sortBy, startIndex, maxResult })
		)
		setSearchValue('')
		dispatch(setSearch(searchValue))
		dispatch(setStartIndex(maxResult))
	}

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<MyInput
				placeholder={'Enter book tittle'}
				value={searchValue}
				handleChange={(value: string) => setSearchValue(value)}
			/>
			<MyButton type={'submit'}>Search</MyButton>
		</form>
	)
}

export default Form