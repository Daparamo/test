const express = require('express');
const app = express();


// Settings
app.set('port', process.env.port || 3000);

// Middlewares
app.use(express.json());

// Routes
app.use(require('./routes/users'));
app.use(require('./routes/todos'));

// Starting The Server
app.listen(app.get('port'), () => {
    console.log("server on port 3000");
});