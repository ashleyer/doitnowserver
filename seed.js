const db = require('./models');
const taskData = require('./taskData.json');
const userData = require('./userData.json');
const secretData = require('./secretData.json');


db.Task.create({}, (err, seededTasks) => {
  if (err) {
    console.log(err);
  }

  console.log(seededTasks.length, 'tasks created successfully');

});

db.Secret.create(secretData.tasks, (err, seededSecrets) => {
  if (err) {
    console.log(err);
  }

  console.log(seededSecrets.length, 'secrets created successfully');


  process.exit();
});






  // Create
//   db.User.create(userData.users, (err, seededUsers) => {
//     if (err) {
//       console.log(err);
//       process.exit();
//     }

//     console.log(seededUsers.length, 'Users created successfully');
//     console.log('done!');

//     process.exit();
//   });
// });

