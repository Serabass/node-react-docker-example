import express from 'express';

let app = express();

app.get('/', (req, res) => {
    res.end('Hello from Docker');
});

app.listen(process.env.PORT, () => {
    console.log(`Server listening on http://localhost:${process.env.PORT}.\n Node.js ${process.version}`)
});
