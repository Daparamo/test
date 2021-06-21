const express = require('express');
var cors = require('cors');
const app = express();


// Settings
app.set('port', process.env.port || 3000);

// Middlewares
app.use(express.json());
app.use(cors());
// Routes
app.use(require('./routes/users'));
app.use(require('./routes/todos'));

// Starting The Server
app.listen(app.get('port'), () => {
    console.log("server on port " + app.get('port'));
});