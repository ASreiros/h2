import Rand from "./Rand"

export default function RandomColor(){
    const a = Rand(0,256);
    const b = Rand(0,256);
    const c = Rand(0,256);
    const color = `rgb(${a}, ${b}, ${c})`;
    return color
    
}