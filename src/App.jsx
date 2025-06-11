import CountryCard from "./components/CountryCard";
import ButtonAddDestination from "./components/ButtonAddDestination";
import Notes from "./components/Notes";
import Budget from "./components/Budget";
import PackingList from "./components/PackingList";
import { useState } from "react";

function App() {
  let [hideDetails, setHideDetails] = useState(true);
  
  

  return (
    <div className="min-h-screen bg-[#BCC5AD] p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-[#2F5536] text-3xl font-bold m-8">Travel Planner</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 justify-center m-4">
          <div className="flex flex-col gap-2">
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
          {console.log(hideDetails)}
          
          <Notes 
            notes="Machu Picchu, Book Inca trail" 
            />

          {/* {hideDetails===false ? 
            <Notes 
              notes="Machu Picchu, Book Inca trail" 
              />
            :
            <Budget budget="30.000 DKK"/>
          } */}

          
        </div>
        <ButtonAddDestination />
      </div>
    </div>
  )
}

export default App;