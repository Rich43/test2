import * as fs from 'fs';

const express = require('express');
const app = express();

app.get('/', (req: any, res: any) => {
    res.writeHead(302, {
        'Location': '/api'
    });
    res.end();
});

app.get('/api', (req: any, res: any) => {
    res.setHeader("Content-Type", "application/json");
    res.end(fs.readFileSync('api.json', 'utf8'));
});

const PORT = 5000;

app.server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}! Check out http://localhost:${PORT}/api`);
});
