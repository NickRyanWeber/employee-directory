import React, { useEffect, useState } from 'react'
import EmployeeRow from '../components/EmployeeRow'
import axios from 'axios'
import M from 'materialize-css'

const EmployeeDirectory = () => {
  const [employees, setEmployees] = useState([[]])

  const getEmployees = async () => {
    const resp = await axios.get(
      'https://sdg-staff-directory-app.herokuapp.com/api/rabblehouse/Employees'
    )
    setEmployees(resp.data)
  }

  useEffect(() => {
    getEmployees()
    M.AutoInit()
  }, [])

  return (
    <section className="container">
      <h1>EmployeeDirectory</h1>
      <ul className="collection">
        {employees.map((employee, i) => {
          return <EmployeeRow key={i} data={employee} />
        })}
      </ul>
    </section>
  )
}

export default EmployeeDirectory
