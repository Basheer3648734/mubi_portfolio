const express = require('express');
const fs = require('fs');
const path = require('path');
const validator = require('validator')
const User = require('./database/user');
require('./database/mongodb');
const app = express();
const frontEndFile = path.join(__dirname, '../', 'src/')
app.use(express.static(frontEndFile))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('../src/index.html')
})

app.post('/', (req, res) => {
    const user = req.body;
    console.log(req.body);
    if (!validator.isEmail(req.body.email)) {
        throw new Error(JSON.stringify({ 'error': 'check email address' }))
    }
    if (!req.body.name) {
        throw new Error({ 'error': 'enter your name' })
    }
    const client = new User(user)
    client.save().then(() => {
        console.log('user saved succesfully');

        res.status(200).send(JSON.stringify(user))
    }).catch(e => res.status(404).send({
        'error': e
    }));

})

app.listen(port, () => {
    console.log("server started at port", port);
})



