import React from "react";
import logo from "../img/logo.png"
import about from "../img/about.png"
import "../static/header.css"

export function Header(){
  return(
    <header className="header">
      <div className="centerdiv">
        <img src={logo} alt="logo" className="logo"/>
        <h1 className="name">Our Chef</h1>
      </div>
      <div className="aboutdiv"><img src={about} alt="about" className="about"></img></div>
    </header>
  )
}