var Sequelize = require('sequelize');

//instance of sequelize
var sequelize = new Sequelize(undefined,undefined,undefined,{
     
  'dialect': 'sqlite',
  'storage':__dirname +'/data/dev-todo-api.sqlite'
});

var db ={};

//loading sequelize from seperate files
db.todo = sequelize.import(__dirname + '/models/todo.js');


db.sequelize = sequelize;
db.Sequelize = Sequelize;

//exporting db object
module.exports =db;