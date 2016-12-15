// 环境变量
if(!process.env.NODE_ENV){
  process.env.NODE_ENV = 'development';
}
console.log(process.env.NODE_ENV);

var config = require('./config/environment');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var crawlerjs = require('crawler-js');
var task = require('./task_register')();
console.log(task.getRegistedTasks()[0]);

// Connect to MongoDB
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
});
mongoose.connection.once('open', function() {
  console.log('Mongoose connect success!s');
});

crawlerjs(task.getRegistedTasks()[0]);