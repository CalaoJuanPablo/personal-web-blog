import React from 'react'
import styles from './Intro.module.scss'

export function Intro() {
	return (
		<div className={styles['Intro']}>
			<h3>Hello,</h3>
			<h1>I'm Juan Pablo Calao Perez</h1>
			<h4>Frontend developer</h4>
			<div class={styles['Intro__mail']}>
				<p>
					<a href="mailto:me@calaojuanpablo.com">
						me@calaojuanpablo.com
					</a>
				</p>
			</div>
		</div>
	)
}
