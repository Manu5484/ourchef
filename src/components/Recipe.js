import React from "react";
import Markdown from 'react-markdown'
import "../static/form.css"

export default function Recipe(props)
{
  return(
    <div className="recipecontent">
      <h1>Our Recipe :</h1>
      <div className="reactMarkDown">
        <Markdown >
          {props.recipe}
        </Markdown>
      </div>
    </div>
  )
}