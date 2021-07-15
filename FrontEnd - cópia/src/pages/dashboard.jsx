import React from 'react';
import Horario from './horario'
import '../css/dashboard.css'

export default class Dashboard extends React.Component {

    render() {
        return (
            <section className="colDir">
                <div className="horario">
                    <Horario />
                </div>
                <div className="inferior">
                    <div className="infEsq">
                        Notas anteriores nas disciplinas?
                        (Quadro de Honra?)
                        (Top 5?)
						</div>

                    <div className="infDir">
                        Lado Direito
						</div>
                </div>
            </section>
        )
    }

}