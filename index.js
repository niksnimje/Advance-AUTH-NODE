const express=require("express")
const dotenv=require("dotenv")
const userRouter = require("./routes/user.routes")
const connection = require("./utils/db")

dotenv.config()

const app=express()

app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Okay")
})

app.get("/email",(req,res)=>{
    res.render("email")
})

app.set("view engine","ejs")

app.use("api/user",userRouter)

app.listen(process.env.PORT || 3000,async()=>{
    try {
        await connection
        console.log("server is running ")
    } catch (error) {
        console.log(error)
    }
})