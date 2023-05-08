import connectDb from '@/middleware/connectDb'
import Post from '@/models/Post'

const handler = async(req,res) => {
   if(req.method == "GET"){
    let data = await Post.find()
    res.status(200).json({ data });
   }
}

export default connectDb(handler);