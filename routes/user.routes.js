const express=require("express")
const { singup, singin } = require("../controller/user.controller")

const userRouter=express.Router()

userRouter.get("/test",(req,res)=>{
    console.log("Heello")
})
userRouter.post("/singup",singup)
userRouter.post("/singin",singin)



module.exports=userRouter