import React, { useState, useEffect } from 'react'
import axios from 'axios'

const NewEmployee = () => {
  const [form, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    jobDescription: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  })

  const addNewEmployee = async e => {
    e.preventDefault()
    const resp = await axios.post(
      `https://sdg-staff-directory-app.herokuapp.com/api/rabblehouse/Employees`,
      { form }
    )
  }

  const updateField = e => {
    setValues({
      ...form,
      [e.target.id]: e.target.value
    })
  }

  return (
    <section className="container">
      <h3>New Employee</h3>
      <form action="" className="col s12" onSubmit={addNewEmployee}>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="firstName"
              type="text"
              required
              className="validate"
              onChange={updateField}
            />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="input-field col s6">
            <input
              id="lastName"
              type="text"
              required
              className="validate"
              onChange={updateField}
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="email"
              type="text"
              required
              className="validate"
              onChange={updateField}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field col s6">
            <input
              id="phone"
              type="text"
              required
              className="validate"
              onChange={updateField}
            />
            <label htmlFor="phone">Phone Number</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="jobTitle"
              type="text"
              required
              className="validate"
              onChange={updateField}
            />
            <label htmlFor="jobTitle">Job Title</label>
          </div>
          <div className="input-field col s6">
            <input
              id="jobDescription"
              type="text"
              required
              className="validate"
              onChange={updateField}
            />
            <label htmlFor="jobDescription">Job Description</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="address"
              type="text"
              required
              className="validate"
              onChange={updateField}
            />
            <label htmlFor="address">Address</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s4">
            <input
              id="city"
              type="text"
              required
              className="validate"
              onChange={updateField}
            />
            <label htmlFor="city">City</label>
          </div>
          <div className="input-field col s4">
            <input
              id="state"
              type="text"
              required
              className="validate"
              onChange={updateField}
            />
            <label htmlFor="state">State</label>
          </div>
          <div className="input-field col s4">
            <input
              id="zip"
              type="text"
              required
              className="validate"
              onChange={updateField}
            />
            <label htmlFor="zip">Zip</label>
          </div>
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Submit
          <i className="material-icons right">cloud_upload</i>
        </button>
      </form>
    </section>
  )
}

export default NewEmployee
