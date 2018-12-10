var mongoose = require('mongoose');

var wordSchema = mongoose.Schema({
    taht:{
        type: String
    },
    inglise:{
        type: String
    },
    eesti:{
        type: String
    },
    seletus:{
        type: String
    }
});

var Word = module.exports = mongoose.model('Word', wordSchema);

module.exports.getWords = function(callback){
    Word.find(callback);
};

module.exports.getWordById = function(id, callback){
    Word.findById(id, callback);
};

module.exports.getWordByEst = function(est, callback){
    Word.find({ eesti: {'$regex': est} }, callback)
}

module.exports.getWordByEng = function(eng, callback){
    Word.find({ inglise: {'$regex': eng} }, callback)
}