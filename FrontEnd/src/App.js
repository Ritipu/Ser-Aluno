import React from 'react';
import './App.css';
import Plataforma from './Components/plataforma'

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoggedIn: false
		}
		this.acessPlatform = this.acessPlatform.bind(this)
	}

	acessPlatform() {
		this.setState({ isLoggedIn: true })
	}

	logout() {
		this.setState({ isLoggedIn: false })
	}

	render() {
		if (this.state.isLoggedIn === false) {
			return (
				<div className="navbar">
					<img src="/logo.png" height="30px" alt="Ser Aluno"/>
					<button onClick={this.acessPlatform}>Login</button>
					<button onClick={this.acessPlatform}>
					<img src="https://www.autenticacao.gov.pt/o/autenticacao-gov-theme/images/logo/logo-ag.svg"
						alt="Logo Autenticação Gov" />
					</button>
				</div>
			);
		} else {
			return (
				<div>
					<Plataforma logout={() => this.logout()}/>
				</div>
			)
		}

	}

}


