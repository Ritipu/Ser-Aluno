const mongodb = require('mongodb');
const { MongoClient } = mongodb;

const URI = "mongodb://localhost:27017"
const DB_NAME = "auth-demo"
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

async function getCollection(dbName, collectionName) {
    const client = await connect(URI);
    const db = client.db(dbName);
    return db.collection(collectionName);
}

// async function insertUser(user) {
//     const collection = await getCollection(DB_NAME, "users");
//     user.password = await bcrypt.hash(user.password, saltRounds)
//     const res = await collection.insertOne(user);
//     return res.insertedId;
// }

module.exports = { 
    
}