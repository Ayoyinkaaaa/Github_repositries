import Header from '../Components/Header'
import Welcome from '../Components/Welcome' 
import Repo from  '../Components/Repo'
import {Routes, Route} from "react-router-dom"

import './App.css'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Welcome />}/>
        <Route path='/Repo' element={<Repo  />}/>
      </Routes>
     
    </>
  )
}

export default App
