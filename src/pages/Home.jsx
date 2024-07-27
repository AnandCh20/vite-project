import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    checkbox: false
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name] : e.target.name === "checkbox" ? e.target.checked : e.target.value,
    })
  }

  
  const [errors, setErrors] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    checkbox:''
  });

  const handleSubmit = (e) =>{
    e.preventDefault();
    let error = {};
    if(!data.name || data.name.trim() === ''){
      error.name = "Name is Required...";
    }
    if(!data.username || data.username.trim() === ''){
      error.username = "Username is Required...";
    }
    if(!data.email || data.email.trim() === ''){
      error.email = "Email is Required...";
    }
    if(!data.phone || data.phone.trim() === ''){
      error.phone = "Mobile is Required...";
    }
    if(!data.checkbox){
      error.checkbox = "Checkbox is Required...";
    }
    // console.log(data);
    setErrors(error);
    // console.log(errors);
    // console.log(error);
    // Storing the data in local Storage
    if(Object.keys(errors).length>0) return errors
    else {
      localStorage.setItem('UserData',JSON.stringify(data))
      alert("Form Submitted Succesfully...")
      setData({
        name: '',
        username: '',
        email: '',
        phone: '',
        checkbox:false
      })
      navigate('/Product');
    }
  }


  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "40vw",
          marginLeft: "auto",
          marginRight: "auto",
          fontFamily:"sans-serif",
          fontSize:"1rem"

        }}>
          <input type="text" value={data.name} name='name' onChange={handleChange} />
          <span style={{color:"red"}}>{errors.name}</span>
          <input type="text" value={data.username} name='username' onChange={handleChange} />
          <span style={{color:"red"}}>{errors.username}</span>
          <input type="text" value={data.email} name='email' onChange={handleChange} />
          <span style={{color:"red"}}>{errors.email}</span>
          <input type="text" value={data.phone} name='phone' onChange={handleChange} />
          <span style={{color:"red"}}>{errors.phone}</span>
          <div>
            <input type="checkbox" id="checkbox" name='checkbox' value={data.checkbox} onChange={handleChange} />
            <label htmlFor="checkbox">Share my registraion data</label>
            <br />
            <span style={{color:"red"}}>{errors.checkbox}</span>
          </div>
          <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Home