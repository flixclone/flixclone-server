require('dotenv').config();
const app = require('./lib/app');

const PORT = 8000;
app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`);
});