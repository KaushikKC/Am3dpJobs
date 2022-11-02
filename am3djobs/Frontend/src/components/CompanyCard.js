import React from 'react'
import { useParams } from 'react-router-dom'

const API = "http://localhost:3002/JobRead"

function CompanyCard() {
    let {id} = useParams();
    console.log(id)
  return (
    <div>
        <h1>This is the Id of the Company {id}</h1>
    </div>
  )
}

export default CompanyCard