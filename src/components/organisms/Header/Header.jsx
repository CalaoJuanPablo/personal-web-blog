// Dependencies
import React from 'react'
import { Link } from 'gatsby'
// Components
import { LogoSharp } from '../../../utils'
// Styles
import styles from './Header.module.scss'

export function Header() {
	let [menuIsOpen, setMenuIsOpen] = React.useState(false)

	function handleIsMenuOpen(event) {
		event.preventDefault()

		setMenuIsOpen(!menuIsOpen)
	}

	function handleCloseMenu() {
		setMenuIsOpen(false)
	}

	return (
		<header className={styles['Header']} data-state={menuIsOpen}>
			<figure className={styles['Header__logo']}>
				<LogoSharp />
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
							activeClassName="Header__nav--active"
							onClick={handleCloseMenu}
						>
							home
						</Link>
					</li>
					<li>
						<Link to="/about" onClick={handleCloseMenu}>
							about
						</Link>
					</li>
					<li>
						<Link to="/work" onClick={handleCloseMenu}>
							work
						</Link>
					</li>
					<li>
						<Link to="/blog" onClick={handleCloseMenu}>
							blog (es)
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
