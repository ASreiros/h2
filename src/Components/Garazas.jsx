import { v4 as uuidv4 } from 'uuid';

export default function Garazas({align,info, key}){

    return(
        <p id={`garazas${info.id}`} key={key} style={{color:info.color, textAlign:align, margin:"0 15px"}}>{info.name}</p>
    )
}