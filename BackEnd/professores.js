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
            avatar:'/avatar.jpg'
        },
        {
            name: 'Alberto', 
            disciplina: 'Português', 
            email:'alberto@gmail.com', 
            avatar:'/avatar.jpg'
        },
        {
            name: 'Sara', 
            disciplina: 'Inglês', 
            email:'sara@gmail.com', 
            avatar:'/avatar.jpg'
        },
        {
            name: 'Maria', 
            disciplina: 'História', 
            email:'maria@gmail.com', 
            avatar:'/avatar.jpg'
        },
        {
            name: 'Guilherme', 
            disciplina: 'Ciências',
            email:'guilherme@gmail.com', 
            avatar:'/avatar.jpg'
        }
];

async function insert() {
    for (const professores of arr) {
        await insereProfessor(professores)
    }
    closeConnection()
}

insert().then(() => console.log('done'))