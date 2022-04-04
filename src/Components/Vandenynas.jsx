import Spalva from "./Spalva";
import Tipas from "./Tipas";
import Vardas from "./Vardas";

export default function Vandenynas({list}){
    const listTipas = JSON.parse(JSON.stringify(list));
    const listVardas = JSON.parse(JSON.stringify(list));
    const listSpalva = JSON.parse(JSON.stringify(list));
    


    // listTipas.sort((a, b) =>  String(b.type).localeCompare(a.type))
    // listTipas.sort((a, b) => (a.type > b.type)
    listTipas.sort((a, b) => (a.type > b.type) ? 1 : (a.type === b.type) ? ((a.name > b.name) ? 1 : -1) : -1 )
    listVardas.sort((a, b) => (a.name > b.name) ? 1 : (a.name === b.name) ? ((a.type > b.type) ? 1 : -1) : -1 )
    listSpalva.sort((a, b) => (a.color > b.color) ? 1 : (a.color === b.color) ? ((a.name > b.name) ? 1 : -1) : -1 )

    return(
        <>
            <p style={{textAlign:"left"}}>Tipas</p>
            <Tipas info={listTipas}></Tipas>
            <p style={{textAlign:"center"}}>Vardas</p>
            <Vardas info={listVardas}></Vardas>
            <p style={{textAlign:"Right"}}>Spalva</p>
            <Spalva info={listSpalva}></Spalva>
        </>
    )
}