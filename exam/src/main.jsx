import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux'
import { MyStore } from './store/index.js'

import './index.css'
import App from './App.jsx'

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { History, Info, MusicPlayer, NavBar, Search, TrackList } from './pages/index.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={MyStore}>

    <BrowserRouter>
      {/* <App /> */}
        <NavBar/>
        <hr />
      <Routes>
        <Route path='/' Component={App}/>
        <Route path='/musicPlayer' element={<MusicPlayer/>}/>
        <Route path='/musicPlayer/:id' element={<MusicPlayer/>}/>
        <Route path='/trackList' Component={TrackList}/>
        <Route path='/search' Component={Search}/>
        <Route path='/history' Component={History}/>
        <Route path='/info' Component={Info}/>
      </Routes>
    </BrowserRouter> 

  </Provider>
    
)
