import React from 'react';
import Livros from './livros';
import { Card, CardActionArea, CardMedia, CardContent, CardActions } from '@material-ui/core'
import './livrosPage.css'
export default class LivrosPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (this.props.state === "Home") {
			return (
				<section className="colDir">
					<div className="row">
							<Card>
								<CardActionArea onClick={this.props.livrosMatematica}>
									<CardMedia
										component="img"
										image="/livro.jpg"
										alt="livroMatematica"

									/>
									<CardContent>
										<h3>Matemática</h3>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<button>Didático</button>
									<button>Exercicios</button>
								</CardActions>
							</Card>
							
						<Card>
							<CardActionArea onClick={this.props.livrosMatematica}>
								<CardMedia
									component="img"
									image="/livro.jpg"
									alt="livroMatematica"

								/>
								<CardContent>
									<h3>Matemática</h3>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<button>Didático</button>
								<button>Exercicios</button>
							</CardActions>
						</Card>
						<Card>
							<CardActionArea onClick={this.props.livrosMatematica}>
								<CardMedia
									component="img"
									image="/livro.jpg"
									alt="livroMatematica"

								/>
								<CardContent>
									<h3>Matemática</h3>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<button>Didático</button>
								<button>Exercicios</button>
							</CardActions>
						</Card>
						<Card>
							<CardActionArea onClick={this.props.livrosMatematica}>
								<CardMedia
									component="img"
									image="/livro.jpg"
									alt="livroMatematica"

								/>
								<CardContent>
									<h3>Matemática</h3>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<button>Didático</button>
								<button>Exercicios</button>
							</CardActions>
						</Card>
						<Card>
							<CardActionArea onClick={this.props.livrosMatematica}>
								<CardMedia
									component="img"
									image="/livro.jpg"
									alt="livroMatematica"

								/>
								<CardContent>
									<h3>Matemática</h3>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<button>Didático</button>
								<button>Exercicios</button>
							</CardActions>
						</Card>
					</div>
					<div className="row">
						<Card>
							<CardActionArea onClick={this.props.livrosMatematica}>
								<CardMedia
									component="img"
									image="/livro.jpg"
									alt="livroMatematica"

								/>
								<CardContent>
									<h3>Matemática</h3>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<button>Didático</button>
								<button>Exercicios</button>
							</CardActions>
						</Card>
						<Card>
							<CardActionArea onClick={this.props.livrosMatematica}>
								<CardMedia
									component="img"
									image="/livro.jpg"
									alt="livroMatematica"

								/>
								<CardContent>
									<h3>Matemática</h3>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<button>Didático</button>
								<button>Exercicios</button>
							</CardActions>
						</Card>
						<Card>
							<CardActionArea onClick={this.props.livrosMatematica}>
								<CardMedia
									component="img"
									image="/livro.jpg"
									alt="livroMatematica"

								/>
								<CardContent>
									<h3>Matemática</h3>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<button>Didático</button>
								<button>Exercicios</button>
							</CardActions>
						</Card>
						<Card>
							<CardActionArea onClick={this.props.livrosMatematica}>
								<CardMedia
									component="img"
									image="/livro.jpg"
									alt="livroMatematica"

								/>
								<CardContent>
									<h3>Matemática</h3>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<button>Didático</button>
								<button>Exercicios</button>
							</CardActions>
						</Card>
						<Card>
							<CardActionArea onClick={this.props.livrosMatematica}>
								<CardMedia
									component="img"
									image="/livro.jpg"
									alt="livroMatematica"

								/>
								<CardContent>
									<h3>Matemática</h3>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<button>Didático</button>
								<button>Exercicios</button>
							</CardActions>
						</Card>
					</div>
				</section>
			)
		}

		if (this.props.state === "Matematica") {
			return (
				<Livros />
			)
		}
	}
}