import ColorBox from "./ColorBox";
import './ColorGrid.css';

export default function ColorGrid ({colors}) {
    const box = [];
    for (let i = 0; i < 25; i++) {
        box.push(<ColorBox colors={colors} />)
    }
    return <div className="ColorGrid">
        {box}
    </div>
}