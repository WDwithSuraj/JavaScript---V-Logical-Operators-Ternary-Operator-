const mongoose = require("mongoose");


const connect = async () => {
    try {
        await mongoose.connect(`mongodb+srv://suraj:suraj@firsteverdatabase.tlrnkqa.mongodb.net/`)
        console.log("successfully connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connect;