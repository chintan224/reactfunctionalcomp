import {useState, useEffect} from 'react'

export default function UseEffectDemo() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`You have clicked the button ${count} times`)
    }, [count]
    );

    const [count2, setCount2] = useState(0);

    useEffect(() => {
        console.log(`You have clicked the button 2 ${count2} times`)
    }, [count2]
    );

    return (
        <div>
            <button onClick={() => setCount(count+1)}>Click Me</button>
            <button onClick={() => setCount2(count2+1)}>Click Me</button>
        </div>

    )
}

