import Akvariumas from "./Akvariumas"
import Garazas from "./Garazas"
import Namas from "./Namas"
import Narvas from "./Narvas"
import { v4 as uuidv4 } from 'uuid';

export default function Pasaulish1({info}){
    return(
        info.map(ob => {
                switch (ob.type) {
                    case "man":
                        return <Namas info={ob} align="left" key={uuidv4()}></Namas>
                    case "car":
                        return <Garazas info={ob} align="left" key={uuidv4()}></Garazas>
                    case "animal":
                        return <Narvas info={ob} align="left" key={uuidv4()}></Narvas>
                    case "fish":
                        return <Akvariumas info={ob} align="left" key={uuidv4()}></Akvariumas>
                    default:
                    break;
                }
            })
    )            
}
