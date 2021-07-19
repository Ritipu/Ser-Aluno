const {
    insereAluno,
    closeConnection
} 
= require('./data/db')

const arr = [
    {
        username: 'Sofia de Carvalho', 
        password: '1234', 
        anoletivo: '5º Ano',
        escola: 'Cardoso Lopes'
    },
    {
        username: 'Liliana de Carvalho', 
        password: 'qwerty', 
        anoletivo: '5º Ano',
        escola: 'Alto dos Moinhos'
    },
    {
        username: 'Sara de Carvalho', 
        password: 'azerty', 
        anoletivo: '5º Ano',
        escola: 'Padre Alberto Neto'
    },
];

async function insert() {
    for (const user of arr) {
        await insereAluno(user)
    }
    closeConnection()
}

insert().then(() => console.log('done'))