import React, { Component } from 'react';
// import { browserHistory } from 'react-router';

class Logout extends Component{
	/*When the user logs out, they will be directed to the home page.*/
	componentDidMount() {
		localStorage.removeItem('bibleApp');
		// this.props.setIsUserLoggedIn(false);
		this.props.history.push('/');
	}

	render() {
		return(
			<div>

			</div>
			)
	}
}

export default Logout;