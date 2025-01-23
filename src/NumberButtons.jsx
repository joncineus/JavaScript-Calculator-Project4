import React from "react";

function NumberButtons({addNums}) {
    const numberList = [
        { name: "one", value: "1" },
        { name: "two", value: "2" },
        { name: "three", value: "3" },
        { name: "four", value: "4" },
        { name: "five", value: "5" },
        { name: "six", value: "6" },
        { name: "seven", value: "7" },
        { name: "eight", value: "8" },
        { name: "nine", value: "9" },
        { name: "zero", value: "0" },
    ];

    return (
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
            {
                numberList.map((number, index) => (
                    <button id={number["name"]} key={index} className="bg-sky-200 mx-2 my-2 p-3 md:p-8 rounded-xl font-semibold hover:bg-sky-300 text-xl md:text-2xl"
                        onClick={() => addNums(number.value)}>
                        {number["value"]}
                    </button>
                ))
            }
        </div>
    );
}

export default NumberButtons;