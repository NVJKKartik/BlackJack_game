const express = require('express');
const app = express();

const PORT = 3000
app.use(express.static(__dirname));


app.get('/', (req,res) =>{
    res.sendFile('index.html');
});

app.listen(PORT, () => {
    console.log(`server is listening in ${PORT}`);
});