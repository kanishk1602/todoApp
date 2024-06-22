//import th model
const Todo = require("../models/Todo");

//define route handler

exports.createTodo = async(req,res) => {
    try{
            //extract title and desc from re body
            const {title,description} = req.body;
            //create a new Todo Obj and insert in DB
            const response = await Todo.create({title,description});
            //send a json response with success flag
            res.status(200).json(
                {
                    success:true,
                    data:response,
                    messgae:'Entry Created SUccesfully'
                }
            );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}