import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {UncontrolForm, ControlForm, MyFormik, Users, Posts, Comments} from './components'
import './App.css'

function App() {

  return (
    <> 
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h3>Vite + React</h3>
      <hr />
      <hr />
      <UncontrolForm/>
      <hr />
      <hr />
      <ControlForm/>
      <hr />
      <hr />
      <MyFormik/>
      <hr />
      <hr />
      <Users/>
      <hr />
      <hr />
      <Posts/>
      <hr />
      <hr />
      <Comments/>
    </>
  )
}

export default App
