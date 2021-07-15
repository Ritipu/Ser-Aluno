import React from 'react';
import { Avatar } from '@material-ui/core'
import Horario from './horario'
import '../css/dashboard.css'

function Professor(props) {
	return (
		<div className="prof">
			<Avatar src="/avatar.jpg" id="icon" alt="avatar" />
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
				{ name: 'Joaquim', disciplina: 'Matemática', email: 'joaquim@gmail.com' },
				{ name: 'Alberto', disciplina: 'Português', email: 'alberto@gmail.com' },
				{ name: 'Sara', disciplina: 'Inglês', email: 'sara@gmail.com' },
				{ name: 'Maria', disciplina: 'História', email: 'maria@gmail.com' },
				{ name: 'Guilherme', disciplina: 'Ciências', email: 'guilherme@gmail.com' }
			]
		}
	}

	render() {
		return (
			<section className="colDir">
				<div className="superior">
					<div className="horario">
						<h3>Horário</h3>
						<Horario />
					</div>
					<div className="eventos">
						<h3>Eventos</h3>
					</div>
				</div>
				<div className="inferior">
					<div className="infEsq">
						<h3>TPC (Trabalhos para Casa)</h3>
					</div>

					<div className="infDir">
						<h3>Professores</h3>
						<div className="profs">
							{
								this.state.professores.map(d => (
									<Professor
										name={d.name}
										disciplinas={d.disciplina}
										email={d.email}
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