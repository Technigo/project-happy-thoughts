import React, { useEffect, useState } from 'react'; //use effect hook
import { API_URL, LIKES_URL } from './utils/urls'; //Links to the URLs
import ThoughtItem from './components/ThoughtItem';
import ThoughtForm from './components/ThoughtForm';
import LoadingItem from './components/LoadingItem';

export const App = () => {
	const [thoughts, setThoughts] = useState([]); //should be initialized by an empty array//state property should by convention be at the top
	const [newThought, setNewThought] = useState(''); //state property
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetchThoughts();
	}, []); // empty dependencies array is to detect when the component is mounted. If we delete the empty array, there would be an infinite loop bc we  update our state in the userEffect

	const fetchThoughts = () => {
		setLoading(true);
		fetch(API_URL) //fetch data from API
			.then((res) => res.json()) //unpack the data
			.then((data) => setThoughts(data))
			.finally(() => setLoading(false));
	};

	//useEffect(() => {console.log("Updated!")}, [propName, stateName])
	//a dependencies array propName, stateName

	//when we want to detect both mounted and updated elements, then we dont pass any any dependencies. Just the callback/function.  useEffect(()=>{console.log("Mounted or updated!")

	//when the components dies - we add a return. useEffect(()=>{console.log("Mounted") return()=>{ console.log("Unmounted!")}}, [])

	const handleFormSubmit = (event) => {
		event.preventDefault(); //dont want the Submission of button to refresh the page

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ message: newThought }), //the key = message and the value =newThought  //JSON.stringify is wrapping it a package
		};

		//a post request
		//method is by default GET, so if we want GET, we can omit the second optional argument (options object)
		fetch(API_URL, options)
			.then((res) => res.json())
			.then((data) => {
				// setThoughts([data, ...thoughts])

				fetchThoughts();
			});
	};

	const handleLikesIncrease = (thoughtId) => {
		//option object
		const options = {
			method: 'POST',
		};
		fetch(LIKES_URL(thoughtId), options)
			.then((res) => res.json())
			.then((data) => {
				//first approach increases likes only (vanilla js)
				//checks all the data in the array
				// const updatedThoughts = thoughts.map((item) => {
				// 	if (item._id === data._id) {
				// 		item.hearts += 1;
				// 		return item;
				// 	} else {
				// 		return item;
				// 	}
				// });
				// setThoughts(updatedThoughts); //state handler
				//	});

				//second version
				fetchThoughts();
			});
	};
	return (
		<div>
			{loading && <LoadingItem />}
			{/* mounting the Thoughtform */}
			<ThoughtForm
				onFormSubmit={handleFormSubmit}
				newThought={newThought}
				setNewThought={setNewThought}
			/>
			{thoughts.map((thought) => (
				<ThoughtItem
					key={thought._id}
					thought={thought}
					onLikesIncrease={handleLikesIncrease}
				/>
			))}
			;
		</div>
	);
};
