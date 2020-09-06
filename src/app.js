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
  const fname = req.body.fname;
  const lname = req.body.lname;
  const id = req.body.id;
  res.render('created_user', {unique: 'Isaac', first: fname, last: lname, patientID: id});
})

app.listen(port, () => {
  console.log(`Started server at port ${port}`);
})