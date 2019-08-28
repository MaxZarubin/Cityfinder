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
			value:  '',
			searchResult: []
		}

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
			value: e.target.value
		});
		this.search();
	}

	search() {
		let countries = this.state.countries,
			val = this.state.value;

		let res = countries.filter(function(item){
			if(item.name.match(new RegExp(`^${val}`, "i")) && val){
				return item.name;
			};
		})

		this.setState({
			searchResult: res
		});
	};


	render(){
		let flag = this.state.searchResult.length ? true : false;
		return (
			<form>
				<h3>{this.props.title}</h3>
				<div className="form-group">
					<Input placeholder={this.props.placeholder} onChangeValue={this.onChangeValue}/>
				    { flag && <ListGroup searchResult={this.state.searchResult} value={this.state.value}/> }
				</div>
				<Button btnName={this.props.btnName} />
			</form>
		)
	}
}