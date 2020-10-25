import React from 'react';

const Button = ({ button, click, disabled, text }) => {
	return (
		<button type={button} onClick={click} disabled={disabled}>
			{text}
		</button>
	);
};

export default Button;
