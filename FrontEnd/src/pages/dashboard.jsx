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
			professoresState: []
		}
	}

	componentDidMount() {
		this.getProfessores();
	}

	async getProfessores() {
		await fetch("/api/professores", {
			method: "GET",
			contentType: "application/json"
		})
			.then(res => res.json())
			.then(arrayProfessores => console.log(arrayProfessores))
	}

	/*
	this.setState({
				professoresState: arrayProfessores.professores
			})
	*/
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
								this.state.professoresState.map(d => (
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