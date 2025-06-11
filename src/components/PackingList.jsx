
export default function PackingList(props) {

    return (
        <div>
            <div className="w-[350px] h-[450px] bg-[#F2F2E3] shadow-lg p-4 m-4 -rotate-1">
                <h2 className="text-2xl text-center font-regular font-girlNext">Packing list: {props.packing}</h2>
            </div>
        </div>
    )
}