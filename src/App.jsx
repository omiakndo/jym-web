

import './App.css'
import Dashboard from './Component/Dashboard/Dashboard'
import Navbar from './Component/Navbar/Navbar'
import PriceList from './Component/PriceList/PriceList'

function App() {
  

  return (
    <>
      <div>
       
        <Navbar></Navbar>
        <PriceList></PriceList>
        <Dashboard></Dashboard>
      </div>
      
    </>
  )
}

export default App
