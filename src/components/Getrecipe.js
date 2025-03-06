import React from "react";

export default function Getrecipe(props)
{
  let items=props.ingrident_arr.map((el)=>{
    return(<li key={el}>{el}</li>)
  })

  return(
    <>
      <h2>Ingredients Included : </h2>
      {props.ingrident_arr.length>0?<ul>{items}</ul>:<p>no items included</p>}
      {props.ingrident_arr.length>3?<div className="recipeGenerate">
        <div ref={props.ref} className="readyText">
          <h2>Ready for a recipe ?</h2>
          <p>generate a recipe from your list of ingredients</p>
        </div>
        <button className="generateButton" onClick={props.click}>Get a recipe</button>
      </div>:null}
    </>
  )
}