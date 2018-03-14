var express = require('express');
var cors = require('cors');
var mongodb = require('mongodb');

var uri = 'mongodb://INBLR-VM-2174.eu.uis.unisys.com:27017/employee';
var client = mongodb.Db;
let employees = [];
var app = new express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

//express.Promise = require('bluebird');

function connectToDb() {
    mongodb.MongoClient.connect(uri, function (err, database) {
        if (err) return;
        client = database.db('employee');
        //loadEmployees().ca;
    });
}

function loadEmployees() {
    return new Promise(function (resolve, reject) {
        client.collection('empTable').find({}).toArray(function (err, docs) {
            if (err || docs.length == 0) {
                console.log('No employees found');
                return reject(new Error('No employees found'));
            }
            employees = []
            docs.forEach(function (d, i) {
                employees.push(d);
            });
            return resolve(employees);
        });
    });
}

connectToDb();
//loadEmployees();

app.get('/api/Employees', function (req, res) {

    //function puts(error, stdout, stderr) {res.status(200); res.send(stdout);}

    // console.log(req.params);
    // console.log(req.params.comp);

    loadEmployees().then(emps => {
        console.log("getting employees");
        res.status(200);
        res.send(emps);
    }).catch(err => {
        res.status(503);
        res.send();
    });

});

app.post('/api/Employees', function (req, res) {

    var emp = req.body;
    if (employees.length > 0)
        emp._id = employees[employees.length - 1]._id + 1;
    else
        emp._id = 1;
    var that = res;
    client.collection('empTable').insertOne(emp, function (err, res) {
        if (err) {
            res.status(400);
            throw err;
        };
        console.log("1 document inserted");
        //console.log(res);

        employees.push(res.ops[0]);
        that.status(200);
        that.send(res.ops[0]);
    });

});

function updateEmployees(emps) {

    return new Promise(function (resolve, reject) {

        emps.forEach(function (d, i) {
            var query = { _id: d._id };
            var emp = { $set: d };
            client.collection('empTable').updateOne(query, emp, function (err, res) {
                if (err) throw err;
                console.log("1 document updated");
            });
        });

        resolve(true);

    });
}

app.put('/api/Employees', function (req, res) {

    var emps = req.body;
    setTimeout(() => {
        updateEmployees(emps).then(boolres => {
            if (boolres) {
                res.status(200);
                res.send();
            }
            else {
                res.status(204);
                res.send();
            }
        });
    }, 500);

    //while (k != emps.length);
});

//delete : /api/Employee/:empid
app.delete('/api/Employees/:empid', function (req, res) {
    var query = { _id: parseInt(req.params.empid) };
    client.collection('empTable').deleteOne(query, function (err, dbres) {
        if (err) throw err;
        if (dbres.deletedCount == 1) {
            employees.splice(employees.indexOf(employees.find(d => d._id == req.params.empid)), 1)
            console.log("1 document deleted");
            res.status(200);
            res.send();
        }
    });
});

app.listen(8080);
