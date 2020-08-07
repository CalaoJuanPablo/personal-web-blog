// Dependencies
import React from 'react'
// Components
import { AboutSection } from '../components/molecules'
import {
	Intro,
	WhatIDoSection,
	PortfolioSection,
} from '../components/organisms'
import { Layout, SEO } from '../components/utilities'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Intro />
		<AboutSection />
		<WhatIDoSection />
		<PortfolioSection />
	</Layout>
)

export default IndexPage
