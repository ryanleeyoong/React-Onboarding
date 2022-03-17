import Post from './Post'
/* By importing the contents of a component, 
the <component /> can be used. */

//posts is now passed from home to the component
const Box = ({posts}) => {
  return (
    <body>
        {/*Row 1*/}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8 justify-center">   
  {/* All the objects is now listed out using the .map() 
   with a function, recieving the post.jsx and displaying the post component with props post to pass in the post page */}
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