var Sequelize = require('sequelize');


var env =process.env.NODE_ENV || 'development';

var sequelize;

//Heroku environment
if(env ==='production'){

    sequelize = new Sequelize(process.env.DATABASE_URL, {

        dialect: 'postgres'
    })
}

//not running on Heroku
else{

    //instance of sequelize
 sequelize = new Sequelize(undefined,undefined,undefined,{
     
  'dialect': 'sqlite',
  'storage':__dirname +'/data/dev-todo-api.sqlite'
});


}


var db ={};

//loading sequelize from seperate files
db.todo = sequelize.import(__dirname + '/models/todo.js');


db.sequelize = sequelize;
db.Sequelize = Sequelize;

//exporting db object
module.exports =db;