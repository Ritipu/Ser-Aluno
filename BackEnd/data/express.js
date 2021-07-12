const express = require('express');
 const { 
    insereAluno,
    obtemAluno,
    obtemAnoLetivo,
    obtemLivros,
    obtemPerfil,
    insereSessao,
    obtemSessao,
    sessaoPrelongada  
} = require('./db');

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
    const aluno = await findUser(username);
    if (aluno && await bcrypt.compare(password, aluno.password)) {
        const sessionId = await insertSession(aluno._id)
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
        const session = await findSession(auth[1])
        if (session && session.expiresAt > new Date()) {
            await extendSession(session._id)
            req.user = await findUserById(session.uid);
            next()
        } else {
            res.sendStatus(401)
        }
    } else {
        res.sendStatus(401)
    }
}

server.get("/aluno", verificaAluno, async (req, res) => {
    res.status(200).json({ aluno: req.aluno.nome })
})

server.post("/aluno", async (req, res) => {
    const id = await insereAluno(req.body)
    res.status(200).json({ id })
})

server.get('/obtemAnoLetivo', (req, res) => {
    anoLetivo = '5º Ano'
    res.status(200).json(anoLetivo)
})

server.post("/obtemLivros", async (req, res) => {
    const livros = await obtemLivros(req.body)
    
    if (anoLetivo) {
        const anoLetivo = await obtemAnoLetivo(anoLetivo._anoLetivo)
    } else {
        res.sendStatus(401)
    }
    res.status(200).json({ livros })
})

server.post("/obtemPerfil", async (req, res) => {
    const id = await req.params.obtemPerfil(_id)
    res.status(200).json({ id })
})

// Tentar perceber como fazer
/* server.get('/obtemLivros', (req, res) => {
    res.status(200).json({ anoLetivo: req.anoLetivo.livros })
}) */



server.listen(PORT, () => console.log('À escuta em ' + PORT));