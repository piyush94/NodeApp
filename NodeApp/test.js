
var mongodb = require('mongodb');

var products = ['ls', 'di'];

var uri = 'mongodb://inblr-vm-2295.eu.uis.unisys.com:27017/';
var dbName = "devopscc";
function loadData() {

    confs = {};
    dbs = {};

    products.forEach(function (p) {
        confs[p] = {}; confs[p].comps = {}; confs[p].services = {}; confs[p].installers = {};

        mongodb.MongoClient.connect(uri, function (error, client) {
            if (error) { console.log(error); return; }
            // load microservice configurations

            var db = client.db('devopscc');
            dbs[dbName] = db;
            db.collection(p + '-comps').find().toArray(function (err, docs) {
                if (err || docs.length == 0) {
                    console.log('No comps found');
                    return;
                }
                docs.forEach(function (d, i) {
                    confs[p].comps[d._id] = d;
                });
            });
            db.collection(p + '-services').find().toArray(function (err, docs) {
                if (err || docs.length == 0) {
                    console.log('No services found');
                    return;
                }
                docs.forEach(function (d, i) {
                    confs[p].services[d._id] = d;
                });
            });

            db.collection(p + '-installers').find().toArray(function (err, docs) {
                if (err || docs.length == 0) {
                    console.log('No services found');
                    return;
                }
                docs.forEach(function (d, i) {
                    confs[p].installers[d._id] = d;
                });
            });
        });
    });
}

loadData();

console.log('here');

// (function () {
//     var mongodb = require('mongodb');
//     var zlib = require('zlib');
//     var http = require('http');
//     var exec = require('child_process').exec;
//     var express = require('express');
//     var bodyParser = require("body-parser");
//     var cors = require('cors');
//     var url = require('url');
//     var xml2json = require('xml2json');
//     var fs = require('fs');

//     // var app = new express();
//     // app.use(cors());
//     // app.use(bodyParser.json({ limit: '10mb' }));
//     // app.use(bodyParser.urlencoded({ extended: false, limit: '10mb' }));

//     // app.use(function (req, res, next) {
//     //     console.log('here');
//     //     // res.set('content-type', 'text/plain');
//     //     res.set('hello', 'world');
//     //     next();
//     // });

//     // app.get('/api/conf', function (req, res) {
//     //     res.status(200);
//     //     res.send("hello");
//     // });

//     // app.listen(process.env.PORT || 8888);

//     // var uri = 'mongodb://inblr-vm-2295.eu.uis.unisys.com:27017/';

//     // var input = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
//     //     + 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
//     //     + 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

//     // mongodb.MongoClient.connect(uri + 'devopscc', function (error, db) {

//     //     db = db.db('devopscc');
//     //     console.log(db);
//     //     console.log(db.collection('di-comps'));
//     //     db.close();

//     // });

//     // var output = '';

//     // zlib.deflate(input, function (err, buffer) {
//     //     if (!err) {
//     //         // console.log(buffer.toString('base64'));
//     //         output = buffer.toString('base64');
//     //         Buffer.from(output, 'base64').toString('utf8');
//     //         // zlib.unzip(Buffer.from(output, 'base64'), function (err, buffer) {
//     //         //     if (!err) {
//     //         //         console.log(buffer.toString());
//     //         //     } else {
//     //         //         console.log(err);
//     //         //     }
//     //         // });
//     //     }
//     // });

//     // output = Buffer.from(output, 'base64');
//     // console.log(output);

    var options = {
        host: 'inblr-vm-2295.eu.uis.unisys.com',
        port: 8888,
        path: '/api/ls/config/variety.js',
        headers: { authorization: "Basic cGl5dXNoLnNvaGFsOlVOSUAxMjM0" }
    };

    http.get(options, function (res) {
        console.log(res.headers);
        // let rawData = '';
        // console.log(res.statusCode);
        // res.on('data', (chunk) => { rawData += chunk; });
        // res.on('end', () => {
        //     try {
        //         const parsedData = JSON.parse(rawData);
        //         console.log(parsedData);
        //     } catch (e) {
        //         console.error(e.message);
        //     }
        // });
    });

// })();