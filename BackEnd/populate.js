const {
    insereAluno,
    closeConnection
} 
= require('./data/db')

const arr = [
    {username: 'Sofia de Carvalho', password: '1234'},
];

async function insert() {
    for (const user of arr) {
        await insereAluno(user)
    }
    closeConnection()
}

insert().then(() => console.log('done'))