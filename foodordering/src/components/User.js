import { useState } from "react";

const User = ({ name, location, phoneno,email }) => {
  console.log(name);
  return (
    <div className="user-card bg-gray-50 rounded-lg">
      <h2>Name: {name}</h2>
      <h3>Location : {location}</h3>
      <h4>PhoneNo : {phoneno}</h4>
      <h4>Email: {email}</h4>
    </div>
  );
};
export default User;
