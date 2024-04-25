import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import Welcome from '../Components/Welcome' 
import Repo from  '../Components/Repo'
import {Routes, Route} from "react-router-dom"
import AppOutlet from '../Components/AppOutlet'
import Singlerepo from '../Components/Singlerepo'
import Error from '../Components/Error'

import './App.css'

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchRepos();
  }, []);

  const fetchRepos = () => {
    fetch(`https://api.github.com/users/Ayoyinkaaaa/repos`)
      .then(response => response.json())
      .then(data => {
        setRepos(data);
      })
      .catch(error => {
        console.error('Error fetching repositories:', error);
      });
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Welcome />}/>
        <Route path='/Repo' element={<Repo repos />}/>
        <Route path='/Error' element={<Error/>}/>
        <Route path='/Singlerepo' element={<AppOutlet />}>
          <Route path="/Singlerepo/:repoName" element={<Singlerepo/>} />
        </Route>
      </Routes>
     
    </>
  )
}

export default App
