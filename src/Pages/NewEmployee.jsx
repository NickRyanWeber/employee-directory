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
    console.log(form)
    const resp = await axios.post(
      `https://sdg-staff-directory-app.herokuapp.com/api/rabblehouse/Employees`,
      form
    )
    console.log(resp.data)
  }

  const updateField = e => {
    setValues({
      ...form,
      [e.target.id]: e.target.value
    })
  }

  return (
    <section className="container">
      <h3 className="teal-text text-darken-1">New Employee</h3>
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
            <label htmlFor="firstName" className="teal-text text-dark-4">
              First Name
            </label>
          </div>
          <div className="input-field col s6">
            <input
              id="lastName"
              type="text"
              required
              className="validate"
              onChange={updateField}
            />
            <label htmlFor="lastName" className="teal-text text-dark-4">
              Last Name
            </label>
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
            <label htmlFor="email" className="teal-text text-dark-4">
              Email
            </label>
          </div>
          <div className="input-field col s6">
            <input
              id="phone"
              type="text"
              required
              className="validate"
              onChange={updateField}
            />
            <label htmlFor="phone" className="teal-text text-dark-4">
              Phone Number
            </label>
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
            <label htmlFor="jobTitle" className="teal-text text-dark-4">
              Job Title
            </label>
          </div>
          <div className="input-field col s6">
            <input
              id="jobDescription"
              type="text"
              required
              className="validate"
              onChange={updateField}
            />
            <label htmlFor="jobDescription" className="teal-text text-dark-4">
              Job Description
            </label>
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
            <label htmlFor="address" className="teal-text text-dark-4">
              Address
            </label>
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
            <label htmlFor="city" className="teal-text text-dark-4">
              City
            </label>
          </div>
          <div className="input-field col s4">
            <input
              id="state"
              type="text"
              required
              className="validate"
              onChange={updateField}
            />
            <label htmlFor="state" className="teal-text text-dark-4">
              State
            </label>
          </div>
          <div className="input-field col s4">
            <input
              id="zip"
              type="text"
              required
              className="validate"
              onChange={updateField}
            />
            <label htmlFor="zip" className="teal-text text-dark-4">
              Zip
            </label>
          </div>
        </div>
        <button
          className="btn waves-effect waves-light teal darken-2"
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
