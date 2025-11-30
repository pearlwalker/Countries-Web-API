const http = require('http');
const query = require('querystring');
const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
  '/': htmlHandler.getIndex,
  '/styles.css': htmlHandler.getCSS,
  '/bundle.js': htmlHandler.getBundle,
  notFound: jsonHandler.notFound,
};

const parseBody = (req, res, handler) => {
  const requestBody = [];

  req.on('error', (err) => {
    console.dir(err);
    res.statusCode = 400;
    res.end();
  });

  req.on('data', (chunk) => {
    requestBody.push(chunk);
  });

  req.on('end', () => {
    const bodyToString = Buffer.concat(requestBody).toString();
    req.body = query.parse(bodyToString);

    handler(req, res);
  });
};

const handlePost = (req, res, parsedUrl) => {

};

const handleGet = (req, res, parsedUrl) => {
  switch (parsedUrl.pathname) {
    case '/':
      htmlHandler.getIndex(req, res);
      break;
    case '/styles.css':
      htmlHandler.getCSS(req, res);
      break;
    case '/bundle.js':
      htmlHandler.getBundle(req, res);
      break;
    case '/client.js':
      htmlHandler.getClient(req, res);
      break;
    case '/countries.json':
      htmlHandler.getCountries(req, res);
      break;
    case '/success':
      jsonHandler.success(req, res);
      break;
    case '/badreq':
      jsonHandler.badreq(req, res);
      break;
    case '/api/getTimezoneNames':
      jsonHandler.getTimezoneNames(req, res);
      break;
    case '/api/getTimezonesInCountry':
      jsonHandler.getTimezonesInCountry(req, res);
      break;
    case '/api/getCountriesWithTimezone':
      jsonHandler.getCountriesWithTimezone(req, res);
      break;
    case '/api/getTimezonesFromTime':
      jsonHandler.getTimezonesFromTime(req, res);
      break;
    default:
      jsonHandler.notFound(req, res);
      break;
  }
};

const onRequest = (req, res) => {
  const protocol = req.connection.encrypted ? 'https' : 'http';
  const parsedUrl = new URL(req.url, `${protocol}://${req.headers.host}`);

  if (urlStruct[parsedUrl.pathname]) {
    const handler = urlStruct[parsedUrl.pathname];
    if (req.method === 'POST' || req.method === 'post') {
      parseBody(req, res, handler);
    } else {
      handler(req, res);
    }
  } else {
    urlStruct.notFound(req, res);
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});
