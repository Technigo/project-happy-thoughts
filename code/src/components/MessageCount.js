import React from 'react';

export const MessageCount = ({ charCount }) => {
	return (
		<p>
			<span className={charCount < 5 || charCount > 140 ? 'p-red' : 'p-blue'}>{charCount}</span>/140
		</p>
	);
};
