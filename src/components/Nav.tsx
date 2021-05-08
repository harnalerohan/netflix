import { useEffect, useState } from "react"
import "../css/nav.css"

const Nav = () => {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100){
        handleShow(true)
      }else{
        handleShow(false)
      }
    })
    return () => {
      window.removeEventListener("scroll", () => {})
    }
  }, [])


  return (
    <nav className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix logo" />
    </nav>
  )
}

export default Nav
