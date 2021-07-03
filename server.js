const pool = require('./pool');
const app = require('./lib/app');

const PORT = 8000;
app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`);
});

process.on('exit', ()=>{
    console.log('l8er');
    pool.end();
});
