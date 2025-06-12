import { Link } from 'react-router-dom';


export default function ButtonAddDestination() {

    return (
        <div className="flex justify-content">
            <Link to="/addDestination" className="bg-[#2F5536] text-[#F2F2E3] font-bold p-4 mt-8 mx-auto rounded">+ Add destination</Link>
        </div>
    )
}