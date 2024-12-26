import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
    price: "",
    image: ""
  });
  const [popupVisible, setPopupVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/products", formData);
      console.log(response.data);
      setPopupVisible(true);
      // Clear the form inputs
      setFormData({
        name: "",
        type: "",
        description: "",
        price: "",
        image: ""
      });
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="containerx">
      <h1 className="heading">Register Pet</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" required />
        </div>
        <div className="form-group">
          <label className="form-label">Gender:</label>
          <input type="text" name="type" value={formData.type} onChange={handleChange} className="form-input" required />
        </div>
        <div className="form-group">
          <label className="form-label">Description:</label>
          <input type="text" name="description" value={formData.description} onChange={handleChange} className="form-input" required />
        </div>
        <div className="form-group">
          <label className="form-label">Price:</label>
          <input type="text" name="price" value={formData.price} onChange={handleChange} className="form-input" pattern="[0-9]*" title="Please enter numbers only" required />
        </div>
        <div className="form-group">
          <label className="form-label">Image URL:</label>
          <input type="text" name="image" value={formData.image} onChange={handleChange} className="form-input" required />
        </div>
        <button type="submit" className="form-button">Register</button>
      </form>
      {popupVisible && (
        <div className="popup active">
          <h2 className="popup-title">Product Registered Successfully!</h2>
          <button onClick={closePopup} className="popup-button">Close</button>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
