import React, { Component } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isUserLoggedIn: false
		};
		this.setLoginStatus = this.setLoginStatus.bind(this);
	}

	setLoginStatus(status) {
		this.setState({isUserLoggedIn: status});
	}

	componentWillMount() {
		if(localStorage.getItem('bibleApp')) {
			this.setState({isUserLoggedIn: true});
		}
	}
	render() {
		return (
		  <div>
		    <Navbar isLoggedIn={this.state.isUserLoggedIn} />
		    {React.cloneElement(this.props.children, {setLoginStatus: this.setLoginStatus})}
		    <Footer />
		  </div>
		);
	}
	
}

export default Main;
