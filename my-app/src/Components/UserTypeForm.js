import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/UserForm.css';

const UserTypeForm = () => {
  const [userType, setUserType] = useState('');
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = () => {
    if (userType && formData.firstName && formData.lastName && formData.birthDate && formData.mobileNo && formData.email) {
      navigate('/details', { state: { userType, formData } });
    } else {
      alert('Please fill all the fields');
    }
  };

  return (
    <div className="form-container">
      <h1>User Type Form</h1>
      <div className="checkbox-group">
        <label>
          <input
            type="radio"
            name="userType"
            value="student"
            checked={userType === 'student'}
            onChange={(e) => setUserType(e.target.value)}
          />
          Student
        </label>
        <label>
          <input
            type="radio"
            name="userType"
            value="tutor"
            checked={userType === 'tutor'}
            onChange={(e) => setUserType(e.target.value)}
          />
          Tutor
        </label>
      </div>

      <form>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName || ''}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName || ''}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Birth Date:</label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate || ''}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Mobile No:</label>
          <input
            type="tel"
            name="mobileNo"
            value={formData.mobileNo || ''}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email || ''}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="button" onClick={handleNext} className="full-width">
          Next
        </button>
      </form>
    </div>
  );
};

export default UserTypeForm;