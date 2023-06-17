import React, { useState } from 'react';
import './style.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div className="form">
      <div className="form-body">
        <div className="username">
          <label className="form__label" htmlFor="firstName">
            First Name
          </label>
          <input
            className="form__input"
            type="text"
            value={formData.firstName}
            onChange={handleInputChange}
            id="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="lastname">
          <label className="form__label" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            className="form__input"
            onChange={handleInputChange}
            placeholder="Last Name"
          />
        </div>
        <div className="fathername">
          <label className="form__label" htmlFor="fathername">
            Father name
          </label>
          <input
            type="text"
            id="fathername"
            value={formData.fathername}
            className="form__input"
            onChange={handleInputChange}
            placeholder="Father name"
          />
        </div>
        <div className="mothername">
          <label className="form__label" htmlFor="mothername">
            Mother Name
          </label>
          <input
            type="text"
            id="mothername"
            value={formData.mothername}
            className="form__input"
            onChange={handleInputChange}
            placeholder="Mother name"
          />
        </div>
        <div className="Age">
          <label className="form__label" htmlFor="Age">
            Age
          </label>
          <input
            type="number"
            id="Age"
            value={formData.age}
            className="form__input"
            onChange={handleInputChange}
            placeholder="Age"
          />
        </div>
        <div className="dob">
          <label className="form__label" htmlFor="dob">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            value={formData.dob}
            className="form__input"
            onChange={handleInputChange}
            placeholder="Date of Birth"
          />
        </div>
        <div className="Address">
          <label className="form__label" htmlFor="address">
            Address
          </label>
          <input
            type="text"
            id="address"
            value={formData.address}
            className="form__input"
            onChange={handleInputChange}
            placeholder="Address"
          />
        </div>
      </div>
      <div className="footer">
        <button onClick={handleSubmit} type="submit" className="btn">
          Register
        </button>
      </div>
    </div>
  );
}

export default RegistrationForm;
