var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-access-token');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

Word = require('./models/word');

mongoose.connect('mongodb://localhost/sonastik');


app.get('/', function(req, res){
    Word.getWords(function(err, words){
        if(err){
            throw err;
        }
        res.json(words);
    });
});

app.get('/:_id', function(req, res){
    Word.getWordById(req.params._id, function(err, words){
        if(err){
            throw err;
        }
        res.json(words);
    });
});

app.get('/est/:est', function(req, res){
    Word.getWordByEst(req.params.est, function(err, words){
        if(err){
            throw err;
        }
        res.json(words);
    });
});

app.get('/eng/:eng', function(req, res){
    Word.getWordByEng(req.params.eng, function(err, words){
        if(err){
            throw err;
        }
        res.json(words);
    });
});

app.listen(3000);
console.log('Running on port 3000...');