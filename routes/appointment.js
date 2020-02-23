const express = require('express');
const Counselor = require('../models/appointment');

const router = express.Router();

router.post('/appointment',(req,res,next)=> {
        Counselor.create({
            image: req.body.image,
            counselorName: req.body.counselorName,
            Price: req.body.Price,
            description: req.body.description,
        })
        .then((counselor) => {
            res.statusCode = 200;01
            res.json(counselor);
        }).catch(next);
    });
    router.get('/getappointment',(req,res,next)=>{
        Counselor.find().then(function(counselors){
            res.send(counselors);
        }).catch(function (e) {
            res.send(e);
        });
    });

    
module.exports = router;
