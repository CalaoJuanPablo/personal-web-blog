import React from 'react'
import styles from './WhatIDoSection.module.scss'
import { SkillCard } from '../../molecules'
import skillData from './skillData.json'

export function WhatIDoSection() {
	return (
		<div className={`${styles['WhatIDoSection']} section`}>
			<h1>what i do</h1>
			<div className={`grid column-${skillData.gridColumns}`}>
				{skillData.skills.map((skill) => (
					<SkillCard key={skill.id} {...skill} />
				))}
			</div>
		</div>
	)
}
