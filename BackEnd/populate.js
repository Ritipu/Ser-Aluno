const {insereAluno, closeConnection} = require('./data/db')

const arr = [
    {username: 'Aluno1', password: '123'}
];

async function insert() {
    for (const user of arr) {
        await insereAluno(user)
    }
    closeConnection()
}

insert().then(() => console.log('done'))