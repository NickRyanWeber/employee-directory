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
      <h3 className="teal-text text-darken-1">Employee Directory</h3>
      <ul className="collection">
        {employees.map((employee, i) => {
          return <EmployeeRow key={i} data={employee} />
        })}
      </ul>
      <div className="fixed-action-btn">
        <a
          href="/new-employee"
          className="btn-floating btn-large red z-depth-2"
        >
          <i className="large material-icons">add</i>
        </a>
      </div>
    </section>
  )
}

export default EmployeeDirectory
