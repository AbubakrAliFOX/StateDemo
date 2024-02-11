import { useState } from "react";

export default function Toggler () {
    const [isHappy, setIsHappy] = useState(true);
    const toggleIsHappy = () => setIsHappy(!isHappy)
    return <>
        <button onClick={toggleIsHappy}>Change</button>
        <h1>{isHappy? "😊": "😭"}</h1>
    </>
}