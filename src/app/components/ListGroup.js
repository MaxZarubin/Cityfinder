import React from 'react';

import ListGroupItem from './ListGroupItem';

export default class ListGroup extends React.Component
{
	render(){
		let results =  this.props.searchResult.map((result, index) => {
			return <ListGroupItem res={result.name} key={index} />;
		});

		return (
			<ul className="list-group">
				{ results }
			</ul>
		)
	}
}