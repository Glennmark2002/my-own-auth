import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

  const [formData, setFormData] = useState({});   
  const navigate = useNavigate();   

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value}); 
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/auth/signup', {
        method : "POST",  
        headers : {"Content-Type" : "application/json"}, 
        body : JSON.stringify(formData)
      });  
      const data = await res.json(); 
      console.log(data);

      if(data.success === false) return
    
      navigate('/sign-in');   

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit} >
      <input type="text"     placeholder="Username" id='username' onChange={handleChange} />
      <input type="email"    placeholder="Email"    id='email'    onChange={handleChange} />
      <input type="password" placeholder="Password" id='password' onChange={handleChange} />
      <button> Sign up </button>
      <h1 className="bg-slate-950">TEST</h1>
    </form>
  );
}

export default Signup;