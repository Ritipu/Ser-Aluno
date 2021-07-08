import React from 'react';
import './plataforma.css'
import Menu from './menu'
import Dashboard from './dashboard'
import LivrosPage from './livrosPage'
import Perfil from './perfil'

export default class Plataforma extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			controlador: 0,
			controladorLivros: "Home"
		}
	}

	dashboard() {
		this.setState({controlador: 0});
	}

	livros() {
		this.setState({controlador: 1});
		this.setState({controladorLivros: "Home"});
	}

	perfil() {
		this.setState({controlador: 2});
	}

	livrosMatematica() {
		this.setState({controladorLivros: "Matematica"});
	}

	render() {
		if (this.state.controlador === 0) {
			return (
				<div className="viewport">
					<Menu dashboard={() => this.dashboard()}
					livros={() => this.livros()}
					perfil={() => this.perfil()}
					logout={this.props.logout}/>
					<Dashboard/>
				</div>
			)
		}

		if (this.state.controlador === 1) {
			return (
				<div className="viewport">
					<Menu dashboard={() => this.dashboard()}
					livros={() => this.livros()} 
					perfil={() => this.perfil()}
					logout={this.props.logout}
					/>
					<LivrosPage state={this.state.controladorLivros}
					livrosMatematica={() => this.livrosMatematica()}
					/>
				</div>
			)
		}
		if (this.state.controlador === 2) {
			return (
				<div className="viewport">
					<Menu dashboard={() => this.dashboard()}
					livros={() => this.livros()}
					perfil={() => this.perfil()}
					logout={this.props.logout}
					/>
					<Perfil />
				</div>
			)
		}
	}

}