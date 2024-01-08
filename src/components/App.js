
import React from "react";
import './../styles/App.css';
import {Routes,Route} from 'react-router-dom'
import Itemlist from './Itemlist'
import Item1 from './Item1'
import Item2 from './Item2'
import Item3 from './Item3'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Itemlist />}/>
        <Route path='/items/1' element={<Item1/>} />
        <Route path='/items/2' element={<Item2 />} />
        <Route path='/items/3' element={<Item3 />} />
      </Routes>
    </div>
  )
}

export default App
