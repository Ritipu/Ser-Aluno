import React from 'react';
import { Avatar } from '@material-ui/core'
import '../css/menu.css'

export default class Menu extends React.Component {

    componentDidMount() {
        this.props.getAnoLetivo()
    } 
    render() {
        return (
            <section className="colEsq">

                <div className="aluno">
                    <Avatar src="/avatar.jpg" id="icon" alt="avatar"/>
                    <h2>Aluno</h2>
                    <span>{this.props.anoLetivo}</span>
                    <p>Escola Alberto Joaquim</p>
                </div>

                <div className="controlos">  
                    <button className="btnMenu" onClick={this.props.dashboard}>Dashboard</button>
                    <button className="btnMenu" onClick={this.props.homePageLivros}>Livros</button>
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