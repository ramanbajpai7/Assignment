const StudentData=require("../models/StudentData");
exports.createData=async(req,res)=>{
    try{
        //extract Student data from req body
        const {name,batches,age}=req.body;
        // create a new student data obj and insert in db
        const response=await StudentData.create({name,batches,age});
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry creted successfully'
            }
        );

    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            data:"internal error",
            message:err.message,
        })

    }
}