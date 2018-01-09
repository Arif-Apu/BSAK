var express = require('express');
var router = express.Router();
var db = require('../db');
var scheduling = require('../db/schedulingAction');

//Add a schedule

exports.addSchedule = function(req, res){

    allData = req.body;
    var details = {
        start: allData.fromDate,
        end: allData.toDate,
        person: allData.resPerson
    };
    db.query('INSERT into  `schedule` SET ?', details, function (err, result) {
        if (err)
            throw err;
        else{
        console.log(' The value inserted. ');
                req.flash('success', 'Your registration has been successfully completed.');
				res.redirect('/schedule');
        }
    });
};
