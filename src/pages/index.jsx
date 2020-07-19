// Dependencies
import React from 'react'
// Components
import { AboutSection } from '../components/molecules'
import { Intro, WhatIDoSection } from '../components/organisms'
import { Layout, SEO } from '../components/utilities'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Intro />
		<AboutSection />
		<WhatIDoSection />
	</Layout>
)

export default IndexPage
