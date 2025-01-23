import ClearButton from "./ClearButton";
import NumberButtons from "./NumberButtons";
import OperatorButtons from "./OperatorButtons";
import { useState } from "react";
import { evaluate } from "mathjs";

function Calculator() {
    const [display, setDisplay] = useState("0"); //This is to set a string for the display, this is for this data to be evaluated

    const handleDisplay = () => {
        setDisplay("0"); //To clear the actual display, and your equation, this will set it the the default, which is zero
    };

    const handleNumbers = (e) => {
        setDisplay((prev) => (prev === "0" ? e : prev + e)); //This append the numbers for the equation
    };

    const handleOperators = (e) => {
        if (e === '-' && /[+\-*/]$/.test(display)) {
            setDisplay((prev) => prev + e); //Checks if the incoming operator is a minus sign and
            //the last character is an operator, allows for negative numbers
        } else if (/[+\-*/]{2,}$/.test(display)) {
            setDisplay((prev) => prev.replace(/[+\-*/]+$/, e)); //If there is two or more operators
            //Make it operator into the one that is being typed
        } else {
            setDisplay((prev) => prev + e);
            //If it is normal, allow for it to be appended to the display
        }
    };

    const handleDecimal = () => {
        const parts = display.split(/[+\-*/]/); //Split by operator
        const currentNumber = parts[parts.length - 1]; //Gets the most recent number, goes for every number
        if (!currentNumber.includes(".")) {
            setDisplay((prev) => prev + "."); //If there is no decimal in the number, add it
        }
    };

    const cleanExpression = (expression) => {
        return expression.replace(/([+*/]){2,}/g, (match) => {
            if (match.includes('-') && match.indexOf('-') !== match.length - 1) {
                return match.slice(match.lastIndexOf('-')); 
            }
            return match[match.length - 1]; //This ensure that the operators are displayed correctly, if operators
            //are added consecutively
        });
    };

    const handleEqualsClick = () => {
        let cleanedExpression = cleanExpression(display); //Evaluated the reformatted equation

        try {
            const result = evaluate(cleanedExpression);
            setDisplay(result.toString());
        } catch (error) {
            setDisplay("Error");
        }
    };

    return (
        <div className="h-[90vh] w-[90vw] max-w-[40rem] max-h-[35rem] mt-10 bg-sky-500 p-4 rounded-xl relative">
            <div id="display" className="border-blue-200 bg-slate-400 px-3 py-3 text-2xl rounded-xl border-8">{display}</div>
            <div className="flex flex-col md:flex-row h-10 md:my-4">
                <div className="flex flex-row md:flex-col">
                    <ClearButton clearDisplay={handleDisplay} />
                    <OperatorButtons addOperators={handleOperators} />
                </div>
                <NumberButtons addNums={handleNumbers} />
                <div className="flex flex-row md:flex-col">
                    <button
                        id="decimal"
                        onClick={handleDecimal}
                        className="bg-blue-600 mx-1 my-0 p-4 md:p-6 md:m-2 w-20 h-20 text-2xl md:text-2xl rounded-xl hover:bg-blue-800 font-semibold"
                    >
                        .
                    </button>
                    <button
                        id="equals"
                        className="bg-blue-600 mx-1 my-0 p-4 md:p-6 md:m-2 w-20 h-20 text-2xl md:text-2xl rounded-xl hover:bg-blue-800 font-semibold"
                        onClick={handleEqualsClick}
                    >
                        =
                    </button>
                </div>
            </div>
            <div className="absolute bottom-2 right-2 text-2xl text-white"> @joncineus</div> {/*The signature of the artist*/}
        </div>
    );
}

export default Calculator;
