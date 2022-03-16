import Post from './Post'

const Box = ({posts}) => {
  return (
    <body>
        {/*Row 1*/}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 p-8">   
                {posts.map((post) => (
                    <Post 
                    key={post.id} 
                    post={post}
                    />
                ))}
            </div>
    </body> 

    
  )
}

export default Box