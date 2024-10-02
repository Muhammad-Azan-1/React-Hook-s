import React from "react"
import { memo } from "react";
function Navbar({getName}:any){
    console.log( "Navber re-render")
    return(

        <div>
            This is my Name : {getName()}
            <button>{getName()}</button>
        </div>

    );
}


export default memo(Navbar);

//memo used to freez the component ,  uescallback used to  freez the props  


// re-render generally  means every thing goona updated again

