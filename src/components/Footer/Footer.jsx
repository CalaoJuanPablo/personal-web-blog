// Dependencies
import React from 'react'
// Styles
import styles from './Footer.module.scss'
import { LogoSharp } from '../Utilities'

export function Footer() {
	return (
		<footer className={styles['Footer']}>
			<figure className={styles['Footer__logo']}>
				<LogoSharp />
			</figure>
			<ul className={styles['Footer__socialMediaLinks']}>
				<li>
					<a
						href="https://www.linkedin.com/in/calaojuanpablo/"
						target="_blank"
					>
						<i className="fab fa-linkedin-in"></i>
					</a>
				</li>
				<li>
					<a href="https://github.com/CalaoJuanPablo" target="_blank">
						<i className="fab fa-github"></i>
					</a>
				</li>
				<li>
					<a
						href="https://twitter.com/CalaoJuanPablo"
						target="_blank"
					>
						<i className="fab fa-twitter"></i>
					</a>
				</li>
			</ul>
			<p className={styles['Footer__copyright']}>
				2020. designed with Figma,
				<br /> built with HTML, CSS & Javascript
			</p>
		</footer>
	)
}
