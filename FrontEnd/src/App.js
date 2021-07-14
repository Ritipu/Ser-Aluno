import React from 'react';
import './App.css';
import Plataforma from './pages/plataforma'
import ImageSlider from './components/slider/imageSlider';
import { SliderData } from './components/slider/sliderData';

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
				<div>
					<div className="navbar">
						<img className="navbar-logo" src="/logo.png" height="40px" alt="Ser Aluno" />
						<div className="navbar-btn">
							<button className="auth-login" onClick={this.acessPlatform}>Login</button>
							<button className="auth-gov" onClick={this.acessPlatform}>
								<img src="https://www.autenticacao.gov.pt/o/autenticacao-gov-theme/images/logo/logo-ag.svg"
									alt="Logo Autenticação Gov" />
							</button>
						</div>

					</div>
					<div className="body">
						<ImageSlider slides={SliderData} />
					</div>
					<div className="footer">
						<img src="/logos/portoEditora.png" height="60px" />
						<img src="/logos/agaKhan.png" height="60px" />
						<img src="/logos/Logo_Portugal_2020.png" height="60px" />
						<img src="/logos/logo_segurancaSocial.png" height="60px" />
						<img src="/logos/republica.png" height="60px" />
						<img src="/logos/uniaoEuropeia.png" height="60px" />
					</div>
				</div>
			);
		} else {
			return (
				<div>
					<Plataforma logout={() => this.logout()} />
				</div>
			)
		}

	}

}


