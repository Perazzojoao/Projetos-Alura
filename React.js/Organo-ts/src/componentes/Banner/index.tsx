import './Banner.css';
import React from 'react';

interface BannerProps {
	enderecoImg: string;
	textoAlternativo?: string;
}

const Banner = ({ enderecoImg, textoAlternativo }: BannerProps) => {
	// JSX
	return (
		<header className='banner'>
			<img src={enderecoImg} alt={textoAlternativo} />
		</header>
	);
};

export default Banner;