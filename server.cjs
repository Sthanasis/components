const express = require('express');
const path = require('path');
const app = express();

const distPath = path.resolve(__dirname, './storybook-static');
const PORT = 8000;

app.use(express.static(distPath));
app.get('*', (req, res) => {
  res.status(200).sendFile(path.resolve(distPath, 'index.html'));
});

app.listen(PORT, () => console.log('listening on ' + PORT));
