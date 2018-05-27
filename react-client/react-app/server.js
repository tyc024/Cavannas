const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });

/*
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
*/

app.listen(port, () => console.log(`Listening on port ${port}`));