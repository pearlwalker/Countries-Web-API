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

const parseBody = (req, response, handler) => {
  const requestBody = [];

  req.on('error', (err) => {
    console.dir(err);
    response.statusCode = 400;
    response.end();
  });

  req.on('data', (chunk) => {
    requestBody.push(chunk);
  });

  req.on('end', () => {
    const bodyToString = Buffer.concat(requestBody).toString();
    req.body = query.parse(bodyToString);

    handler(req, response);
  });
};

const handlePost = (req, response, parsedUrl) => {
  switch (parsedUrl.pathname) {
    case '/api/newTimezone':
      parseBody(req, response, jsonHandler.newTimezone);
      break;
    case '/api/changeGmtOffset':
      parseBody(req, response, jsonHandler.changeGmtOffset);
      break;
    default:
      break;
  }
};

const handleGet = (req, response, parsedUrl) => {
  switch (parsedUrl.pathname) {
    case '/':
      htmlHandler.getIndex(req, response);
      break;
    case '/styles.css':
      htmlHandler.getCSS(req, response);
      break;
    case '/bundle.js':
      htmlHandler.getBundle(req, response);
      break;
    case '/client.js':
      htmlHandler.getClient(req, response);
      break;
    case '/countries.json':
      htmlHandler.getCountries(req, response);
      break;
    case '/success':
      jsonHandler.success(req, response);
      break;
    case '/badreq':
      jsonHandler.badreq(req, response);
      break;
    case '/api/getTimezoneNames':
      jsonHandler.getTimezoneNames(req, response);
      break;
    case '/api/getTimezonesInCountry':
      jsonHandler.getTimezonesInCountry(req, response);
      break;
    case '/api/getCountriesWithTimezone':
      jsonHandler.getCountriesWithTimezone(req, response);
      break;
    case '/api/getTimezonesFromTime':
      jsonHandler.getTimezonesFromTime(req, response);
      break;
    default:
      jsonHandler.notFound(req, response);
      break;
  }
};

const onRequest = (req, response) => {
  const protocol = req.connection.encrypted ? 'https' : 'http';
  const parsedUrl = new URL(req.url, `${protocol}://${req.headers.host}`);

  if (urlStruct[parsedUrl.pathname]) {
    const handler = urlStruct[parsedUrl.pathname];
    
  } else {
    urlStruct.notFound(req, response);
  };
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});
