import React, { useState, useEffect } from 'react';
// import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import logo from './logo.svg';
import './App.css';

function App() {
// const [Blog, setBlogs] = useState([]);
// const BlogPostsCollectionRef = collection(db, "Blog")
// useEffect(() => {
//   const getBlogPosts = async () => {
//     const data = await getDocs()
//     console.log(data);
// }
//   getBlogPosts()
// }, [])
  return (
    <div className="App">
      
        <h1>UI-BAKER</h1>
    </div>
  );
}

export default App;
