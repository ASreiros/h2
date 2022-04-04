import { v4 as uuidv4 } from 'uuid';
export default function Daiktas({align, info}){
    return(
        info.map( ob =>{
            return (<p key={uuidv4()} id={`d${info.id}`} style={{color:ob.color, textAlign:align, borderColor:"black", borderWidth:"1px", borderStyle:"dashed", margin:"10px"}}>{ob.name}, {ob.type}</p>)}
        ) 
    )
}