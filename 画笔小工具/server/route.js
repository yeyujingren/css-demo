const fs = require('fs');
const mime = require('./mime');


module.exports = async function (req, res, filePath) {
  try {
    const contentType = mime(filePath);
    res.statusCode = 200;
    res.setHeader('Content-Type', contentType);

    let rs = fs.createReadStream(filePath);

    rs.pipe(res);
  } catch (error) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`${filePath} is not found .\n ${error}`);
  }
};
