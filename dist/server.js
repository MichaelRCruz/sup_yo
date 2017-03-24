var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

app = express();
app.use(serveStatic(__dirname, {
  fallthrough: true
}));
app.use((req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
