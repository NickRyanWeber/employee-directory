import React, { useState, useEffect } from 'react'

const EmployeeRow = props => {
  const [firstName, setFirstName] = useState('First Name')
  const [lastName, setLastName] = useState('Last Name')
  const [jobTitle, setJobTitle] = useState('Job Title')
  const [fullTime, setFullTime] = useState('Part-Time')
  console.log(props)

  useEffect(() => {
    setFirstName(props.data.firstName)
    setLastName(props.data.lastName)
    setJobTitle(props.data.jobTitle)
    setFullTime(props.data.isFullTime ? 'Full-Time' : 'Part-Time')
  }, [props])

  return (
    <>
      <a href="#" className="collection-item avatar">
        <img
          src={`https://api.adorable.io/avatars/285/${props.data.id}`}
          alt=""
          className="circle"
        />
        <span className="title">
          {`${firstName}
          ${lastName}`}
        </span>
        <p>
          {jobTitle} <br />
          {fullTime}
        </p>
        <i className="material-icons secondary-content">link</i>
      </a>
    </>
  )
}

export default EmployeeRow
