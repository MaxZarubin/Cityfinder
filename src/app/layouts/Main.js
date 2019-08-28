import React from 'react';

import Form from '../components/Form';

export default class Main extends React.Component
{
	render(){
		return (
		<div className="jumbotron jumbotron-fluid">
		  	<div className="container col-4">
				<Form 
				title={this.props.title} 
				placeholder={this.props.placeholder} 
				btnName={this.props.btnName}
				/>
	  		</div>
	  	</div>
		)
	}
}