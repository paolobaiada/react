import Welcome from "./Components/Welcome";
import Age from "./Components/Age";
import React from "react";
class App extends React.Component{

  render(){
   
   return (
    <>
     <Welcome age = {22} name = {<strong>Luca</strong>} /> 
    <Age/>
    </>
   
   )
    
   
   
   
   
   
  
     
    


    
    
    
       
     
    
  }
 
}
export default App;