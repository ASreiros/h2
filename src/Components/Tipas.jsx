import { v4 as uuidv4 } from 'uuid';


export default function Tipas({info}){
    return(
        info.map(ob=>{
            return <p id={`tipas${ob.id}`} key={uuidv4()} style={{color:ob.color, textAlign:"left", margin:"0 15px"}}>{ob.name}, tipas {ob.type}</p>
        })
    )
}