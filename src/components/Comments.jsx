const Comments = ({comments}) => {
    return (
        <body>
            {/*Row 1*/}
            <div>
                <div className="grid-auto-rows">   
                    {comments.map((comments) => (
                        <div>
                        <h3 className="text-left text-black font-bold text-sm py-2 px-6">{comments.filter}</h3>
                        <p className="text-left text-black text-xs px-6">{comments.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </body> 
    
        
      )
    }
export default Comments