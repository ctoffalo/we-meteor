// simple-todos.js
Tasks = new Mongo.Collection('tasks');

if(Meteor.isClient){
  //this code only runs on the client
  
  Template.body.helpers({
    tasks: function(){
      return Tasks.find({});
    }
  })
  
  Template.body.events({
    "submit .new-task": function(event){
      /*esta funcion es llamada cuando el form es enviado*/
      
      var text = event.target.text.value;
      
      Tasks.insert({
        text: text,
        createdAt: new Date() //tiempo actual
      })
      
      event.target.text.value = "";
      
      return false;
    }
  })
}



/* esto coloca 3 tasks fijas
if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: [
      { text: "This is task 1" },
      { text: "This is task 2" },
      { text: "This is task 3" }
    ]
  });
}
*/