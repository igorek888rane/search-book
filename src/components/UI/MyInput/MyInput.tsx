import { ChangeEvent, FC } from 'react'
import styles from './myInput.module.scss'

interface MyInputProps {
	placeholder: string
	value: string
	handleChange: (value: string) => void
}

const MyInput: FC<MyInputProps> = ({ placeholder, value, handleChange }) => {
	return (
		<input
			className={styles.myInput}
			placeholder={placeholder}
			value={value}
			onChange={(e: ChangeEvent<HTMLInputElement>) =>
				handleChange(e.target.value)
			}
		/>
	)
}

export default MyInput