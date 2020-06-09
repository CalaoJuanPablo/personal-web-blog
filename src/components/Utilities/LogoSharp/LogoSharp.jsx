// Dependencies
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export function LogoSharp() {
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
