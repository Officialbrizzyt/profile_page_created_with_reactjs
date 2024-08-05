import React from 'react'
import './ProfileInfo.css'

const ProfileInfo = ({ name, title }) => {
  return (
    <div className="profile_name">
        <h2>{name} <img src="../public/assets/verified.png" alt="verified ticker" /> </h2>
        <p>{title}</p>
    </div>
  );
}

export default ProfileInfo