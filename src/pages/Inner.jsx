import {Link, useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Comments from './../components/Comments'

const Inner = () => {
    const {id} = useParams();
    const [content, setContent] = useState([])
    const [comments, setComments] = useState([])
  
    console.log(id)

    
  
    return (
      <>
      <header>
        <Link to='/'>
        <button>Back</button>
        </Link>
            <h1 className="pt-16 pb-5 w-50 text-center text-indigo-900 font-bold text-4xl">
                TESTTTTTTT
            </h1>
            <p className="pb-10 text-center text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non erat ac orci lacinia consequat id quis mauris. Aliquam tristique.
            </p>
        </header>
        <body>
  
  
        </body>
        <footer>
          <p>Comments</p>
          <input placeholder="Email"></input>
          <Comments comments={comments} />
        </footer>
      
      </>
    )
  }

export default Inner;
