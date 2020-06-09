// Dependencies
import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
// Styles
import styles from './Header.module.scss'

function Image() {
	const data = useStaticQuery(graphql`
		query GET_LOGO {
			logo: file(relativePath: { eq: "logo.png" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	return <Img fluid={data.logo.childImageSharp.fluid} alt="Logo" />
}

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
				<Image />
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
