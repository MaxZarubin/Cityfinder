import React from 'react';


export default function Button(props)
{
		return (
			<button type="submit" className="btn btn-primary">{props.btnName}</button>
		)
}