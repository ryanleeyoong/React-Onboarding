import News1 from './../assets/news1.jpg'
import Readmore from './../components/Readmore'

const Post = ({post}) => {
    return (
 
    <div className="box box-border h-50 w-50 rounded-lg drop-shadow-md ">
            <div>
                <img className="relative rounded-t-lg" src={News1} height={100} width={320} />
                <div className="absolute category pb-6 right-6 inset-y-44 ">
                    <p className="pl-3 pb-2 text-white absolute text-center">News</p>
                </div>
            </div>
            <div>
                <h3 className="text-left text-black font-bold text-sm py-2 px-6">{post.title}</h3>
                <p className="text-left text-black text-xs px-6">{post.body}</p>
            </div>
                <div>
                    <Readmore id={post.id} text={"Read More"}/>
                </div>
            </div>
    )
  }
  
  export default Post