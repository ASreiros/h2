import { v4 as uuidv4 } from 'uuid';

export default function Namas({align,info, key}){
    console.log(align);
    return(
        <p id={`namas${info.id}`} key={key} style={{color:info.color, textAlign:align, margin:"0 15px"}}>{info.name}</p>
    )
}