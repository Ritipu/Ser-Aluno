import React from 'react';
import { Avatar } from '@material-ui/core'

export default class Menu extends React.Component {
    render() {
        return (
            <section className="colEsq">

                <div className="aluno">
                    <Avatar src="/avatar.jpg" id="icon" />
                    <h2>Aluno</h2>
                    <span>Ano lectivo</span>
                </div>

                <div className="controlos">
                    <button onClick={this.props.dashboard}>Dashboard</button>
                    <button onClick={this.props.livros}>Livros</button>
                </div>


                <div className="rodape">
                    <button onClick={this.props.logout}>Logout</button>

                    <br />
                    <img src="/logo3.png" height="75px" />
                </div>

            </section>
        )
    }
}