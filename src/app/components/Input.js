import React from 'react';


export default class Input extends React.Component
{
	constructor(props){
		super(props);

		this.handleInput = this.handleInput.bind(this);
	}

	handleInput(e){
		this.props.onChangeValue(e);
	}

	render()
	{
		return(
			<input 
			type="text" 
			className="form-control" 
			onChange={this.handleInput} 
			placeholder={this.props.placeholder} 
			/>
		)
	}
}