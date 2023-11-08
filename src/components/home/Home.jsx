import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

    const initialInputsData = {
        email: "",
        password: "",
    };
  return (
    <div>
      <h1>Home</h1>
      <Link to="/login">Login</Link>
    </div>
    
  )
}

export default Home