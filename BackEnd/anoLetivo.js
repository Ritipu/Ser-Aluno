const {
    insereAnoLetivo,
    closeConnection
} 
= require('./data/db')

const arr = [
    {ano: '5º ano'},
    {ano: '6º ano'},
    {ano: '7º ano'},
    {ano: '8º ano'},
    {ano: '8º ano'},
    {ano: '9º ano'}
];

async function insert() {
    for (const anoLetivo of arr) {
        await insereAnoLetivo(anoLetivo)
    }
    closeConnection()
}

insert().then(() => console.log('done'))