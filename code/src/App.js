import React from 'react'

import Thoughts from 'components/Thoughts'
import Footer from 'components/Footer'

export const App = () => {
	return (
		<div>
			<div className='all-thoughts'>
				<Thoughts/>
			</div>
			<Footer />
		</div>
	)
};
