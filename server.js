// imports
const express = require('express');
const routes = require('./routes');

const port = process.env.PORT || 8000;
const app = express();
const cors = require('cors');

// TODO: middleware - CORS
app.use(cors());


app.use(express.json());

app.use('/api/v1/secrets', routes.secrets);
app.use('/api/v1/tasks', routes.tasks);
app.use('/api/v1/users', routes.users);


// listen
app.listen(port, () => console.log(`Server is running on port ${port}`));
