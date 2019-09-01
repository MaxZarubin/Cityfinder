import React from 'react';


const Button = ({btnName}) =>
{
	return (
		<button type="submit" className="btn btn-primary">{btnName}</button>
	)
}

export default Button;