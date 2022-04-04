import { v4 as uuidv4 } from 'uuid';

export default function Gelytes({list}){

    return(
        <div style={{backgroundColor:"lightgreen"}}>
            <h2 >Gelytes</h2>
           { list.map(ob => {
                return <p style={{color:ob.color}} key={uuidv4()}>{ob.name}</p>
            })}
        </div>    
    )

}