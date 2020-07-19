import React from 'react'
import styles from './SkillCard.module.scss'

export function SkillCard({ iconClassName, skillTitle, skillDescription }) {
	return (
		<div className={styles['SkillCard']}>
			<div className={styles['SkillCard__icon']}>
				<i className={iconClassName}></i>
			</div>
			<h3>{skillTitle}</h3>
			<span className={styles['SkillCard__border']}></span>
			<p>{skillDescription}</p>
		</div>
	)
}
