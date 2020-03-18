import React from 'react';

export const DisplayThought = () => {
	return (
		<section className="thought-container">
			<p>
				Fruit flavored crunchy loops colored cereal pour milk. Breakfast hoops sweetened tutti frutti soaked
				treats. Tasty Froot Loops rainbow liquid spoon happy family Sugar Smacks fruit.
			</p>
			<div className="icon-container">
				<div>
					<div className="heart-container">
						<span role="img" aria-label="Red heart">
							❤️
						</span>
					</div>
					<span className="amount-of-hearts">x0</span>
				</div>
				<span className="time-gone-by">x minutes ago</span>
			</div>
		</section>
	);
};
