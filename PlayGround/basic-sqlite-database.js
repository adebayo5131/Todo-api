var Sequelize = require('sequelize');

//instance of sequelize
var sequelize = new Sequelize(undefined,undefined,undefined,{
     
  'dialect': 'sqlite',
  'storage':__dirname +'/basic-sqlitedatabase.sqlite'
});


var Todo = sequelize.define('todo',{
    description:{
              type: Sequelize.STRING,
              allowNull: false,
              validate:{

                len:[1, 300]
              }
    },
    completed:{
             type: Sequelize.BOOLEAN,
             allowNull: false,
             defaultValue: false
            
    }

});

sequelize.sync({
    //force: true  // This helps to ensure all your todo Items are retained when an error occurs
}).then(function(){
    console.log('Everything is syned');


    Todo.findById(1).then(function(todo){

        if(todo){
                
            
                console.log(todo.toJSON());
        }
        
        else
           {
               console.log('no todos found');
           }

            
    })

    /* Todo.create({

        description: "Clean my desk",
        completed: false
    }).then(function(todo){
           return Todo.create({
               description:'Clean the floor'
           }).then(function(){
              

               return Todo.findAll({

                where: {
                    description: {

                        // $like makes you search for words in your database

                        $like: '%desk%'
                    },
                    completed: false
                }
               })
           }).then(function(todos){
               if(todos){
                
                todos.forEach(function(todo){
                    console.log(todo.toJSON());
                })
              
               }
               else
               {
                   console.log('no todos found');
               }
           })
    }).catch(function(e){
        console.log(e);
    }) */
})