import React from "react";
import Article from "./Article";
 function Articlelist({posts}){
    return(
        <main>
            {posts.map((post)=>{return(<Article key={post.id} post={post}/>)
                
            }

            )}
        </main>
    )
 }
 export default Articlelist