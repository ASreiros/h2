import Akvariumas from "./Akvariumas"
import Garazas from "./Garazas"
import Namas from "./Namas"
import Narvas from "./Narvas"
import { v4 as uuidv4 } from 'uuid';
import Pasaulish1 from "./Pasaulish1";
import Pasaulish2 from "./Pasaulish2";


export default function Pasaulis({list}){
    const halflist1 = []
    list.forEach(o => {
      if(o.id % 2===0){
          halflist1.push(o)
      }  
    })
    const halflist2 = []
    list.forEach(o => {
      if(o.id % 2===1){
          halflist2.push(o)
      }  
    })
    
    return(
         <>
            <Pasaulish1 info={halflist1}></Pasaulish1>
            <Pasaulish2 info={halflist2}></Pasaulish2>
         </>   
             
        )
}