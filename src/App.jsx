import React from 'react'
import ImageOne from './components/ImageOne'
import './App.css'
import ImageTwo from './components/ImageTwo'
import ImageThree from './components/ImageThree'
import TextBox from './components/TextBox'

const App = () => {
  return (
    <div>
      <ImageOne />
      <TextBox />
      <ImageTwo />
      <TextBox />
      <ImageThree />
      <TextBox />
      
    </div>
  )
}

export default App