const fs = require('fs');
const countries = JSON.parse(fs.readFileSync(`${__dirname}/../data/countries.json`));

const respondJSON = (req, res, statusCode, jsonObject) => {
  const jsonString = JSON.stringify(jsonObject);

  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(jsonString, 'utf8'),
  });
  res.write(jsonString);
  res.end();
};

const getTimezoneNames = (req, res) => {
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
  respondJSON(req, res, 200, responseJSON);
};
const getTimezonesInCountry = (req, res) => {
  if (!req.query.GTIC_name) {
    return respondJSON(req, res, 404, { message: "404" })
  }
  const responseJSON = {
  };
  respondJSON(req, res, 200, responseJSON);
};

const getCountriesWithTimezone = (req, res) => {
  const responseJSON = {
  };
  respondJSON(req, res, 200, responseJSON);
};

const getTimezonesFromTime = (req, res) => {
  const responseJSON = {
  };
  respondJSON(req, res, 200, responseJSON);
};

const newTimezone = (req, res) => {
  const responseJSON = {
  };
  respondJSON(req, res, 200, responseJSON);
};

const changeGmtOffset = (req, res) => {
  const responseJSON = {
  };
  respondJSON(req, res, 200, responseJSON);
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
  getTimezoneNames,
  getTimezonesInCountry,
  getCountriesWithTimezone,
  getTimezonesFromTime,
  newTimezone,
  changeGmtOffset,
};
