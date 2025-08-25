import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './common/components/Header'
import MoviePage from './user/pages/MoviePage'
import Footer from './common/components/Footer'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/footer' element={<Footer />} />

        {/* User side pages path */}
        <Route path='/moviepage' element={<MoviePage />} />




      </Routes>

    </>
  )
}

export default App
