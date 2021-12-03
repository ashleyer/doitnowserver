const db = require('./models');
const taskData = require('./taskData.json');
const userData = require('./userData.json');
const secretData = require('./secretData.json');

// Delete
db.Game.deleteMany({}, (err, result) => {
  if (err) {
    console.log(err);
    process.exit();
  }
  
  console.log(result.deletedCount,'games deleted');

  // Create
  db.Game.create(gameData.games, (err, seededGames) => {
    if (err) {
      console.log(err);
      process.exit();
    }
    
    console.log(seededGames.length, 'games created successfully');
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
