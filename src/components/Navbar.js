import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
export default function Navbar() {
  const navigate =useNavigate();
  return (
    <div>
      <button onClick={()=>navigate("/mahesh")}>Go to mahesh</button>
    </div>
  )
}
