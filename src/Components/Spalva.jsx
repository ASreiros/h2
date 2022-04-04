import { v4 as uuidv4 } from 'uuid';


export default function Spalva({info}){
    return(
        info.map(ob=>{
            return <p id={`splava${ob.id}`} key={uuidv4()} style={{color:ob.color, textAlign:"right", margin:"0 15px"}}>{ob.name}</p>
        })
    )
}