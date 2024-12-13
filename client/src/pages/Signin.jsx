import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {

  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id] : e.target.value });   
    console.log(formData);  
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const res = await fetch('/api/auth/signin', {
        method : 'POST', 
        headers : { 'Content-Type' : 'application/json'},
        body : JSON.stringify(formData)
      });
      
      const data = await res.json(); 
      console.log(data) 

      if(data.success === false) return
      navigate('/');

    } catch (error) {
      console.log(error);  
    }
  }

  return (
    <form onSubmit={handleSubmit} >
      <input type='email'    placeholder='Email'    id='email'    onChange={handleChange} />
      <input type='password' placeholder='Password' id='password' onChange={handleChange} />
      <button> Sign in </button>
    </form>
  );
}

export default Signin;