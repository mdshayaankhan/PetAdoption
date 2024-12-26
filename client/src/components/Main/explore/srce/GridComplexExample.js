import React, { useState } from 'react';
import axios from 'axios';
import './GridComplexExample.css'; // Import the CSS file

function GridComplexExample() {
  const [rescued, setRescued] = useState(false);
  const [formData, setFormData] = useState({
    fname: '',
    email: '',
    adr: '',
    city: '',
    state: '',
    phone: '',
    upi: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleRescue = (e) => {
    e.preventDefault();
    setRescued(true);

    axios.post('http://localhost:5000/api/rescue', formData)
      .then((response) => {
        console.log('Rescue successful:', response.data);
        alert('Rescue request submitted successfully!');
        setRescued(false); // Reset the rescued state
      })
      .catch((error) => {
        console.error('There was an error submitting the rescue request!', error);
        alert('Failed to submit rescue request.');
        setRescued(false); // Reset the rescued state
      });
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleRescue}>
        <div className="row">
          <div className="col-50">
            <h3>Billing Address</h3>
            <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Sai.Mani" onChange={handleInputChange} />
            <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="Saimani@example.com" onChange={handleInputChange} />
            <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="Miyapur" onChange={handleInputChange} />
            <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="Hyderabad" onChange={handleInputChange} />

            <div className="row">
              <div className="col-50">
                <label htmlFor="state">State</label>
                <input type="text" id="state" name="state" placeholder="Telangana" onChange={handleInputChange} />
              </div>
            </div>
          </div>

          <div className="col-50">
            <h3>Payment</h3>
            <label htmlFor="cname">Name</label>
            <input type="text" id="cname" name="cardname" placeholder="Sai.Mani" onChange={handleInputChange} />
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" name="phone" placeholder="+919708732568" onChange={handleInputChange} />
            <label htmlFor="upi">UPI Link</label>
            <input type="text" id="upi" name="upi" placeholder="your-upi@bank" onChange={handleInputChange} />
          </div>
        </div>
        <label>
          <input type="checkbox" checked="checked" name="sameadr" /> Shipping address same as billing
        </label>
        <input type="submit" value="Continue to checkout" className="btn btn-primary" />
      </form>
    </div>
  );
}

export default GridComplexExample;
