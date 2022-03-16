import React from "react";
import Header from './../components/Header'
import Box from './../components/Box'
import "../styles/Home.css";
import { useState, useEffect } from 'react'

function Home() {
  
  const [posts, setPosts] = useState([

  ])

  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await fetchPosts()
      setPosts(postsFromServer)
    }

    getPosts()
  },[])

  //Fetch Posts
  const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    return data
  }  


  return (
    <div className="bgColor">
      <Header/>
      
      <body>
        <Box posts={posts} />
      </body>
    </div>
  );
}

export default Home;
