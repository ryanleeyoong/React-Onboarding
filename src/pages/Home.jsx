import React from "react";
import Header from './../components/Header'
import Box from './../components/Box'
import "../styles/Home.css";
import { useState, useEffect } from 'react'

function Home() {
  
  //posts is now an array that contains all the posts JSON 
  const [posts, setPosts] = useState([])

  /* To set the state of post by getting fetchPosts() which
  returns the JSON to equal to postsFromServer and setting the
  state to setPosts(postsFromServer), this also means
  getPosts function can be called to trigger another fetch and set State */
  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await fetchPosts()
      setPosts(postsFromServer)
    }

    getPosts()
  },[])

  //Fetch Posts (this returns parsed JSON JS object)
  const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    return data
  }  


  return (
    <div className="bgColor">
      <Header 
        title={"Latest News"} 
        desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non erat ac orci lacinia consequat id quis mauris. Aliquam tristique."}
      />
      
      <body>
        {/* 
          Box now contains a posts prop that gets the posts JSON data and sends it to the Box component to use.
          Since all posts objects were fetched, userId, id, title and body were all passed through and can be individually accessed by using posts.specificData.
          posts in it's entirety can be passed too by using posts.
        */}
        <Box posts={posts} />
      </body>
    </div>
  );
}

export default Home;
