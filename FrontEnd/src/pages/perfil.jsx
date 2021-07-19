import React from 'react';
import '../css/perfil.css';
import { Formik, Field } from "formik";

export default class Perfil extends React.Component {
    render() {
        return (
            <section className="colDir">
                <div className="perfilContainer">
                    <Formik
                        initialValues={{ username: '', password: '' }}
                        
                    >
                        {
                            ({ handleSubmit }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-label">
                                            <label>First Name</label>
                                        </div>
                                        <div className="form-field">
                                            <Field name="username" />
                                        </div>        
                                    </div>
                                    <div className="form-row">
                                        <div className="form-label">
                                            <label>Password</label>
                                        </div>
                                        <div className="form-field">
                                            <Field name="password" type="password" />
                                        </div>        
                                    </div>                                                                                 
                                </form>
                            )
                        }
                    </Formik>
                    Que é que estás aqui a fazer zé
                </div>
            </section>

        )
    }
}