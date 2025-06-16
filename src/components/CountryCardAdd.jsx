export default function CountryCard(props) {

    return (
        <div onClick={props.onClick} className=" h-[375px] w-[350px]   bg-[#FFFFF7] shadow-lg p-4 m-2 -rotate-2 rounded-sm">

            <h2 className="text-center font-regular font-girlNext text-3xl">{props.country}</h2>
            <img src={props.image} className="w-full h-auto object-cover mx-auto mt-3 mb-6 rounded-sm"></img>
            <p ><span className="font-bold font-girlNext text-xl">Cities:</span> {props.cities}</p>
            <p><span className="font-bold font-girlNext text-xl">Duration:</span> {props.duration} days</p>
       
        </div>
    )
} 