import React from 'react';

import './Style.css';

const Button = ({ button, click, disabled, className, text }) => {
	return (
		<button
			type={button}
			onClick={click}
			disabled={disabled}
			className={className}
		>
			{text}
		</button>
	);
};

export default Button;
