import Valtis from "./Valtis";
import { v4 as uuidv4 } from 'uuid';
import Laivas from "./Laivas";
import Sala from "./Sala";

export default function Jura({list}){
    const listMan = []
    const listCar = []
    const listAnimal = []
    const listFish = []
    list.forEach(ob => {
        switch (ob.type) {
            case "man":
                listMan.push(ob)
            break;
            case "car":
                listCar.push(ob)
            break;
            case "animal":
                listAnimal.push(ob)
            break;
            case "fish":
                listFish.push(ob)
            break;
            default:
                listFish.push(ob)
            break;
        }
    });
    
    return(
        <>
            <Valtis info={listMan}></Valtis>
            <Laivas info={listCar}></Laivas>
            <Sala info={listAnimal}></Sala>
            {
              listFish.map(ob => {
                  return <h3 id={`fish${ob.id}`} key={uuidv4()} style={{color:ob.color}}>{ob.name}</h3>
              })  
            }

        </>
        )
}