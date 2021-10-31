import React from 'react';

const Footer = () => {
	return (
		<footer className="footer">
			<a
				href="https://www.linkedin.com/in/madelene-trang-33648a38/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<p className="footer-info"> &#169; by Madelene Trang</p>
			</a>
			<p>
				Team Hippo{' '}
				<span role="img" aria-label="hippo">
					{' '}
					🦛
				</span>{' '}
				Technigo 2021'
			</p>
		</footer>
	);
};

export default Footer;
