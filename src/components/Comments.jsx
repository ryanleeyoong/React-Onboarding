const Comments = ({comments}) => {
    return (
        <body>
            <div>
                <div className="grid-auto-rows">   
                    {comments.map((comments) => (
                        <div>
                        <h3 className="text-left text-black font-bold text-sm py-2 px-6">{comments.email}</h3>
                        <p className="w-96 text-left text-zinc-400 text-xs px-6">{comments.body}</p>
                        <hr className="border-grey my-10 w-3/5"></hr>
                        </div>
                    ))}
                </div>
            </div>
        </body> 
    
        
      )
    }
export default Comments