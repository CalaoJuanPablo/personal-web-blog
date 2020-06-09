module.exports = {
	siteMetadata: {
		title: `Juan Pablo Calao`,
		description: `Frontend Developer | Passionate for code | Love music | Guitarist of GEMA Worship | Blogger | @CalaoJuanPablo 🇨🇴.`,
		author: `@CalaoJuanPablo`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/static/images`,
			},
		},
		`gatsby-plugin-sass`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#ffffff`,
				display: `minimal-ui`,
				icon: `src/static/images/logo.png`, // This path is relative to the root of the site.
			},
		},
		`gatsby-plugin-flow`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
