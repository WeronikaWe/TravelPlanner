
export default function Notes(props) {

    return (
        <div>
            <div className="w-[350px] h-[450px] bg-[#F2F2E3] shadow-lg p-4 m-4 rotate-1">
                <ul className="text-left font-regular font-girlNext text-2xl list-disc p-6"><span className="font-bold">Notes: </span> 
                    <li className="text-xl ">{props.notes}</li>
                </ul>
            </div>
        </div>
    )
}