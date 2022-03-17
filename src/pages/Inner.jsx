import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Comments from './../components/Comments'
// import Header from './../components/Header'
import Backbtn from './../components/Backbtn'
import News1 from './../assets/news1.jpg'

const Inner = () => {
    //useParams hook gets the id from posts?
    const {id} = useParams();
    const [comments, setComments] = useState([])
    const [title, setTitle] = useState([])

    //fetch and set title
      useEffect(() => {
        const getTitle = async () => {
          const postsFromServer = await fetchTitle()
          setTitle(postsFromServer)
        }

        getTitle()
      },[])

      const fetchTitle = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
        const data = await res.json()

        return data
      }  

      //fetch and set comments
      useEffect(() => {
        const getComments = async () => {
          const commentsFromServer = await fetchComments()
          setComments(commentsFromServer)
        }

        getComments()
      },[])

      const fetchComments = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+id+'/comments')
        const data = await res.json()

        return data
      }  
      //Q: Is it better to rename res and data something else?

      const count = comments.filter((item) => {
        if(item.postId === item.postId) {
          return true;
        }else{
          return false;
        }
      }).length;
      
  
    return (
      <>
      <div className="pl-96 ml-96">
        <Backbtn text={"< Back"}/>
      </div>
      {/* <Header 
        title={title.title} 
        desc={title.body}
      /> */}

        <header>
            <h1 className="pt-16 pb-5 pl-80 ml-80 w-3/5 text-center text-indigo-900 font-bold text-4xl">
                {title.title}
            </h1>
            <div className="pl-96 ml-96">
              <img className="m-10" src={News1} height={800} width={900} />
            </div>
            <p className="pb-10 pl-80 ml-80 w-3/5 text-center text-black">
                {title.body}
            </p>
            <hr className="pl-96 ml-96 border-grey my-10 w-4/6"></hr> 
        </header>

        <footer className="pl-96 ml-96">
            <h2 className="pt-6 pb-5 w-50 text-left text-indigo-900 font-bold text-3xl">
                {"Comments (" + count + ")"} 
            </h2>
          <input className="w-96 h-8 rounded border-2 border-indigo-900 mb-10" placeholder="    Email"></input>
          <Comments comments={comments} />
        </footer>
      
      </>
    )
  }

export default Inner;
