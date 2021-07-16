import React from 'react';
import '../css/plataforma.css'
import Menu from './menu'
import Dashboard from './dashboard'
import LivrosPage from './livrosPage'
import Perfil from './perfil'

export default class Plataforma extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			token: '',
			controlador: 0,
			controladorLivros: "Home",
			aluno: '',
			anoLetivo: ""
		}
	}

	componentDidMount() {
		const token = localStorage.getItem('token')
		if (token) {
			this.setState({ token: token })
		}

		console.log('Token do State: ' + this.state.token)
	}
	dashboard() {
		this.setState({ controlador: 0 });
	}

	homePageLivros() {
		this.setState({ controlador: 1 });
		this.setState({ controladorLivros: "Home" });
	}

	getAluno() {
		fetch('/api/aluno', {
			headers: {
				authorization: 'Bearer ' + this.state.token
			}
		})
			.then(res => res.json())
			.then(user => console.log(user))
	}

	anoLetivo() {

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
						aluno={this.state.aluno}
						getAluno={() => this.getAluno()}
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
						aluno={this.state.aluno}
						getAluno={() => this.getAluno()}
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
						aluno={this.state.aluno}
						getAluno={() => this.getAluno()}
						logout={this.props.logout}
					/>
					<Perfil />
				</div>
			)
		}
	}

}