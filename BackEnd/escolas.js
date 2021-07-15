const {
    insereEscola,
    closeConnection
} 
= require('./data/db')

const arr = [
    {name: 'Cardoso Lopes', location: 'Amadora'}
];

async function insert() {
    for (const school of arr) {
        await insereEscola(school)
    }
    closeConnection()
}

insert().then(() => console.log('done'))