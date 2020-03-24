const path = require('path');
const fs = require('fs');

exports.handler = function (event, context, callback) {
  // console.log('TEST_TEST_TEST_TEST', event, context, callback);
  console.log(__dirname);
  fs.readdir('/', (error, files) => {
    const totalFiles = files.length; // return the number of files
    console.log(totalFiles); // print the total number of files
  });

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      dirname: __dirname,
      other: [
        event,
        context,
        callback,
      ],
    }),
  });
};
