import React from 'react';
import Livro from './livro';
import { Card, CardActionArea, CardMedia, CardContent, CardActions } from '@material-ui/core'
import '../css/livrosPage.css'

export default class LivrosPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			livro: '',
			matematicaPreview: '/livros/5ano/matematicaDidatica.jpg',
			portuguesPreview: '/livros/5ano/portuguesDidatica.jpg',
			inglesPreview: '/livros/5ano/inglesDidatica.jpg',
			historiaPreview: '/livros/5ano/historiaDidatica.jpg',
			cienciaPreview: '/livros/5ano/cienciaDidatica.jpg'
		}
	}

	didaticoMatematica() {
		this.setState({
			livro: '/livros/5ano/matematicaDidatica.pdf',
			matematicaPreview: '/livros/5ano/matematicaDidatica.jpg'
		})
	}

	exerciciosMatematica() {
		this.setState({
			livro: '/livros/5ano/matematicaExercicios.pdf',
			matematicaPreview: '/livros/5ano/matematicaExercicios.jpg'
		})
	}

	didaticoPortugues() {
		this.setState({
			livro: '/livros/5ano/portuguesDidatica.pdf',
			portuguesPreview: '/livros/5ano/portuguesDidatica.jpg'
		})
	}

	exerciciosPortugues() {
		this.setState({
			livro: '/livros/5ano/portuguesExercicios.pdf',
			portuguesPreview: '/livros/5ano/portuguesExercicios.jpg'
		})
	}

	didaticoIngles() {
		this.setState({
			livro: '/livros/5ano/inglesDidatica.pdf',
			inglesPreview: '/livros/5ano/inglesDidatica.jpg'
		})
	}

	exerciciosIngles() {
		this.setState({
			livro: '/livros/5ano/inglesExercicios.pdf',
			inglesPreview: '/livros/5ano/inglesExercicios.jpg'
		})
	}

	didaticoHistoria() {
		this.setState({
			livro: '/livros/5ano/historiaDidatica.pdf',
			historiaPreview: '/livros/5ano/historiaDidatica.jpg'
		})
	}

	exerciciosHistoria() {
		this.setState({
			livro: '/livros/5ano/historiaExercicios.pdf',
			historiaPreview: '/livros/5ano/historiaExercicios.jpg'
		})
	}

	didaticoCiencia() {
		this.setState({
			livro: '/livros/5ano/cienciaDidatica.pdf',
			cienciaPreview: '/livros/5ano/cienciaDidatica.jpg'
		})
	}

	exerciciosCiencia() {
		this.setState({
			livro: '/livros/5ano/cienciaExercicios.pdf',
			cienciaPreview: '/livros/5ano/cienciaExercicios.jpg'
		})
	}

	render() {
		if (this.props.state === "Home") {
			return (
				<section className="colDir">
					<div className="fullRow">
						<Card>
							<CardActionArea disabled={this.state.livro === '' ? true : false} 
							onClick={this.props.readLivro}>
								<CardMedia
									component="img"
									image={this.state.matematicaPreview}
									alt="livroMatematica"
								/>
								<CardContent>
									<h3>Matemática</h3>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<button onClick={() => this.didaticoMatematica()}>Didático</button>
								<button onClick={() => this.exerciciosMatematica()}>Exercicios</button>
							</CardActions>
						</Card>
						<Card>
							<CardActionArea disabled={this.state.livro === '' ? true : false} 
							onClick={this.props.readLivro}>
								<CardMedia
									component="img"
									image={this.state.portuguesPreview}
									alt="livroPortugues"
								/>
								<CardContent>
									<h3>Português</h3>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<button onClick={() => this.didaticoPortugues()}>Didático</button>
								<button onClick={() => this.exerciciosPortugues()}>Exercicios</button>
							</CardActions>
						</Card>
						<Card>
							<CardActionArea disabled={this.state.livro === '' ? true : false} 
							onClick={this.props.readLivro}>
								<CardMedia
									component="img"
									image={this.state.inglesPreview}
									alt="livroIngles"
								/>
								<CardContent>
									<h3>Inglês</h3>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<button onClick={() => this.didaticoIngles()}>Didático</button>
								<button onClick={() => this.exerciciosIngles()}>Exercicios</button>
							</CardActions>
						</Card>
						<Card>
							<CardActionArea disabled={this.state.livro === '' ? true : false} 
							onClick={this.props.readLivro}>
								<CardMedia
									component="img"
									image={this.state.historiaPreview}
									alt="livroHistoria"
								/>
								<CardContent>
									<h3>Historia e Geografia</h3>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<button onClick={() => this.didaticoHistoria()}>Didático</button>
								<button onClick={() => this.exerciciosHistoria()}>Exercicios</button>
							</CardActions>
						</Card>
						<Card>
							<CardActionArea disabled={this.state.livro === '' ? true : false} 
							onClick={this.props.readLivro}>
								<CardMedia
									component="img"
									image={this.state.cienciaPreview}
									alt="livroCiencia"
								/>
								<CardContent>
									<h3>Ciências Naturais</h3>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<button onClick={() => this.didaticoCiencia()}>Didático</button>
								<button onClick={() => this.exerciciosCiencia()}>Exercicios</button>
							</CardActions>
						</Card>
					</div>
					
				</section>
			)
		}

		if (this.props.state === "readLivro") {
			return (
				<Livro livroCorreto={this.state.livro} />
			)
		}
	}
}