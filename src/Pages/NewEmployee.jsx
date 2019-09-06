import React, { useState, useEffect } from 'react'

const NewEmployee = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')

  return (
    <section className="container">
      <h3>New Employee</h3>
      <form action="" className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input id="firstName" type="text" required className="validate" />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="input-field col s6">
            <input id="lastName" type="text" required className="validate" />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="email" type="text" required className="validate" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field col s6">
            <input id="phone" type="text" required className="validate" />
            <label htmlFor="phone">Phone Number</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="jobTitle" type="text" required className="validate" />
            <label htmlFor="jobTitle">Job Title</label>
          </div>
          <div className="input-field col s6">
            <input
              id="jobDescription"
              type="text"
              required
              className="validate"
            />
            <label htmlFor="jobDescription">Job Description</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="address" type="text" required className="validate" />
            <label htmlFor="address">Address</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s4">
            <input id="city" type="text" required className="validate" />
            <label htmlFor="city">City</label>
          </div>
          <div className="input-field col s4">
            <input id="state" type="text" required className="validate" />
            <label htmlFor="state">State</label>
          </div>
          <div className="input-field col s4">
            <input id="zip" type="text" required className="validate" />
            <label htmlFor="zip">Zip</label>
          </div>
        </div>
        <button
          class="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Submit
          <i class="material-icons right">send</i>
        </button>
      </form>
    </section>
  )
}

export default NewEmployee
