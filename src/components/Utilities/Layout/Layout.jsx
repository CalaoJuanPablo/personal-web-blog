// Dependencies
import React from 'react';
// Types
import { LayoutTypes } from './Layout.types';
// Components
import { Header } from '../../Header';

export function Layout({ children = null }: LayoutTypes): React$node {
	return (
		<>
			<Header />
			{children}
		</>
	);
}
