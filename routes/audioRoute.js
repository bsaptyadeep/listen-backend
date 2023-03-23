const router = require("express").Router();
const Audio = require('../models/audio');
const mongo = require('mongodb')

router.post("/", async (req, res) => {
    try {
        // console.log(req.body);
        var audio = await Audio.findOne({ title: req.body.title })
        if (audio)
            return res.status(201).send({ message: "Already uploaded" })
        audio = await new Audio(req.body).save();
        return res.status(200).send({ message: "Upload Successful" })
    }
    catch (err) {
        console.log("Error Occured: ", err);
        return res.status(400).send({ message: err });
    }
}).get("/", async (req, res) => {
    try {
        const audio = await Audio.find();
        if (audio.length == 0)
            return res.status(201).send({message: "No result"});
        else
            return res.status(200).send(audio)
    }
    catch (err) {
        console.log("Error Occured: ", err);
        return res.status(400).send({ message: err });
    }
})
// .delete("/", async (req, res) => {
//     try {
//         // console.log(req.body._id)
//         const std = await Student.deleteOne({ _id: new mongo.ObjectId(req.body._id) })
//         res.status(200).send({ message: "Successfully deleted" })
//     }
//     catch (err) {
//         console.log("Error Occured: ", err);
//         res.status(400).send({ message: err });
//     }
// }).put("/", async (req, res) => {
//     try {
//         await Student.updateOne({ _id: new mongo.ObjectId(req.body.id) },
//             {
//                 $set: {
//                     firstName: req.body.firstName,
//                     secondName: req.body.secondName,
//                 }
//             })
//         res.status(200).send({ message: "Update Successfull" })
//     }
//     catch (err) {
//         console.log("Error Occured: ", err);
//         res.status(400).send({ message: err });
//     }
// })

module.exports = router;