import React from 'react'


import Thoughts from 'components/Thoughts'
import Footer from 'components/Footer'


const thoughtsAPI = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'
const heartIcon = <img alt='heart-button' src={'assets/heart.png'} height="20px" width="20px"/>


export const App = () => {
	return (
		<div>
			<div className='all-thoughts'>
				
				<Thoughts
					heartIcon={heartIcon}
					thoughtsAPI={thoughtsAPI}
				/>
			</div>
			<Footer />
		</div>
	)
};
