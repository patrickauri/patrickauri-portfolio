import React from 'react';

const Vimeo = (props) => {
	return (
		<React.Fragment>
			<iframe
				src={props.src}
				width='100%'
				height='360'
				frameborder='0'
				allow='autoplay; fullscreen'
				allowfullscreen
			/>
		</React.Fragment>
	);
};

export { Vimeo };
