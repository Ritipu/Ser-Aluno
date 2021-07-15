const mongodb = require('mongodb');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const { MongoClient } = mongodb;

const URI = "mongodb://localhost:27017"
const DB_NAME = "Ser_Aluno"
let client  

async function connect(uri) {
    try {

        if (client) return client

        client = new MongoClient(uri, {
            useUnifiedTopology: true
        })

        await client.connect();

        return client
    } catch (err) {
        console.log(err)
    }
}

function closeConnection() {
    client.close()
}

async function getCollection(dbName, collectionName) {
    const aluno = await connect(URI);
    const db = aluno.db(dbName);
    return db.collection(collectionName);
}

//Insere as escolas manualmente na escolas.js
async function insereEscola(escola) {
    const collection = await getCollection(DB_NAME, "escolas");
    const res = await collection.insertOne(escola)
    console.log(escola, res)
    return res.insertedId;
}

//Obtem as escola do utilizador
async function obtemEscola(escolas_id) {
    const collection = await getCollection(DB_NAME, "escolas");
    const res = await collection.findOne({_id: mongodb.ObjectId(escolas_id)})
    return res;
}

async function insereAluno(aluno) {
    const collection = await getCollection(DB_NAME, "alunos");
    aluno.password = await bcrypt.hash(aluno.password, saltRounds);
    const res = await collection.insertOne(aluno)
    console.log(aluno, res)
    return res.insertedId;
}

async function obtemAluno(aluno_id) {
    const collection = await getCollection(DB_NAME, "alunos");
    const res = await collection.findOne({_id: mongodb.ObjectId(aluno_id)})
    return res;
}

async function obtemAlunoPorNome(username) {
    const collection = await getCollection(DB_NAME, "alunos");
    const res = await collection.findOne({username})
    return res;
}

async function insereAnoLetivo(anoLetivo) {
    const collection = await getCollection(DB_NAME, "anoLetivo");
    const res = await collection.insertOne(anoLetivo)
    console.log(anoLetivo, res)
    return res.insertedId;
}

async function obtemAnoLetivo(anoLetivo_id) {
    const collection = await getCollection(DB_NAME, "anoLetivo");
    const res = await collection.findOne({_id: mongodb.ObjectId(anoLetivo_id)})
    return res;
}

async function insereLivros(livros) {
    const collection = await getCollection(DB_NAME, "livros");
    const res = await collection.insertOne(livros)
    console.log(livros, res)
    return res.insertedId;
}

async function obtemLivros(livros_id) {
    const collection = await getCollection(DB_NAME, "escolas");
    const res = await collection.find({_id: mongodb.ObjectId(livros_id)})
    return res;
}

async function obtemPerfil(perfil_id){
    const collection = await getCollection(DB_NAME, "escolas")
    const res = await getCollection.findOne({_id: mongodb.ObjectId(perfil_id)})
}

async function insereSessao(uid) {
    const collection = await getCollection(DB_NAME, "sessoens");
    const res = await collection.insertOne({
        uid,
        expiresAt: new Date(new Date().valueOf() + (5 * 60 * 1000))
    })
    return res.insertedId; 
}

async function obtemSessao(id) {
    const collection = await getCollection(DB_NAME, "sessoens");
    const res = await collection.findOne({_id: mongodb.ObjectId(id)})
    return res; 
}

async function sessaoProlongada(id) {
    const collection = await getCollection(DB_NAME, "sessoens");
    const res = await collection.updateOne(
        {_id: mongodb.ObjectId(id)},
        {
            $set: {
                expiresAt: new Date(new Date().valueOf() + (5 * 60 * 1000))
            }
        }
    )
    return res; 
}

module.exports = {
    insereEscola,
    obtemEscola,
    insereAluno,
    obtemAluno,
    obtemAlunoPorNome,
    insereAnoLetivo,
    obtemAnoLetivo,
    insereLivros,
    obtemLivros,
    obtemPerfil,
    insereSessao,
    obtemSessao,
    sessaoProlongada,
    closeConnection
}