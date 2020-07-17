import React from 'react'
import styles from './ButtonLink.module.scss'

export function ButtonLink({ children }) {
	return (
		<a href="#" className={styles['ButtonLink']}>
			{children}
		</a>
	)
}
