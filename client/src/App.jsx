import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import HeadAds from './components/headAds'
import Navbar  from './components/navbar'
const App = () => {

  return (<>
    <HeadAds/>
    <BrowserRouter>
    <Navbar/>
    </BrowserRouter>
   </>
  )
}

export default App