const {
    insereProfessor,
    closeConnection
} 
= require('./data/db')

const arr = [
    
        {
            name: 'Joaquim', 
            disciplina: 'Matemática', 
            email:'joaquim@gmail.com', 
        },
        {
            name: 'Alberto', 
            disciplina: 'Português', 
            email:'alberto@gmail.com', 
        },
        {
            name: 'Sara', 
            disciplina: 'Inglês', 
            email:'sara@gmail.com', 
        },
        {
            name: 'Maria', 
            disciplina: 'História', 
            email:'maria@gmail.com', 
        },
        {
            name: 'Guilherme', 
            disciplina: 'Ciências',
            email:'guilherme@gmail.com', 
        }
];

async function insert() {
    for (const professores of arr) {
        await insereProfessor(professores)
    }
    closeConnection()
}

insert().then(() => console.log('done'))