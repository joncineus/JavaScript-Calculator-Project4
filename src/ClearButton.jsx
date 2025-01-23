function ClearButton({clearDisplay}) {

    return (
        <>
            <button className="bg-sky-600 hover:bg-sky-700 p-4 m-2 text-2xl rounded-xl font-semibold" id="clear" onClick={clearDisplay}>AC</button>
        </>
    )
}

export default ClearButton;