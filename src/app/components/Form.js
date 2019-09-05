import React from 'react';

import Input from './Input';
import ListGroup from './ListGroup';
import Button from './Button';

import axios from 'axios';


export default class Form extends React.Component
{
	constructor(props){
		super(props);

		this.state = {
			countries: [],
			val:  '',
			searchResult: []
		};

		this.onChangeValue  = this.onChangeValue.bind(this);
		this.search = this.search.bind(this);
	}

	componentDidMount(){
		axios.get('https://restcountries.eu/rest/v2').then((response)=>{
			this.setState({
				countries: response.data
			});
		});
	}

	onChangeValue(e){				
    	this.setState({
    		val: e.target.value
    	}, this.search);
	}

	search() {
		const { countries, val } = this.state;

		let res = countries.filter(item => {
			if(item.name.match(new RegExp(`^${val}`, "i")) && val){					
				return item.name;
			};
		});

		this.setState({
			searchResult: res
		});
	}

	render(){

		const {title, placeholder, btnName} = this.props;
		const {searchResult, val} = this.state;
		let flag = searchResult.length ? true : false;	  

		return (
			<form>
				<h3>{title}</h3>
				<div className="form-group">
					<Input placeholder={placeholder} onChangeValue={this.onChangeValue} />
				    { flag && <ListGroup searchResult={searchResult} /> }
				</div>
				<Button btnName={btnName} />
			</form>
		)
	}
}