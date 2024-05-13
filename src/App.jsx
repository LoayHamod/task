import React from 'react'
import { Router, Route } from "react-router-dom";
import './App.css'

import allog from './component/allog'
import alrakaba from './component/alrakaba'
import alrd from './component/alrd'
import alrolat from './component/alrolat'
import altrheeb from './component/altrheeb'
import controllpanel from './component/controllpanel'
import embedmassege from './component/embedmassege'
import facebook from './component/facebook'
import localversion from './component/localversion'
import serversit from './component/serversit'
import tiktook from './component/tiktook'
import tobtch from './component/tobtch'

function App() {
  return (
    <Router>
        <Route path="/" element={<allog/>} />
        <Route path="/alrakaba" element={<alrakaba/>} />
        <Route path="/alrd" element={ <alrd/> } />
        <Route path="/alrolat" element={ <alrolat/> } />
        <Route path="/altrheeb" element={ <altrheeb/> } />
        <Route path="/controllpanel" element={ <controllpanel/> } />
        <Route path="/embedmassege" element={ <embedmassege/> } />
        <Route path="/facebook" element={ <facebook/> } />
        <Route path="/localversion" element={ <localversion/> } />
        <Route path="/serversit" element={ <serversit/> } />
        <Route path="/tiktook" element={ <tiktook/> } />
        <Route path="/tobtch" element={ <tobtch/> } />
    </Router>
  )
}

export default App
