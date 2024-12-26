import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import logoImage from "./images/picpet.png";
import picimg1 from "./images/pet4.svg";
import contdog from "./images/contimg2.svg";
import contcat from "./images/contimg3.svg";
import contbird from "./images/contimg4.svg";

const Main = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUserData(token);
    }
  }, []);

  const fetchUserData = async (token) => {
    try {
      const response = await fetch("/api/userdata", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const userData = await response.json();
        setUsername(userData.firstname);
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <div className={`${styles.logo_placeholder} ${styles.logo}`}>
          <img className={styles.petlogoimg} src={logoImage} alt="Logo" />
        </div>
        <nav className={styles.navigation}>
          <Link to="/petcare">PetCare</Link>
          <Link to="/Register">Register</Link>
          <Link to="/about">AboutUs</Link>
          <Link to="/help">Help</Link>
          <button className={styles.white_btn} onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </nav>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img className={styles.pet2} src={picimg1} alt="Logo" />
        <div className={styles.mainline}>
          Life is better when you Adopt.Come meet your new best friend.
        </div>
      </div>
      <div className={styles.subline}>
        <p>Animals Available For <br /> Adoption Near You</p>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <img src={contdog} alt="Pet Image" />
          <h2>Dog</h2>
          <button onClick={() => navigate("/explore")}>Explore</button>
        </div>
        <div className={styles.card}>
          <img src={contcat} alt="Pet Image" />
          <h2>Cat</h2>
          <button onClick={() => navigate("/explore")}>Explore</button>
        </div>
        <div className={styles.card}>
          <img src={contbird} alt="Pet Image" />
          <h2>Bird</h2>
          <button onClick={() => navigate("/explore")}>Explore</button>
        </div>
      </div>
      <div><br></br></div>
    </div>
  );
};

export default Main;
