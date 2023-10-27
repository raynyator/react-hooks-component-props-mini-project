import React from "react";
function about({image , abouttext}){
    return(
        <aside>
         <img src={image || 'https://via.placeholder.com/215'} alt="blog logo"/>
         <p>{abouttext}</p>
        </aside>
    )
}
export default about