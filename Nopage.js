import React from "react";
import Base from "../Base/Base";
import { useHistory } from "react-router-dom";


function Nopage(){
    const history= useHistory()
    return(
        <Base
        title={"404 No Page Found"}
        description={"Wrong url please click below button"}
        
        >
        <button
        onClick={()=>history.push("/")}
      >
            Go to Dashboard
        </button>
        
      
        </Base>
    )
}

export default Nopage