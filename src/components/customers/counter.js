import { useState } from 'react'; //available from 16.8 onwards

export default function Counter() {
    const [counterValue, setNewValue] = useState(0)
    const [firstname, setNewFirstName] = useState("Krunal")

    const handleIncrement = () => {
        setNewValue(counterValue+1)
    }

    const handleDecrement = () => {
        setNewValue(counterValue - 1)
    }

    const updateName = () => {
        if(firstname === "CS React")
            setNewFirstName("CS React")
        else
            setNewFirstName("Chintan")
    }

    return (
        <div>
            <h1>Counter</h1>

            <div>
                <button onClick={handleIncrement}> + </button> <br/>
                <button onClick={handleDecrement}> - </button> <br/>
                <button onClick={updateName}> Update Name </button> <br/>
            </div>

            <div>
                <h4>Value: {counterValue}</h4>
                <h4>First Name: {firstname}</h4>
            </div>

        </div>
    )
}