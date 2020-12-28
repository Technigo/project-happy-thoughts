import React from 'react';

import './Style.css';

const Button = ({ button, click, disabled, className, text, value }) => {
	return (
		<button
			type={button}
			onClick={click}
			disabled={disabled}
			className={className}
			value={value}
		>
			{text}
		</button>
	);
};

export default Button;
