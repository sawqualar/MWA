const express = require('express');

const {

    body,

    validationResult

} = require('express-validator/check');

const router = express.Router();



router.get('/', (req, res) => {

    const collection = req.db.collection('locations');



    collection.find({

        location: {

            $near: {

                $geometry: {

                    type: "Point",

                    coordinates: [-91.9665342, 41.0176545]

                },

                $maxDistance: 2000

            }

        }

    }).limit(3).toArray(function (err, documents) {

        if (err) throw err;

        res.status(200).json(documents);

    });

});



router.post('/', [

    body("name").exists(),

    body("category").exists(),

    body("location").isArray()

], (req, res) => {

    const errors = validationResult(req);



    if (!errors.isEmpty()) {

        return res.status(422).json({

            errors: errors.array()

        });

    }



    const collection = req.db.collection('locations');

    collection.insertOne({

        name: req.body.name,

        category: req.body.category,

        location: req.body.location

    }, (err, result) => {

        if (err) throw err;



        res.status(200).json(result);

    });

    // console.log(req.body.name, req.body.category, req.body.location);

    // res.end("test");

});



module.exports = router;