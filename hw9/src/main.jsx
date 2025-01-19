import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Info} from './shared/Info.jsx'
import { Default } from './shared/Default.jsx'
import { AllUsers } from './pages/users/AllUsers.jsx'
import { ErrorPage } from './shared/ErrorPage.jsx'
import { User } from './pages/user/User.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App />
      <Info/>

      <Routes>
        <Route path='/' Component={Default} />
        <Route path='/users' Component={AllUsers} />
        <Route path='/users/:id' Component={User}/>
        <Route path='*' Component={ErrorPage} />
      </Routes>

    </BrowserRouter>
)

