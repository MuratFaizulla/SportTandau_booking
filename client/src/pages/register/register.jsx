import React, {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import axios, { Axios } from "axios";
import Axios from 'axios';
import "./register.css"
import { LOGIN_PAGE_ROUTE } from "../../utils/consts";

const Register = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSumbit = async (e) => {
    e.preventDefault();
    
    Axios.post("/auth/register", {
      username,
      email,
      password,
    }).then(response =>{
      if(response.data.status){
        navigate('/login')
      }
    
    }).catch(err=>{
      console.log(err)
    })
  }



  return (
    <div className="sign-up-container">

      <form className="sign-up-form" onSubmit={handleSumbit}>
        <h2>Тіркелу</h2>

        <label htmlFor="username">Пайдаланушы аты</label>
        <input type="text" placeholder="Пайдаланушы аты"
          onChange={(e) => setUsername(e.target.value)} />


        <label htmlFor="email">Электрондық пошта</label>
        <input type="email" autoComplete="off" placeholder="Email"
          onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="password">Құпия сөз</label>
        <input type="password" autoComplete="off" placeholder="********"
          onChange={(e) => setPassword(e.target.value)} />

        <button type="submit"> Тіркелу</button>

        <p> Есептік жазбаңыз бар ма? <Link to={LOGIN_PAGE_ROUTE}>Кіру</Link></p>
      </form>

    </div>
  );
};

export default Register;
