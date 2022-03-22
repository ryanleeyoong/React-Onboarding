import { useRef } from 'react'

const Comments = ({comments, key, email, searchKeyword}) => {
    const inputEl = useRef("");

    const getSearchEmail = () => {
        searchKeyword(inputEl.current.value)
    }
    return (
        <body>
            <input 
            className="w-96 h-8 pl-6 rounded border-2 border-indigo-900 mb-10" 
            ref={inputEl} 
            type="text" 
            placeholder="Search Email" 
            value={email} 
            onChange={getSearchEmail}>
            </input>

            <div>
                <div className="grid-auto-rows">   
                    {comments.map((comments) => (
                        <div key={key}>
                        <h3 className="text-left text-black font-bold text-sm py-2 px-6" key={key}>{comments.email}</h3>
                        <p className="w-96 text-left text-zinc-400 text-xs px-6" key={key}>{comments.body}</p>
                        <hr className="border-grey my-10 w-3/5" key={key}></hr>
                        </div>
                    ))}
                </div>
            </div>
        </body> 
    
        
      )
    }
export default Comments