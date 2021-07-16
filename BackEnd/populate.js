const {
    insereAluno,
    closeConnection
} 
= require('./data/db')

const arr = [
    {username: 'Aluno1', password: '123'},
    {username: 'Aluno2', password: '123'} // Será que temos que insere o ano com o aluno?

];

async function insert() {
    for (const user of arr) {
        await insereAluno(user)
    }
    closeConnection()
}

insert().then(() => console.log('done'))