import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import '../Styles/UserForm.css';

const UserDetailsForm = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  const { userType, formData } = location.state;
  const [additionalData, setAdditionalData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdditionalData({
      ...additionalData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    alert('Form Submitted');
    console.log('User Data:', { ...formData, ...additionalData });
    
    // Navigate to home page after form submission
    navigate('/'); // Assuming your home page route is '/'
  };

  return (
    <div className="form-container">
      <h1>{userType === 'student' ? 'Student Details' : 'Tutor Details'}</h1>
      <form>
        {userType === 'student' && (
          <>
            <div>
              <label>College Name:</label>
              <input
                type="text"
                name="collegeName"
                value={additionalData.collegeName || ''}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>State:</label>
              <select
                name="state"
                value={additionalData.state || ''}
                onChange={handleInputChange}
                required
              >
                <option value="">Select State</option>
                <option value="state1">State 1</option>
                <option value="state2">State 2</option>
              </select>
            </div>
            <div>
              <label>District:</label>
              <select
                name="district"
                value={additionalData.district || ''}
                onChange={handleInputChange}
                required
              >
                <option value="">Select District</option>
                <option value="district1">District 1</option>
                <option value="district2">District 2</option>
              </select>
            </div>
            <div>
              <label>Pincode:</label>
              <input
                type="text"
                name="pincode"
                value={additionalData.pincode || ''}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Exam Preparing For:</label>
              <select
                name="exam"
                value={additionalData.exam || ''}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Exam</option>
                <option value="jee">JEE</option>
                <option value="neet">NEET</option>
                <option value="cet">CET</option>
              </select>
            </div>
          </>
        )}

        {userType === 'tutor' && (
          <>
            <div>
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={additionalData.address || ''}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Qualification:</label>
              <input
                type="text"
                name="qualification"
                value={additionalData.qualification || ''}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Year and Grade of Passing:</label>
              <input
                type="text"
                name="yearGrade"
                value={additionalData.yearGrade || ''}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Upload Proof of Qualification:</label>
              <input
                type="file"
                name="proof"
                onChange={(e) =>
                  setAdditionalData({ ...additionalData, proof: e.target.files[0] })
                }
                required
              />
            </div>
          </>
        )}

        <button type="button" onClick={handleSubmit} className="full-width">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserDetailsForm;
