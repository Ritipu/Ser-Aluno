const {insereAluno, closeConnection} = require('./data/db')

const arr = [
    {username: 'b', password: 'a'}
];

async function insert() {
    for (const user of arr) {
        await insereAluno(user)
    }
    closeConnection()
}

insert().then(() => console.log('done'))