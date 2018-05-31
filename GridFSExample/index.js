var fs = require('fs');
var mongodb = require('mongodb');
var mime = require('mime');
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var Readable = require('stream').Readable

//var uri = 'mongodb://localhost:28012/cs';
var uri = 'mongodb://localhost:27017/devopscc';
//var uri = 'mongodb://admin:changeit@au-cbr-ls-nuc3:27017/cs?authSource=admin';

// if (process.argv.length < 3) {
// 	console.log('invalid arguments.  Please provide the bucket, contentType, filename and id to upload');
// 	return;
// }

var app = new express();
app.use(cors());
app.use(bodyParser.json())

// var bucketName = process.argv[2];
// var fname = process.argv[3];
// var id = process.argv[4];
var mydb = null;

mongodb.MongoClient.connect(uri, function (error, db) {

	if (error) {
		console.log(error);
		return;
	}

	mydb = db.db('devopscc');

	//var readStream = fs.createReadStream(fname);
});

app.post('/api/:id', (req, res) => {
	var bucket = new mongodb.GridFSBucket(mydb, {
		chunkSizeBytes: 255 * 1024,
		bucketName: 'ls-config'
	});

	var contentType = mime.getType(req.params.id);
	var file = bucket.find({ "_id": req.params.id });
	file.count().then((count) => {
		console.log(count);
		if (count === 1) {
			bucket.delete(req.params.id, (err) => {
				if (!err) {
					file.destroy();
					var uploadStream = bucket.openUploadStreamWithId(req.params.id, req.params.id, { contentType: contentType });
					var content = req.body.script;
					var s = new Readable();
					s.push(content);
					s.push(null);
					s.pipe(uploadStream);
					uploadStream.on('finish', () => {
						res.status(200);
						res.send('saved ' + req.params.id);
					})	
					// uploadStream.on('finish', function () {
					// 	console.log('uploaded ' + fname + ' @ ', bucketName);
					// 	//process.exit();
					// 	return;
					// });
					// readStream
					// 	.pipe(uploadStream)
					// 	.on('finish', () => {
					// 		console.log('done');
					// 		uploadStream = null;
					// 		readStream = null;
					// 		file = null;
					// 	});
				}
			});
		}
		else {
			var uploadStream = bucket.openUploadStreamWithId(req.params.id, req.params.id, { contentType: contentType });
			var content = req.body.script;
			var s = new Readable();
			s.push(content);
			s.push(null);
			s.pipe(uploadStream);
			uploadStream.on('finish', () => {
				res.status(200);
				res.send('saved ' + req.params.id);
			})
			// uploadStream.on('finish', function () {
			// 	console.log('uploaded ' + fname + ' @ ', bucketName);
			// 	//process.exit();
			// 	readStream.close();
			// });
			// readStream.pipe(uploadStream);
		}
	});
});

app.get('/api/:id', (req, res) => {
	var bucket = new mongodb.GridFSBucket(mydb, {
		bucketName: 'ls-config',
	})
	var downStream = bucket.openDownloadStream(req.params.id);
	downStream.pipe(res);
})

app.listen(8888);