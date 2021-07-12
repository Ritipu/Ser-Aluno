const mongodb = require('mongodb');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const { MongoClient } = mongodb;

const URI = "mongodb://localhost:27017"
const DB_NAME = "Ser_Aluno"
let aluno  

async function connect(uri) {
    try {

        if (aluno) return aluno

        aluno = new MongoClient(uri, {
            useUnifiedTopology: true
        })

        await aluno.connect();

        return aluno
    } catch (err) {
        console.log(err)
    }
}

async function getCollection(dbName, collectionName) {
    const aluno = await connect(URI);
    const db = aluno.db(dbName);
    return db.collection(collectionName);
}

async function insereAluno(aluno) {
    const collection = await getCollection(DB_NAME, "alunos");
    aluno.password = await bcrypt.hash(aluno.password, saltRounds);
    const res = await collection.insertOne(user)
    return res.insertedId;
}

async function obtemAluno(id) {
    const collection = await getCollection(DB_NAME, "alunos");
    const res = await collection.findOne({_id: mongodb.ObjectId(id)})
    return res;
}

async function obtemAnoLetivo(anoLetivo) {
    const collection = await getCollection(DB_NAME, "alunos");
    const res = await collection.findOne({_anoLetivo: mongodb.ObjectId(anoLetivo)})
    return res;
}

async function obtemLivros(livros) {
    const collection = await getCollection(DB_NAME, "alunos");
    const res = await collection.findOne({_livros: mongodb.ObjectId(livros)})
    return res;
}

async function obtemPerfil(id){
    const collection = await getCollection(DB_NAME, "alunos")
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

async function sessaoPrelongada(id) {
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

// async function insertUser(user) {
//     const collection = await getCollection(DB_NAME, "users");
//     user.password = await bcrypt.hash(user.password, saltRounds)
//     const res = await collection.insertOne(user);
//     return res.insertedId;
// }

module.exports = { 
    insereAluno,
    obtemAluno,
    obtemAnoLetivo,
    obtemLivros,
    obtemPerfil,
    insereSessao,
    obtemSessao,
    sessaoPrelongada    
}