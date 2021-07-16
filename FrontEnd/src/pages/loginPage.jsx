import React from "react";
import LoginForm from "../components/login/LoginForm";
import "../css/loginPage.css"

export default class LoginPage extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<section className="logpag">
				<div className="imagba">
					<img src="/logo.png" className="imaga" />
				</div>
				<div className="container">
					<LoginForm acessPlatform={this.props.acessPlatform}/>
				</div>
			</section>

		)
	}
}