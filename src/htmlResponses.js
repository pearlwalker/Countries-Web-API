const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../hosted/client.html`);
const css = fs.readFileSync(`${__dirname}/../hosted/styles.css`);
const bundle = fs.readFileSync(`${__dirname}/../hosted/bundle.js`);
const countries = fs.readFileSync(`${__dirname}/../data/countries.json`);

const serveFile = (res, file, contentType) => {
  res.writeHead(200, {
    'Content-Type': contentType,
    'Content-Length': Buffer.byteLength(file, 'utf8'),
  });
  res.write(file);
  res.end();
};

const getIndex = (req, res) => {
  serveFile(res, index, 'text/html');
};

const getCSS = (req, res) => {
  serveFile(res, css, 'text/css');
};

const getBundle = (req, res) => {
  serveFile(res, bundle, 'application/javascript');
};

const getCountries = (req, res) => {
  serveFile(res, countries, 'application/json');
};

module.exports = {
  getIndex,
  getCSS,
  getBundle,
  getCountries,
};
