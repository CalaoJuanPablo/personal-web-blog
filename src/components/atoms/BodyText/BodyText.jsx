import React from 'react'
import styles from './BodyText.module.scss'

export function BodyText({ children }) {
	return <p className={styles['BodyText']}>{children}</p>
}
