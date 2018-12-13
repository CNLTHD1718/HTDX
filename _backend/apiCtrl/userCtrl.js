var express = require('express');
var router = express.Router();
var UserRepo = require('../repo/UserRepos');

router.post('/auth', (req,res)=>{
    res.status(200).send({
        msg : 'verify ok !'
    });
})

router.get('/', (req, res) => {// get list user
    UserRepo.loadAll()
        .then(rows => {
            res.json(rows);
            //console.log(rows);
        })
        .catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.end('View error log on server console');
        })
})

router.get('/add', (req, res) => {//add using get    
    var obj = {
        Name: req.query.Name,
        Username: req.query.Username,
        Password: req.query.Password,
        Email: req.query.Email,
        Address: req.query.Address
    }
    UserRepo.insert(obj).then(() => {
        res.status(201).send(JSON.stringify({
            stt: 'success',
            msg: 'add success',
            obj: obj
        }));

    }).catch(err => {
        res.status(404).send(JSON.stringify({
            sst: 'error',
            err: err
        }));
    });

});