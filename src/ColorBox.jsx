import { useState } from "react";
import './ColorBox.css'

const randomColor = (arr) => {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

export default function ColorBox({colors}) {
    const [color, setColor] = useState(randomColor(colors));
    const changeColor = () => setColor(randomColor(colors));
    return <div onClick={changeColor} style={{backgroundColor: color}} className="ColorBox">
    </div>
}