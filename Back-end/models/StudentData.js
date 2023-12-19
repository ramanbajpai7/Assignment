  const mongoose =require("mongoose");
  const todoSchema= new mongoose.Schema(
    {
         name:{
            type:String,
            required:true,
            maxLength:50,
         },
         batches:{
            type:String,
            required:false,
            maxLength:50,
         },
         age: {
            type:Number,
            required:true,
         },
         joiningDate:{
            type:Date,
            required:true,
            default:Date.now(),

         }, 
         
    }
  );
  module.exports=mongoose.model("StudentData",todoSchema);