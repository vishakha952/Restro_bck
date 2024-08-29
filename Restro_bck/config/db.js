const mongoose = require("mongoose");
const connectDB = async(req,res) => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Database is connected`.bgMagenta.white);
    }
    catch(error){
        console.log(`Error occured ${error}`.bgCyan.white)
    }
}
module.exports=connectDB;