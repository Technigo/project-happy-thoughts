import React from 'react';

export const MessageCount = ({ charCount }) => {
	return (
		<p className="p-message-count">
			<span className={charCount > 140 ? 'p-red' : 'p-blue'}>{140 - charCount}</span>/140
		</p>
	);
};
