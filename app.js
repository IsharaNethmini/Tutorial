require('dotenv').config();

const express = require('express');
const expresslayouts = require('express-ejs-layouts');

const app = express();
const port =  process.env.PORT ||5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static Files
app.use(express.static('public'));

// Templating Engine
app.use(expresslayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// app.get('/', function (req, res) {
// const locals = {
// title: 'NodeJs Notes',
// description: 'Free NodeJs Notes App'
// }

//     res.render('index', locals);
// });

 //Routes
 app.use('/', require('./server/routes/index'));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});



