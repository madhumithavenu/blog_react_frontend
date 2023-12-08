import React, { useState } from 'react'
import Header from './components/Header.jsx'
import { Route, Routes } from 'react-router-dom'
import BlogDetail from './components/BlogDetail.jsx'
import UserBlogs from './components/UserBlogs.jsx'
import AddBlog from './components/AddBlog.jsx'
import Auth from './components/Auth.jsx'
import Blogs from './components/Blogs.jsx'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <header>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </header>
      <main>
        <Routes>
          <Route path='/auth' element={<Auth setIsLoggedIn={setIsLoggedIn} />} /> :

          <Route path='/blogs' element={<Blogs />} />
          <Route path='/myBlogs' element={<UserBlogs />} />
          <Route path='/myBlogs/:id' element={<BlogDetail />} />
          <Route path='/blogs/add' element={<AddBlog />} />

        </Routes>
      </main>
    </>
  )
}

export default App