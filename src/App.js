import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Home } from './component/Home'
import { Details } from './component/Details';
import { GlobalProvider } from './context/GlobalStore';


const App = () => {
  return (
      <> 
       <GlobalProvider>
        <Routes>      
            <Route path="/" element={<Home />} />
            <Route path="/contact/:id" element={<Details />} />
          </Routes>
        </GlobalProvider>
      </>
  )
}

export default App