import React from 'react';

import ListGroupItem from './ListGroupItem';

const ListGroup = ({searchResult}) =>
{
	let results =  searchResult.map((result, index) => {
		return <ListGroupItem res={result.name} key={index} />;
	});

	return (
		<ul className="list-group">
			{ results }
		</ul>
	)
}

export default ListGroup;