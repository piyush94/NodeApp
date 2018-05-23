var express = require('express');
var exec = require('child_process').exec;
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/api/getfile', function (req, res, next) {
  exec('powershell Get-Content "D:\\VSCodeWorkBench\\NodeApp\\NodeApp\\routes\\test.txt" -Encoding UTF8', function (error, stdout, stderr) {
    if (error) return stderr;
    else res.send(stdout);
  });
});

router.post('/api/writefile/:content', function (req, res, next) {
  exec('powershell Set-Content "D:\\VSCodeWorkBench\\NodeApp\\NodeApp\\routes\\test.txt" "' + req.params.content + '" -Encoding UTF8', function (error, stdout, stderr) {
    if (error) return stderr;
    else res.send(done);
  });
});

module.exports = router;