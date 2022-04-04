import { v4 as uuidv4 } from 'uuid';


export default function Vardas({info}){
    return(
        info.map(ob=>{
            return <p id={`vardas${ob.id}`} key={uuidv4()} style={{color:ob.color, textAlign:"center"}}>{ob.name}</p>
        })
    )
}