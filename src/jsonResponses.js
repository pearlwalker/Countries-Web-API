const fs = require('fs');

const countries = JSON.parse(fs.readFileSync(`${__dirname}/../data/countries.json`));

const respondJSON = (req, res, status, object) => {
  const content = JSON.stringify(object);

  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(content, 'utf8'),
  });
  if (req.method !== 'HEAD' && status !== 204) {
    res.write(content);
  }
  res.end();
};

const getFromEveryCountry = (req, res) => {

};

const getCountryData = (req, res) => {

};

const getTimezonesWithOffset = (req, res) => {

};

const getDayArc = (req, res) => {

};

const renameTimezone = (req, res) => {

};

const createTimezone = (req, res) => {

};

const success = (req, res) => {
  const responseJSON = {
    message: 'This is a successful res!',
  };

  respondJSON(req, res, 200, responseJSON);
};

const badRequest = (req, res) => {
  const responseJSON = {
    message: 'This request has the required parameters',
  };

  if (!req.query.valid || req.query.valid !== 'true') {
    responseJSON.message = 'Missing valid query parameter set to true';
    responseJSON.id = 'badRequest';
    return respondJSON(req, res, 400, responseJSON);
  }

  return respondJSON(req, res, 200, responseJSON);
};

const notFound = (req, res) => {
  const responseJSON = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };
  respondJSON(req, res, 404, responseJSON);
};

module.exports = {
  success,
  badRequest,
  notFound,
  getFromEveryCountry,
  getCountryData,
  getTimezonesWithOffset,
  getDayArc,
  renameTimezone,
  createTimezone,
};
