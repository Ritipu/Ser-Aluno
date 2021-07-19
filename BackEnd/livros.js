const {
    insereLivros,
    closeConnection
} 
= require('./data/db')

const arrlivros = [
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

async function insert() {
    for (const livros of arrlivros) {
        await insereLivros(livros)
    }
    closeConnection()
}

insert().then(() => console.log('done'))