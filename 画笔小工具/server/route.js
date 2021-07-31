const fs = require('fs');
const mime = require('./mime');


module.exports = function (req, res, filePath) {
  const contentType = mime(filePath);
  res.statusCode = 200;
  res.setHeader('Content-Type', contentType);

  let rs = fs.createReadStream(filePath).on('error', (error) => {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`${filePath} is not found .\n ${error}`);
  })

  rs.pipe(res);
};
