import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";

function Profile() {

  const { user } = useContext(UserContext)

  if (!user) return <div>Please Login</div>
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>Welcome : {user.username}</div>
  )
}

export default Profile