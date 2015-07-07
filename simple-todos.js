Tasks = new Mongo.Collection("tasks");

<<<<<<< HEAD
if(Meteor.isClient){
  //this code only runs on the client
  
  // Replace the existing Template.body.helpers
=======
if (Meteor.isClient) {
  // This code only runs on the client
>>>>>>> rama_para_mergear
  Template.body.helpers({
    tasks: function () {
      if (Session.get("hideCompleted")) {
        // If hide completed is checked, filter tasks
        return Tasks.find({checked: {$ne: true}}, {sort: {createdAt: -1}});
      } else {
        // Otherwise, return all of the tasks
        return Tasks.find({}, {sort: {createdAt: -1}});
      }
    },
    hideCompleted: function () {
      return Session.get("hideCompleted");
    },
<<<<<<< HEAD
    
    incompleteCount: function(){
      return Tasks.find({checked: {$ne: true}}).count();
    }
  });
  
=======
    incompleteCount: function () {
      return Tasks.find({checked: {$ne: true}}).count();
    }
  });

>>>>>>> rama_para_mergear
  Template.body.events({
    "submit .new-task": function (event) {
      // This function is called when the new task form is submitted
      var text = event.target.text.value;
<<<<<<< HEAD
      var datoExtra = event.target.datoExtra.value;
      
      Tasks.insert({
        text: text,
        datoExtra: datoExtra,
        createdAt: new Date(), //tiempo actual
        owner: Meteor.userId(),           // _id of logged in user
        username: Meteor.user().username  // username of logged in user
      })
      
      event.target.text.value = "";
      event.target.datoExtra.value = "";
      
      return false;
    },
    // Add to Template.body.events
    "change .hide-completed input": function (event) {
      Session.set("hideCompleted", event.target.checked);
    }
  })
  
  // In the client code, below everything else
Template.task.events({
  "click .toggle-checked": function () {
    // Set the checked property to the opposite of its current value
    Tasks.update(this._id, {$set: {checked: ! this.checked}});
  },
  "click .delete": function () {
    Tasks.remove(this._id);
  }
});
  
  // At the bottom of the client code
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
  
}

=======

      Tasks.insert({
        text: text,
        createdAt: new Date(),            // current time
        owner: Meteor.userId(),           // _id of logged in user
        username: Meteor.user().username  // username of logged in user
      });

      // Clear form
      event.target.text.value = "";

      // Prevent default form submit
      return false;
    },
    "change .hide-completed input": function (event) {
      Session.set("hideCompleted", event.target.checked);
    }
  });
>>>>>>> rama_para_mergear

  Template.task.events({
    "click .toggle-checked": function () {
      // Set the checked property to the opposite of its current value
      Tasks.update(this._id, {$set: {checked: ! this.checked}});
    },
    "click .delete": function () {
      Tasks.remove(this._id);
    }
  });

<<<<<<< HEAD
=======
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}
>>>>>>> rama_para_mergear
