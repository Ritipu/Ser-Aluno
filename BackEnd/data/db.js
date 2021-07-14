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

async function obtemEscola(escolas) {
    const collection = await getCollection(DB_NAME, "escolas");
    const res = await collection.findOne({_escola: mongodb.ObjectId(escolas)})
    return res;
}

async function insereAluno(aluno) {
    const collection = await getCollection(DB_NAME, "escolas");
    aluno.password = await bcrypt.hash(aluno.password, saltRounds);
    const res = await collection.insertOne(aluno)
    console.log(aluno, res)
    return res.insertedId;
}

async function obtemAluno(id) {
    const collection = await getCollection(DB_NAME, "escolas");
    const res = await collection.findOne({_id: mongodb.ObjectId(id)})
    return res;
}

async function obtemAlunoPorNome(username) {
    const collection = await getCollection(DB_NAME, "escolas");
    const res = await collection.findOne({username})
    return res;
}

async function obtemAnoLetivo(anoLetivo) {
    const collection = await getCollection(DB_NAME, "escolas");
    const res = await collection.findOne({_anoLetivo: mongodb.ObjectId(anoLetivo)})
    return res;
}

//Resolver 

/* async function obtemAnoLetivoById(anoLetivo) { 
    const collection = await getCollection(DB_NAME, "escolas");
    return
} */

async function obtemLivros(livros) {
    const collection = await getCollection(DB_NAME, "escolas");
    const res = await collection.findOne({_livros: mongodb.ObjectId(livros)})
    return res;
}

async function obtemPerfil(id){
    const collection = await getCollection(DB_NAME, "escolas")
    const res = await getCollection.findOne({_id: mongodb.ObjectId(id)})
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
    obtemEscola, 
    insereAluno,
    obtemAluno,
    obtemAlunoPorNome,
    obtemAnoLetivo,
    obtemLivros,
    obtemPerfil,
    insereSessao,
    obtemSessao,
    sessaoProlongada,
    closeConnection
}