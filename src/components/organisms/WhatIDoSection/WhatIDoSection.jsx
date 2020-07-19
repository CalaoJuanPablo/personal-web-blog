import React from 'react'
import styles from './WhatIDoSection.module.scss'

export function WhatIDoSection() {
	return (
		<div className={`${styles['WhatIDoSection']} section`}>
			<h1>what i do</h1>
			<div className="grid column-2">
				<div className="skill-card">
					<div className="icon">
						<i className="fas fa-pen-nib"></i>
					</div>
					<h3>web design</h3>
					<span className="border"></span>
					<p>I love clean, minimal and beautiful websites</p>
				</div>
				<div className="skill-card">
					<div className="icon">
						<i className="fas fa-code"></i>
					</div>
					<h3>web development</h3>
					<span className="border"></span>
					<p>I focus in simplicity, reliability and performance</p>
				</div>
			</div>
		</div>
	)
}
