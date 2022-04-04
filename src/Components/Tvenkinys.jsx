import Daiktas from "./Daiktas";

export default function Tvenkinys({list}){
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
            <Daiktas  align ="left" info={halflist1}></Daiktas>
            <Daiktas align="right" info={halflist2}></Daiktas>
        </>           
    )

}