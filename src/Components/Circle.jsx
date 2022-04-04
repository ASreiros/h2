import { Component } from "react";

class Circle extends Component {
    
    constructor(props){
        super();
        // this.valio = this.valio.bind(this)
        this.state={color:"blue"} // pradines state reiksmes
    }

    // valio(){
    //     console.log("valio!");  
    //     this.setState({
    //         color:"red"
    //     })
    // }

     valio = () =>{
         console.log("valio!"); 
         if(this.state.color === "red"){ 
         this.setState({
             color:"blue"
         })
        } else{
            this.setState({
                color:"red"
            })
        }
         setTimeout(() => console.log(this.state.color), 1)
     }



    render(){
        return(
        <>
            <div style={{
                width: this.props.size,
                height: this.props.size,
                borderRadius: "50%",
                backgroundColor: this.state.color
                }}>
                
            </div>
            <button onClick={this.valio}>valio!</button> 
            {/* <button onClick={() =>this.valio()}>valio!</button>  */}
        </>    
        )
    }
}

export default Circle