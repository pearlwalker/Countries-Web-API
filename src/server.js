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
  const body = [];

  req.on('error', (err) => {
    console.dir(err);
    res.statusCode = 400;
    res.end();
  });

  req.on('data', (chunk) => {
    body.push(chunk);
  });

  req.on('end', () => {
    const bodyString = Buffer.concat(body).toString();
    req.body = query.parse(bodyString);
    handler(req, res);
  });
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
