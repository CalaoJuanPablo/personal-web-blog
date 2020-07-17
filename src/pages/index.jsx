// Dependencies
import React from 'react'
// Components
import { AboutSection } from '../components/molecules'
import { Intro } from '../components/organisms'
import { Layout, SEO } from '../components/utilities'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Intro />
		<AboutSection />
	</Layout>
)

export default IndexPage
