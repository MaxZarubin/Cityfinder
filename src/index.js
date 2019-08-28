import React from 'react';
import ReactDOM from 'react-dom';

import Main from './app/layouts/Main';

const app = document.getElementById('root');

const formTitle = 'Finde Country',
	  inputPlaceHolder = 'Search',
	  buttonName = 'Submit';

ReactDOM.render(
	<Main 
	title={formTitle} 
	placeholder={inputPlaceHolder} 
	btnName={buttonName}
	/>		
, app);