import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice.js";
import { useDispatch, useSelector } from "react-redux";


function Signin() {

  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);  

  const navigate = useNavigate();
  const dispatch = useDispatch();   
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id] : e.target.value });     
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method : 'POST', 
        headers : { 'Content-Type' : 'application/json'},
        body : JSON.stringify(formData)
      });
      
      const data = await res.json(); 
      console.log(data) 
      
      if(data.success === false) {
        dispatch(signInFailure(data))
        return
      }
      dispatch(signInSuccess(data)); 
      navigate('/');
      
    } catch (error) {
      dispatch(signInFailure(error));  
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