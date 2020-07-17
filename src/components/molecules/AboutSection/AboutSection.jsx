import React from 'react'
import { Title, BodyText, ButtonLink } from '../../atoms'
import styles from './AboutSection.module.scss'

export function AboutSection() {
	return (
		<div className={`${styles['AboutSection']} section`}>
			<Title type="h1">about me</Title>
			<BodyText>
				I am a Frontend Developer who loves to master HTML, CSS, and
				JavaScript. Currently, I am working with ReactJS on a daily
				basis. As developer, is important for me to understand the
				user's problem to develop the best solution for it.
			</BodyText>
			<BodyText>
				I am very passionate about learning and teaching. I’ve worked on
				a variety of project in different industries, from digital
				marketing education to video games and Esports.
			</BodyText>
			<ButtonLink>more about me</ButtonLink>
		</div>
	)
}
