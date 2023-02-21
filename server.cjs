const express = require('express');
const path = require('path');
const app = express();

const PORT = 8000;
const distPath = path.resolve(__dirname, './storybook-static');

app.use(express.static(distPath));
app.get('*', (req, res) => {
  res.status(200).sendFile(path.resolve(distPath, 'index.html'));
});

app.listen(PORT, () => console.log('listening on port: ' + PORT));
