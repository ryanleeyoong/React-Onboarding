import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Comments from '../components/atoms/display/Comments'
import Searchbar from '../components/atoms/display/Searchbar'
import Backbtn from '../components/atoms/buttons/Backbtn'
import HeaderInner from '../components/molecules/headers/HeaderInner'

const Inner = () => {
    const {id} = useParams();
    const [comments, setComments] = useState([])
    const [title, setTitle] = useState([])
    const [searchEmail, setSearchEmail] = useState("")
    const [searchResults, setSearchResults] = useState([])

    //fetch and set title
    const getTitle = async () => {
      const postsFromServer = await fetchTitle()
      setTitle(postsFromServer)
    }

    const getComments = async () => {
      const commentsFromServer = await fetchComments()
      setComments(commentsFromServer)
    }

      useEffect(() => {
        getTitle()
        getComments()
      },[])

      const fetchTitle = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
        const data = await res.json()

        return data
      }  

      //fetch and set comments
      const fetchComments = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+id+'/comments')
        const data = await res.json()

        return data
      }  

      const searchHandler = (searchEmail) => {
        setSearchEmail(searchEmail)
        if(searchEmail !== ""){
          const newCommentList = comments.filter((comment) => {
            return Object.values(comment) //get the objects
            .join("") //join the object values into a string
            .toLowerCase() //turn it into lowercase
            .includes(searchEmail.toLowerCase()) //check if it is included in the search term or not, if it is it will return a true
           })
           setSearchResults(newCommentList)
        } else {
           setSearchResults(comments)
        }
      }
 
    return (
      <>
      <div className="pl-96 ml-96">
        <Backbtn text={"< Back"}/>
      </div>

        <HeaderInner
          title={title.title} 
          desc={title.body}
        />

        <footer className="pl-96 ml-96">
            <h2 className="pt-6 pb-5 w-50 text-left text-indigo-900 font-bold text-3xl">
                {"Comments (" + comments.length + ")"} 
            </h2>
          <Comments 
          key={comments.id} 
          comments={searchEmail.length < 1 ? comments : searchResults} 
          email={searchEmail} 
          searchKeyword={searchHandler}
          />
        </footer>
      
      </>
    )
  }

export default Inner;
