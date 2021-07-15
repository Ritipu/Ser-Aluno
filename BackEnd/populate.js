const {
    insereAluno,
    /* obtemAluno,  */
    closeConnection
} 
= require('./data/db')

const arr = [
    {username: 'Aluno1', password: '123'},
    {username: 'Aluno2', password: '123'}

];

async function insert() {
    for (const user of arr) {
        await insereAluno(user)
    }
    closeConnection()
}

//Ver o problema e analisar

/* async function getAluno() {
    for (const user of arr) {
        await obtemAluno(user)
    }
    closeConnection()
} */

insert().then(() => console.log('done'))