const db = require('./models');
const taskData = require('./taskData.json');
const userData = require('./userData.json');
const secretData = require('./secretData.json');

// Delete
db.Task.deleteMany({}, (err, result) => {
  if (err) {
    console.log(err);
    process.exit();
  }
  
  console.log(result.deletedCount,'tasks deleted');

  // Create
  db.Task.create(taskData.tasks, (err, seededTasks) => {
    if (err) {
      console.log(err);
      process.exit();
    }
    
    console.log(seededTasks.length, 'tasks created successfully');
    console.log('done!');

    process.exit();
  });
});



db.User.deleteMany({}, (err, result) => {
  if (err) {
    console.log(err);
    process.exit();
  }
  
  console.log(result.deletedCount,'users deleted');

  // Create
  db.User.create(userData.users, (err, seededUsers) => {
    if (err) {
      console.log(err);
      process.exit();
    }
    
    console.log(seededUsers.length, 'Users created successfully');
    console.log('done!');

    process.exit();
  });
});

db.Secret.deleteMany({}, (err, result) => {
  if (err) {
    console.log(err);
    process.exit();
  }
  
  console.log(result.deletedCount, 'secrets deleted');
  
  db.Secret.create(secretData.secrets, (err, seededSecrets) => {
    if (err) {
      console.log(err);
      process.exit();
    }
    
    console.log(seededSecrets.length, 'Secrets created successfully');
    console.log('done!');

    process.exit();
  });
});

