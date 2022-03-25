import React from 'react';

import { Main } from 'components/Main';

export const App = () => {
	return (
		<section>
			<Main />
		</section>
	);
};

// export const App = () => {
// 	const [thoughts, setThoughts] = useState([]);
// 	const [newThought, setNewThought] = useState('');

// 	useEffect(() => {
// 		fetch(API_URL)
// 			.then((res) => res.json())
// 			.then((data) => setThoughts(data));
// 	}, []);

// 	const handleFormSubmit = (event) => {
// 		event.preventDefault();
// 		const options = {
// 			method: 'POST',
// 			headers: { 'Content-Type': 'application/json' },
// 		};

// 		fetch(API_URL, options)
// 			.then((res) => res.json())
// 			.then((data) => setThoughts([data, thoughts]))
// 			.finally(() => setNewThought(''));
// 	};

// 	const handleAddHeart = (id) => {
// 		const options = {
// 			method: 'POST',
// 		};

// 		fetch(LIKES_API_URL(id), options)
// 			.then((res) => res.json())
// 			.then((data) => {
// 				const updateThoughts = thoughts.map((item) => {
// 					if (item._id === data._id) {
// 						item.hearts += 1;
// 						return item;
// 					} else {
// 						return item;
// 					}
// 				});
// 				setThoughts(updateThoughts);
// 			});
// 	};

// 	return (
// 		<div className='container'>
// 			<SendThought
// 				onFormSubmit={handleFormSubmit}
// 				newThought={newThought}
// 				setNewThought={setNewThought}
// 			/>

// 			{thoughts.map((thought) => (
// 				<HappyThought key={thought._id} thought={thought} onAddHeart={handleAddHeart} />
// 			))}
// 		</div>
// 	);
// };
