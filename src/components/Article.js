import React from "react";

function Article({title,date,preview}){
    const ifnodate = date ? new Date(date).toLocaleDateString() : "January 1, 1970";
    return (
        <article>
      <h3>{title}</h3>
      <small>{ifnodate}</small>
      <p>{preview}</p>
    </article>
    )
}
export default Article