import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

const LayoutSkills = ({ pageTitle, children }) => {
	return (
		<div>
			<title>{pageTitle}</title>
			<main>
				<h1>{pageTitle}</h1>
				{children}
			</main>
			<StaticImage
				src="../images/skills-tech.png"
				width={850}
			/>
		</div>
	)
}

export default LayoutSkills