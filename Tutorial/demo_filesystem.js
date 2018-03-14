/*jshint esversion: 6 */

var fs = require('fs');

var  data = "hello world";

var readData = Buffer[1024];

fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log(file);
  fs.write(file, data, 0, "utf-8", function(err, written, str){
    if(err){
      console.log(err.message);
      throw err;
    }
    else{
      console.log(written, str);
    }
  });
  fs.read(file, readData, 0, 1024, 0, function(err, bytesRead, buffer){
    if(err) throw err;
    else{
      console.log(bytesRead, buffer.toString(), readData.toString());
      fs.close(file, (err2) => {
        console.log(err2);
      });
    }
  });
});

