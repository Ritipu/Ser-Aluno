import React from 'react';
import './App.css';
import { Button, Navbar} from 'react-bootstrap'

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoggedIn: false
		}
		this.acessPlatform = this.acessPlatform.bind(this)
	}

	acessPlatform() {
		this.setState({isLoggedIn: true})
	}
	render() {
		if (this.state.isLoggedIn === false) {
			return (
				<div className="navbar">
					<Navbar bg="dark" expand="lg" fixed="top">
						<Navbar.Brand className="navbar_logo" href="#home">
							<img
								src="/logo.png"
								height="30px"
								className="d-inline-block align-top"
								alt="React Bootstrap logo"
							/>
						</Navbar.Brand>
						<div className="navbar_logins">
						<Button onClick={this.acessPlatform}
						className="navbar_btn" variant="outline-info">Login</Button>

						<Button onClick={this.acessPlatform}
						className="navbar_btn_gov">
							<img className="aut_gov"
								src="https://www.autenticacao.gov.pt/o/autenticacao-gov-theme/images/logo/logo-ag.svg"
								alt="Logo Autenticação Gov" />
						</Button>
						</div>

					</Navbar>
				</div>
			);
		} else {
			return(
				<div>
					Ola ola
				</div>
			)
		}

	}

}


