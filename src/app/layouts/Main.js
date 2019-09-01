import React from 'react';

import Form from '../components/Form';

const Main = ({title, placeholder, btnName}) =>
{
		return (
		<div className="jumbotron jumbotron-fluid">
		  	<div className="container col-4">
				<Form 
				title={title} 
				placeholder={placeholder} 
				btnName={btnName}
				/>
	  		</div>
	  	</div>
		)
}

export default Main;