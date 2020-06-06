// Dependencies
import React from 'react';
import { Link } from 'gatsby';
// Styles
import styles from './Header.module.scss';

export function Header() {
	return (
		<header className={styles['Header']}>
			<figure className={styles['Header__logo']}>
				<img src="" alt="Logo" />
			</figure>
			<nav className={styles['Header__nav']}>
				<div className={styles['Header__nav__menu-icon']}>
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
	);
}
