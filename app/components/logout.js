import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Logout extends Component{
	/*When the user logs out, they will be directed to the home page.*/
	componentWillMount() {
		localStorage.removeItem('bibleApp');
		browserHistory.push('/');
	}

	render() {
		return(
			<div></div>
			)
	}
}

export default Logout;