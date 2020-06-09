// Dependencies
import React from 'react'
import { Link } from 'gatsby'
// Styles
import styles from './Header.module.scss'

export function Header() {
	let [menuIsOpen, setMenuIsOpen] = React.useState(false)

	function handleIsMenuOpen(event) {
		event.preventDefault()

		setMenuIsOpen(!menuIsOpen)
	}

	return (
		<header className={styles['Header']} data-state={menuIsOpen}>
			<figure className={styles['Header__logo']}>
				<img src="" alt="Logo" />
			</figure>
			<nav className={styles['Header__nav']}>
				<div
					className={styles['Header__icon']}
					onClick={handleIsMenuOpen}
				>
					<i></i>
					<i></i>
					<i></i>
				</div>
				<ul>
					<li>
						<Link
							to="/"
							activeClassName={styles['Header__nav--active']}
						>
							home
						</Link>
					</li>
					<li>
						<Link to="/about">about</Link>
					</li>
					<li>
						<Link to="/work">work</Link>
					</li>
					<li>
						<Link to="/blog">blog (es)</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
