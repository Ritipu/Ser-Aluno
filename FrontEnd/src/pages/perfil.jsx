import React from 'react';
import '../css/perfil.css';
import { Formik, Field } from "formik";

export default class Perfil extends React.Component {

	render() {
		return (
			<section className="colDir">
				<div className="perfilContainer">
					<Formik
						initialValues={{ username: '', password: '1234' }}
					>
						{
							({ handleSubmit }) => (
								<form onSubmit={handleSubmit}>
									<div className="form-row">
										<label>First Name</label>
										<Field name="username" type="text" placeholder="Nome do Aluno"/>
									</div>

									<div className="form-row">
										<label>Password</label>
										<Field name="password" type="password"/>
									</div>
								</form>
							)
						}
					</Formik>
				</div>
			</section >
		)
	}
}