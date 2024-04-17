
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Navbar from "./components/Navbar"
import MoviesList from "./components/MoviesList"
import Signup from "./components/Signup"
import Login from "./components/Login"
import CreateMovie from "./components/CreateMovie"
import { useEffect, useState } from "react"
import axios from "axios"

import { baseUrl } from "./config"


function App() {
  

  useEffect(() => {
    async function getTeas() {
      const resp = await axios.get(`${baseUrl}/user`)
      console.log(resp)
    }

    getTeas()
  }, [])

  return (
    <h1>Hello world</h1>
  )
}

export default App
