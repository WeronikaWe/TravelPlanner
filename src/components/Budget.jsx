
export default function Budget(props) {

    return (
        <div>
            <div className="w-[250px] h-[250px] bg-[#fef68a] shadow-[8px_8px_10px_rgba(0,0,0,0.2)] p-4 m-4 transform rotate-[2deg] rounded-sm">
                <h2 className="text-2xl text-center font-regular font-girlNext">Budget: {props.budget}</h2>
            </div>
        </div>
    )
}