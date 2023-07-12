const mongoose = require("mongoose");
const express = require("express")
const router = express.Router();
const User = require("../model/userModel");
const jwt = require("jsonwebtoken")

//This is the homePage
router.get("/", (req, res) => {
    res.send("Welcome to home Route")
})

//route for post
router.post("/register", async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})


//route for get data with query or all
router.get("/users", async (req, res) => {
    try {
        const user = await User.find(req.query);
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})

//route for get data with params
router.get("/users/:id", async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.find({ _id: id });
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})


//route for get data with params
router.patch("/users/:id", async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findByIdAndUpdate({ _id: id }, req.body, { new: true });
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})





router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });
        if (user) {
            const token = jwt.sign({ first: "auth" }, "suraj")
            res.send({ token: token });

        } else {
            res.send("Wrong credentials")
        }
    } catch (error) {
        res.send(error)
    }
})


module.exports = router;