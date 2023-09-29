import React from 'react'
import './App.css'
import Navbar from './component/navbar/Navbar'
import Home from './component/home/Home'
import How from './component/how/How'
import Train from './component/train/Train'
import Book from './component/book/Book'
import Track from './component/Track/Track'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <How/>
      <Train/>
      <Book/>
      <Track/>
    </div>
  )
}

export default App