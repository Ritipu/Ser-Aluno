import React from 'react';
import { Avatar } from '@material-ui/core'
import Horario from './horario'
import '../css/dashboard.css'

function Professor(props) {
	return (
		<div className="prof">
			<Avatar src={props.avatar} id="icon" alt="avatar" />
			<div>
				<h3>{props.name}</h3>
				<h4>Prof. {props.disciplinas}</h4>
				<p>{props.email}</p>
			</div>
		</div>
	)
}
export default class Dashboard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			professores: [
				{ name: 'Joaquim', disciplina: 'Matemática', email: 'joaquim@gmail.com', avatar: '/avatar.jpg'},
				{ name: 'Alberto', disciplina: 'Português', email: 'alberto@gmail.com', avatar: '/avatar.jpg' },
				{ name: 'Sara', disciplina: 'Inglês', email: 'sara@gmail.com', avatar: '/avatar.jpg' },
				{ name: 'Maria', disciplina: 'História', email: 'maria@gmail.com', avatar: '/avatar.jpg' },
				{ name: 'Guilherme', disciplina: 'Ciências', email: 'guilherme@gmail.com', avatar: '/avatar.jpg' }
			]
		}
	}

	// metodo de fetch GET
	//response = profs todos
	//this.setState({professores: response })

	render() {
		return (
			<section className="colDir">
				<div className="superior">
					<div className="horario">
						<div className="heading4">
							<h3>Horário</h3>
						</div>
						<Horario />
					</div>
					<div className="eventos">
						<div className="heading2">
							<h3>Eventos</h3>
						</div>
					</div>
				</div>
				<div className="inferior">
					<div className="infEsq">
						<div className="heading3">
							<h3>TPC (Trabalhos para Casa)</h3>
						</div>
					</div>

					<div className="infDir">
						<div className="heading1">
							<h3>Professores</h3>
						</div>
						<div className="profs">
							{
								this.state.professores.map(d => (
									<Professor
										name={d.name}
										disciplinas={d.disciplina}
										email={d.email}
										avatar={d.avatar}
									/>
								))
							}
						</div>

					</div>
				</div>
			</section>
		)
	}

}	