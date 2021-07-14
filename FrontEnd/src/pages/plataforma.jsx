import React from 'react';
import '../css/plataforma.css'
import Menu from './menu'
import Dashboard from './dashboard'
import LivrosPage from './livrosPage'
import Perfil from './perfil'

const AUTH_TOKEN_KEY = "token"

export default class Plataforma extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			controlador: 0,
			controladorLivros: "Home",
			anoLetivo: ""
		}
	}

	dashboard() {
		this.setState({ controlador: 0 });
	}

	homePageLivros() {
		this.setState({ controlador: 1 });
		this.setState({ controladorLivros: "Home" });
	}

	anoLetivo() {
		fetch('/obtemAnoLetivo') // GET
			.then(res => res.json())
			.then(ano => this.setState({ anoLetivo: ano }));
	}

	perfil() {
		this.setState({ controlador: 2 });
	}

	readLivro() {
		this.setState({ controladorLivros: "readLivro" });
	}

	render() {
		if (this.state.controlador === 0) {
			return (
				<div className="viewport">
					<Menu dashboard={() => this.dashboard()}
						homePageLivros={() => this.homePageLivros()}
						perfil={() => this.perfil()}
						anoLetivo={this.state.anoLetivo}
						getAnoLetivo={() => this.anoLetivo()}
						logout={this.props.logout} />
					<Dashboard />
				</div>
			)
		}

		if (this.state.controlador === 1) {
			return (
				<div className="viewport">
					<Menu dashboard={() => this.dashboard()}
						homePageLivros={() => this.homePageLivros()}
						perfil={() => this.perfil()}
						anoLetivo={this.state.anoLetivo}
						getAnoLetivo={() => this.anoLetivo()}
						logout={this.props.logout}
					/>
					<LivrosPage state={this.state.controladorLivros}
						readLivro={() => this.readLivro()}
					/>
				</div>
			)
		}
		if (this.state.controlador === 2) {
			return (
				<div className="viewport">
					<Menu dashboard={() => this.dashboard()}
						homePageLivros={() => this.homePageLivros()}
						perfil={() => this.perfil()}
						anoLetivo={this.state.anoLetivo}
						getAnoLetivo={() => this.anoLetivo()}
						logout={this.props.logout}
					/>
					<Perfil />
				</div>
			)
		}
	}

}