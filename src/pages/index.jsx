// Dependencies
import React from 'react'
// Components
import { Intro } from '../components/organisms'
import { Layout, SEO } from '../components/utilities'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Intro />
	</Layout>
)

export default IndexPage
