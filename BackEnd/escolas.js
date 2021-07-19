const {
    insereEscola,
    closeConnection
} 
= require('./data/db')

const arr = [
    {name: 'Cardoso Lopes', location: 'Amadora'}
];

async function insert() {
    for (const escola of arr) {
        await insereEscola(escola)
    }
    closeConnection()
}

insert().then(() => console.log('done'))