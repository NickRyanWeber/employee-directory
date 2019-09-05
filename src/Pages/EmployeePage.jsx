import React, { useState, useEffect } from 'react'
import axios from 'axios'

const EmployeePage = props => {
  const [id, setId] = useState(props.match.params.id)
  const [employee, setEmployee] = useState({})

  const getEmployee = async () => {
    const resp = await axios.get(
      `https://sdg-staff-directory-app.herokuapp.com/api/rabblehouse/Employees/${id}`
    )
    console.log(resp.data)
    setEmployee(resp.data)
  }

  useEffect(() => {
    getEmployee()
  }, [id])

  useEffect(() => {
    console.log(props)
    console.log(props.match.params.id)
    setId(props.match.params.id)
  }, [props])

  return (
    <section className="container">
      <h1>
        {employee.firstName} {employee.lastName}
      </h1>
      <p>Title - {employee.jobTitle}</p>
      <p>Job Description - {employee.jobDescription}</p>
      <p>Gender - {employee.gender}</p>
      <p>Salary - {employee.salary}</p>
    </section>
  )
}

export default EmployeePage
