// import mongoose from "mongoose";

// const connectDb = handler => async (req, res) => {
//     if(mongoose.connections[0].readyState){
//         return handler(req, res);
//     }
//     await mongoose.connect("mongodb://127.0.0.1:27017")
//     .then(db => console.log('DB is connected'))
//     .catch(err => console.log(err));
//     return handler(req,res);
// } 

// export default connectDb;