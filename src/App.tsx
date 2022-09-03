import React, { useState, useEffect } from 'react';
import { db } from './firebase-config';
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
