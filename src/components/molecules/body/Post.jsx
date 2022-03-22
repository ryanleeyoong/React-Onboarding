import News1 from '../../../assets/news1.jpg'
import Readmore from '../../atoms/buttons/Readmore'

const Post = ({posts}) => {
    return (
        <body>
        {/*Row 1*/}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8 justify-center">   
  {/* All the objects is now listed out using the .map() 
   with a function, recieving the post.jsx and displaying the post component with props post to pass in the post page */}
                {posts.map((post) => (
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
                ))}
            </div>
    </body> 
    )
  }
  
  export default Post