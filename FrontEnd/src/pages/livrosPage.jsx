import React, { useState } from 'react';
import Livro from './livro';
import { Card, CardActionArea, CardMedia, CardContent, CardActions } from '@material-ui/core'
import '../css/livrosPage.css'

function ObjLivro(props) {
	const [selector, setSelector] = useState("didatico")
	return (
		<Card>
			<CardActionArea disabled={selector === ''}
				onClick={() => {
					const livro = selector === 'didatico' ? props.livro.livro : props.livro.livroEx
					const livroEx = selector === 'didatico' ? props.livro.livroEx : props.livro.livro
					props.readLivro(livro, livroEx)
				}}>
				<CardMedia
					component="img"
					image={selector === 'didatico' ? props.livro.preview : props.livro.previewEx}
					alt="livroMatematica"
				/>
				<CardContent>
					<h3>{props.livro.subject}</h3>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<button id="card-btn-1" onClick={() => setSelector('didatico')}>Didático</button>
				<button id="card-btn-2" onClick={() => setSelector('exercicios')}>Exercicios</button>
			</CardActions>
		</Card>
	)
}

export default class LivrosPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			livros: [
				{
					subject: 'Matemática',
					livro: '/livros/5ano/matematicaDidatica.pdf',
					livroEx: '/livros/5ano/matematicaExercicios.pdf',
					preview: '/livros/5ano/matematicaDidatica.jpg',
					previewEx: '/livros/5ano/matematicaExercicios.jpg'
				},
				{
					subject: 'Português',
					livro: '/livros/5ano/portuguesDidatica.pdf',
					livroEx: '/livros/5ano/portuguesExercicios.pdf',
					preview: '/livros/5ano/portuguesDidatica.jpg',
					previewEx: '/livros/5ano/portuguesExercicios.jpg'
				},
				{
					subject: 'Ingles',
					livro: '/livros/5ano/inglesDidatica.pdf',
					livroEx: '/livros/5ano/inglesExercicios.pdf',
					preview: '/livros/5ano/inglesDidatica.jpg',
					previewEx: '/livros/5ano/inglesExercicios.jpg'
				},
				{
					subject: 'Historia e Geografia',
					livro: '/livros/5ano/historiaDidatica.pdf',
					livroEx: '/livros/5ano/historiaExercicios.pdf',
					preview: '/livros/5ano/historiaDidatica.jpg',
					previewEx: '/livros/5ano/historiaExercicios.jpg'
				},
				{
					subject: 'Ciências Naturais',
					livro: '/livros/5ano/cienciaDidatica.pdf',
					livroEx: '/livros/5ano/cienciaExercicios.pdf',
					preview: '/livros/5ano/cienciaDidatica.jpg',
					previewEx: '/livros/5ano/cienciaExercicios.jpg'
				}
			]
		}

	}

	render() {
		if (this.props.state === "Home") {
			return (
				<section className="colDir">
					<div className="fullRow">
						{
							this.state.livros.map(l => (
								<ObjLivro
									key={l.subject}
									readLivro={(livro, livroEx) => {
										this.setState({ livro, livroEx })
										this.props.readLivro()
									}}
									livro={l} />
							))
						}
					</div>
				</section>
			)
		}

		if (this.props.state === "readLivro") {
			return (
				<Livro livroCorreto={this.state.livro} livroSecundario={this.state.livroEx} />
			)
		}
	}
}