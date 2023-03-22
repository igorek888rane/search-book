import { FC, PropsWithChildren } from 'react'
import styles from './myButton.module.scss'

interface MyButtonProps {
	type: 'submit' | 'button'
	onClick?: () => void
}

const MyButton: FC<PropsWithChildren<MyButtonProps>> = ({
	type,
	onClick,
	children,
}) => {
	return (
		<button className={styles.myBtn} type={type} onClick={onClick}>
			{children}
		</button>
	)
}

export default MyButton