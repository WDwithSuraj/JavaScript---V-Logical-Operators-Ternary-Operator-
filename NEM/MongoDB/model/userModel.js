const mongooe = require("mongoose");




const userSchema = new mongooe.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
})







const User = mongooe.model("user", userSchema);
module.exports = User;