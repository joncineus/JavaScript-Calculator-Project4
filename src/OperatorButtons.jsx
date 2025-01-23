function OperatorButtons({addOperators}) {
    const operatorList = [
        { name: "add", value: "+" },
        { name: "subtract", value: "-" },
        { name: "multiply", value: "*" },
        { name: "divide", value: "/" },
    ];

    return (
        <div className="operator-buttons flex flex-row md:flex-col">
            {
                operatorList.map((operator, index) => (
                    <button id={operator["name"]} key={index} className="bg-slate-800 m-2 p-4 font-semibold rounded-xl text-blue-50 hover:bg-slate-900 text-2xl"
                        onClick={() => (addOperators(operator["value"]))}>
                        {operator["value"]}
                    </button>
                ))
            }
        </div>
    )
}

export default OperatorButtons;