import { v4 as uuidv4 } from 'uuid';

export default function Akvariumas({align,info, key}){
        
    return(
        <p id={`akvariumas${info.id}`} key={key} style={{color:info.color, textAlign:align, margin:"0 15px"}}>{info.name}</p>
    )
}