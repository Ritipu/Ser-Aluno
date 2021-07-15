const express = require('express');
 const { 
    insereEscola,
    obtemEscola,
    insereAluno,
    obtemAluno,
    obtemAlunoPorNome,
    insereAnoLetivo,
    obtemAnoLetivo,
    insereLivros,
    obtemLivros,
    obtemLivro,
    insereSessao,
    obtemSessao,
    sessaoProlongada
} = require('./data/db');

const bcrypt = require('bcrypt');

const PORT = 3001;
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({
        message: 'Working'
    })
})

server.post("/auth", async (req, res) => {
    const { username, password } = req.body;
    const aluno = await obtemAlunoPorNome(username);

    if (aluno && await bcrypt.compare(password, aluno.password)) {
        const sessionId = await insereSessao(aluno.aluno_id)
        res.status(200).json({ token: sessionId })
    } else {
        res.sendStatus(404)
    }
})

async function verificaAluno(req, res, next) {
    console.log(req.headers)
    const auth = req.headers.authorization?.split(' ') ?? []
    console.log(auth)
    if (auth.length > 0) {
        const session = await obtemSessao(auth[1])
        if (session && session.expiresAt > new Date()) {
            await sessaoProlongada(session._id)
            req.user = await obtemAluno(session.uid);
            next()
        } else {
            res.sendStatus(401)
        }
    } else {
        res.sendStatus(401)
    }
}

server.get("/escolas/:id", async (req, res) => {
    const escolas = await obtemEscola(req.params.id)
    res.status(200).json({ escolas })
})

server.post("/escolas", async (req, res) => {
    const escolas = await insereEscola(req.body)
    res.status(200).json({ escolas })
})

server.get("/aluno", verificaAluno, async (req, res) => {
    res.status(200).json({ user: req.user })
})

server.post("/aluno", async (req, res) => {
    const id = await insereAluno(req.body)
    res.status(200).json({ id })
})

server.get('/anoLetivo/:id', async (req, res) => {
    const anoLetivo = await obtemAnoLetivo(req.params.id)
    res.status(200).json({ anoLetivo })
})

server.post('/anoLetivo', async (req, res) => {
    const anoLetivo = await insereAnoLetivo(req.body)
    res.status(200).json({ anoLetivo })
})

server.get('/livros', async (req, res) => {
    const livros = await obtemLivros()
    console.log(livros)
    res.status(200).json({ livros })
})

server.get('/livros/:id', async (req, res) => {
    const livros = await obtemLivros(req.params.id)
    console.log(livros)
    res.status(200).json({ livros })
})

server.post("/livros", async (req, res) => {
    const livros = await insereLivros(req.body)
    res.status(200).json({ livros })
})

server.listen(PORT, () => console.log('À escuta em ' + PORT));