import CountryCard from "./components/CountryCard";
import ButtonAddDestination from "./components/ButtonAddDestination";
import Notes from "./components/Notes";
import Budget from "./components/Budget";
import PackingList from "./components/PackingList";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import AddDestinationPage from "./components/AddDestination";


function App() {
  let [hideDetails, setHideDetails] = useState(true);
  
  return (
    <div className="min-h-screen bg-[#BCC5AD] p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-[#2F5536] text-3xl font-bold m-8">Travel Planner</h1>
   
        <Router>
          <Routes>
            <Route path='/' element=
              {hideDetails===true ? 
                <div className="flex justify-center m-4 gap-8 md:gap-10">
                  <CountryCard 
                    image="https://overallebjerge.dk/media/qfto2cov/junior-moran-zdk65lujoti-unsplash.jpg"
                    country="Peru" 
                    cities={["Lima, ", "Cusco"]} 
                    duration="14" 
                    notes="Machu Picchu" 
                    packing="Hiking boots"
                    className="mx-4"
                    onClick={() => setHideDetails(!hideDetails)}
                  />
                </div>
                :
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 justify-center m-4">
                  <div className="flex flex-col gap-2 mt-10">
                    <Budget budget="30.000 DKK"/>
                    <PackingList packing="Hiking boots" />
                  </div>
                  <CountryCard 
                    image="https://overallebjerge.dk/media/qfto2cov/junior-moran-zdk65lujoti-unsplash.jpg"
                    country="Peru" 
                    cities={["Lima, ", "Cusco"]} 
                    duration="14" 
                    notes="Machu Picchu" 
                    packing="Hiking boots"
                    className="mx-4"
                    onClick={() => setHideDetails(!hideDetails)}
                  />
                  <div className="mt-10">        
                    <Notes 
                      notes="Machu Picchu, Book Inca trail" 
                      /> 
                  </div>  
                  <ButtonAddDestination /> 
                  {/* <Link to="/addDestination">Add Destination</Link>         */}
                </div>
                
            }>
            </Route>
            <Route path="/addDestination" element={<AddDestinationPage />}></Route>
          
          </Routes>
        </Router>
        
        {/* <ButtonAddDestination /> */}
        {/* <Link to={`/project/${id}`}>Show more</Link> */}

      </div>
    </div>

    
  )

      
}

export default App;