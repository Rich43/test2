const express = require('express');
const app = express();

app.get('/', (req: any, res: any) => {
    res.send('GET request to homepage')
});

app.server = app.listen(3000, () => {
    console.log('Listening on port 3000!');
});
