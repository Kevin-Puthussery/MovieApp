import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './common/components/Header'
import MoviePage from './user/pages/MoviePage'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Header />} />


        {/* User side pages path */}
        <Route path='/moviepage' element={<MoviePage />} />



      </Routes>

    </>
  )
}

export default App
