import React from 'react';
import './plataforma.css'
import Menu from './menu'
import Dashboard from './dashboard'
import Livros from './livros'

export default class Plataforma extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			controlador: 0
		}
	}

	dashboard() {
		this.setState({controlador: 0});
	}

	livros() {
		this.setState({controlador: 1});
	}
	render() {
		if (this.state.controlador === 0) {
			return (
				<div className="viewport">
					<Menu dashboard={() => this.dashboard()}
					livros={() => this.livros()} 
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
					logout={this.props.logout}/>
					<Livros />
				</div>
			)
		}
	}

}