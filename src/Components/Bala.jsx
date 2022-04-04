import { v4 as uuidv4 } from 'uuid';

export default function Bala({list}){
     return(
        list.map(ob => 
           <p key={uuidv4()} style={{color:ob.color}}>Vardas: {ob.name}, typas: {ob.type}</p>
         )
    )
}