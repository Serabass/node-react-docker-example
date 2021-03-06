import express from 'express';

let app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from Node.js in Docker'
  });
});

app.get('/test', (req, res) => {
  res.end('Hello test');
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on http://localhost:${process.env.PORT}.\n Node.js ${process.version}`)
});
