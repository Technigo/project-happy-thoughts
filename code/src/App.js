import React from 'react'

import AddThought from 'components/AddThought'
import Thoughts from 'components/Thoughts'
import Footer from 'components/Footer'

const heartIcon = <img alt='heart-button' src={'assets/heart.png'} height="20px" width="20px"/>

export const App = () => {
	return (
		<div>
			<div className='all-thoughts'>
				<AddThought 
					heartIcon={heartIcon}
				/>
				
				<Thoughts
					heartIcon={heartIcon}
				/>
			</div>
			<Footer />
		</div>
	)
};
