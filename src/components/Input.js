import React, { useRef , useEffect} from "react";
import "../static/form.css"
import Recipe from "./Recipe";
import Getrecipe from "./Getrecipe";
import { getRecipeFromMistral } from "./ai";
// let ingrident_arr=['onion','capsicom'];

export function Input()
{
  
  let [ingrident_arr,setingrident_arr]=React.useState([])
  const formRef = useRef(null); 

  const scrollRef=useRef(null);

  function handelform(event)
  { 
    event.preventDefault();
    const formdata= new FormData(event.currentTarget)
    const data=formdata.get("ingridents")
    setingrident_arr((previtem)=>{
      return([...previtem,data])
    })
    formRef.current.reset();
  }

  let [recipe,setrecipe]=React.useState("")

  async function generaterecipe()
  {
    const recipemarkdown = await getRecipeFromMistral(ingrident_arr)
    setrecipe((prevrecipe)=>{
      return (prevrecipe=recipemarkdown)
    })
  }

  useEffect(()=>{
    if (recipe && scrollRef) {
      scrollRef.current.scrollIntoView({behavior:"smooth"});
    }
  })

  return(
    <div className="main">
      <form ref={formRef} onSubmit={handelform} className="inputform">
        <input type="text" placeholder="e.g cheese" name="ingridents" required></input>
        <button>+ Add Ingredients</button>
      </form>
      
      <Getrecipe ref={scrollRef} ingrident_arr={ingrident_arr} click={generaterecipe} />

      {recipe?<Recipe recipe={recipe}/>:null}
    </div>
  )
}