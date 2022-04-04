import { v4 as uuidv4 } from 'uuid';

export default function Sala({info}){
    return(
        info.map(ob=>{
            return <p style={{color:ob.color, textAlign:"Right"}} id={`v${info.id}`} key={uuidv4()}>{ob.name}</p>
        })
        )
}