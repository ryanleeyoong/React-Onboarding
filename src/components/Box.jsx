import Post from './Post'

const Box = ({posts}) => {
  return (
    <body>
        {/*Row 1*/}
        <div>
            <div className="grid-auto-rows">   
                {posts.map((post) => (
                    <Post 
                    className="py-5 space-x-8 place-content-center" 
                    key={post.id} 
                    post={post}
                    />
                ))}
            </div>
        </div>
    </body> 

    
  )
}

export default Box