const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');

app.get('/add/user', (req, res) => {
    res.render('user_form');
})

app.post('/add/user', (req, res) => {
  console.log(req.body);
  res.render('created_user');
})

app.listen(port, () => {
  console.log(`Started server at port ${port}`);
})