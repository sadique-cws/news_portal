import mongoose from "mongoose"

const PostSchema = new mongoose.Schema({
    title:{type:String},
    reporter:{type:String},
    date:{type:String},
    category:{type:String},
    content:{type:String}
})

module.exports = mongoose.models.Post || mongoose.model("Post",PostSchema)