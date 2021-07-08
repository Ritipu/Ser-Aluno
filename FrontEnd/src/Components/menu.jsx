import React from 'react';
import { Avatar } from '@material-ui/core'
import './menu.css'

export default class Menu extends React.Component {
    render() {
        return (
            <section className="colEsq">

                <div className="aluno">
                    <Avatar src="/avatar.jpg" id="icon" alt="avatar"/>
                    <h2>Aluno</h2>
                    <span>Ano lectivo</span>
                </div>

                <div className="controlos">  
                    <button className="btnMenu" onClick={this.props.dashboard}>Dashboard</button>
                    <button className="btnMenu" onClick={this.props.livros}>Livros</button>
                    <button className="btnMenu" onClick={this.props.perfil}>Perfil</button>
                </div>


                <div className="rodape">
                    <button className="btnMenu" onClick={this.props.logout}>Logout</button>

                    <br />
                    <img src="/logo3.png" height="75px" alt="serAluno"/>
                </div>

            </section>
        )
    }
}