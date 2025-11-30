const fs = require('fs');
const countries = JSON.parse(fs.readFileSync(`${__dirname}/../data/countries.json`));

const respondJSON = (req, response, statusCode, jsonObject) => {
  const jsonString = JSON.stringify(jsonObject);

  response.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(jsonString, 'utf8'),
  });
  response.write(jsonString);
  response.end();
};

const getTimezoneNames = (req, response) => {
  const timezoneArray = [];
  for (let i = 0; i < countries.length; i++) {
    const tzFullData = countries[i].timezones;
    for (let x = 0; x < tzFullData.length; x++) {
      const tzCutData = [
        tzFullData[x].gmtOffsetName,
        tzFullData[x].abbreviation,
        tzFullData[x].tzName
      ];
      timezoneArray.push(tzCutData);
    };
  };
  const responseJSON = {
    timezoneArray
  };
  respondJSON(req, response, 200, responseJSON);
};
const getTimezonesInCountry = (req, response) => {
  if (!req.query.GTIC_name) {
    return respondJSON(req, response, 404, { message: "404" })
  }
  const responseJSON = {
  };
  respondJSON(req, response, 200, responseJSON);
};

const getCountriesWithTimezone = (req, response) => {
  const responseJSON = {
  };
  respondJSON(req, response, 200, responseJSON);
};

const getTimezonesFromTime = (req, response) => {
  const responseJSON = {
  };
  respondJSON(req, response, 200, responseJSON);
};

const newTimezone = (req, response) => {
  const responseJSON = {
  };
  respondJSON(req, response, 200, responseJSON);
};

const changeGmtOffset = (req, response) => {
  const responseJSON = {
  };
  respondJSON(req, response, 200, responseJSON);
};

const success = (req, response) => {
  const responseJSON = {
    message: 'This is a successful response!',
  };

  respondJSON(req, response, 200, responseJSON);
};

const badRequest = (req, response) => {
  const responseJSON = {
    message: 'This request has the required parameters',
  };

  if (!req.query.valid || req.query.valid !== 'true') {
    responseJSON.message = 'Missing valid query parameter set to true';
    responseJSON.id = 'badRequest';
    return respondJSON(req, response, 400, responseJSON);
  }

  return respondJSON(req, response, 200, responseJSON);
};

const notFound = (req, response) => {
  const responseJSON = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };
  respondJSON(req, response, 404, responseJSON);
};

module.exports = {
  success,
  badRequest,
  notFound,
  getTimezoneNames,
  getTimezonesInCountry,
  getCountriesWithTimezone,
  getTimezonesFromTime,
  newTimezone,
  changeGmtOffset,
};
