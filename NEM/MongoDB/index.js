const mongoose = require("mongoose");
const express = require("express")
const app = express();
const userRouter = require("./routes/userRoute");
const connect = require("./db")

app.use(express.json());
app.use("/user", userRouter)



// const studentSchema = mongoose.Schema({
//     name: { type: String, require: true },
//     age: { type: Number, require: false },
//     email: { type: String, require: true }
// })

// const studentModule = mongoose.model("students", studentSchema)





app.listen(8080, () => {
    connect()
})