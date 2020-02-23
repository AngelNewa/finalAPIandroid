const express = require('express');
const Counselor = require('../models/counselors');
const auth = require('../auth');

const router = express.Router();

router.post('/counselors',(req,res,next)=> {
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
    })


router.route('/:id')
    .get((req,res,next) => {
        Counselor.findOne({adminId: req.user._id, _id: req.params.id})
            .then((counselor) => {
                if(counselor == null)
                    throw new Error("No counselor found!")
                    res.json(counselor);
            }).catch(next);
    })

    .post((req,res) => {
        res.statusCode = 405;
        res.json({message: "Invalid method for inserting data."})
    })

    .put(auth.verifyUser, (req,res,next) => {
        Product.findOneAndUpdate({
            // adminId: req.user._id,
            _id: req.params.id
        },
        {
            $set: req.body
        },
        {
            new: true
        })
        .then((reply) => {
            if(reply == null)
                throw new Error ("Counselor not found!");
                res.json(reply);  
        }).catch(next);
    })

module.exports = router;