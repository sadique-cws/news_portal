import mongoose from "mongoose"

const PostSchema = new mongoose.Schema({
    title:String,
    reporter:String,
    date:Date,
    category:String,
    content:String
},{
    timestamps:true
})

module.exports = mongoose.models.Post || mongoose.model("Post",PostSchema)