import React from 'react'

export function Title({ type, children }) {
	const mapType = {
		h1: <h1>{children}</h1>,
		h2: <h2>{children}</h2>,
		h3: <h3>{children}</h3>,
		h4: <h4>{children}</h4>,
	}

	return mapType[type]
}
