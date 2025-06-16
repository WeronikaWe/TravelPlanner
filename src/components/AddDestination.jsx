import CountryCard from "./CountryCard";
import { useState } from "react";

export default function AddDestinationPage() {
    const [newCountry, setNewCountry] = useState("");
    const [newCities, setNewCities] = useState("");
    const [newImage, setNewImage] = useState("");
    const [newDuration, setNewDuration] = useState("");

    // Function to convert image file to something that it can read :)))
    function handleImageChange(e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setNewImage(reader.result); // this is the base64 string
        };
        reader.readAsDataURL(file);
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
                
                <p className="font-bold mb-2 mt-6 text-[#2F5536]">Add country:</p>
                <input placeholder='Type country...' className="rounded pl-3 py-2 w-[50%]" onChange={(e) => setNewCountry(e.target.value)}></input>
                {console.log(newCountry)}
                <p className="font-bold mb-2 mt-8 text-[#2F5536]">Add cities:</p>
                <input placeholder='Type city...' className="rounded pl-3 py-2 w-[50%]" onChange={(e) => setNewCities(e.target.value)}></input>
                <p className="font-bold mb-2 mt-6 text-[#2F5536]">Add duration (in days):</p>
                <input type="number" placeholder='Type number...' className="rounded pl-3 py-2 w-[50%]" onChange={(e) => setNewDuration(e.target.value)}></input>
                <p className="font-bold mb-2 mt-6 text-[#2F5536]">Add image:</p>
                <input type="file" accept="image/*" className="rounded pl-3 py-2 w-[50%]" onChange={handleImageChange}></input>
                

            </div>
            <CountryCard country={newCountry} cities={newCities} image={newImage} duration={newDuration}/>
            
        </div>
    )
}

