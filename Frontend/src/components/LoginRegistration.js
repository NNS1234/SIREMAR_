/* 
Nudrat Nawal Saber 1001733394
Feng Jiang 1001888843
Singh Sankalp Sandeep  1001964065
*/
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import axios from 'axios'

const LoginRegistration = () => {

  const [rid, setRid] = useState(0);

  useEffect(()=>{
    let name = "rid=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        console.log(c.substring(name.length, c.length));
        setRid(c.substring(name.length, c.length));
      }
    }
  },[])

  const login = ()=>{
    let formData = new FormData();
    formData.append('login', "login");
    formData.append('email', document.getElementById('email').value);
    formData.append('password', document.getElementById('password').value);

    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }
    axios.post('http://localhost/login', formData, config)
      .then(response => {
        console.log(response.data);
        document.cookie = "rid="+response.data;
        setRid(response.data);
        window.location.href="/";
      })
      .catch(error => {
        console.log(error);
      });
  }

  const register = ()=>{
    let formData = new FormData();
    formData.append('register', "register");
    formData.append('role', document.getElementById('role').value);
    formData.append('name', document.getElementById('name').value);
    formData.append('dob', document.getElementById('dob').value);
    formData.append('address', document.getElementById('address').value);
    formData.append('email', document.getElementById('remail').value);
    formData.append('phone', document.getElementById('phone').value);
    formData.append('password', document.getElementById('rpassword').value);

    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }
    axios.post('http://localhost/register', formData, config)
      .then(response => {
        alert(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div className='LoginRegistration'>
        <Header />
        <section>
          <div className='loginDiv'>
            <h3>Sign In</h3>
            <form action='/admin'>
              <small>You'll get more benefits when you log in.</small>
              <div className='input-div'>
                <input type='text' id="email" placeholder='E-mail'/>
              </div>
              <div className='input-div'>
                <input type='password' id="password" placeholder='Password'/>
              </div>
              <div>
                <button type="button" onClick={login} className='Button'>Sign In</button>
              </div>
              <p><Link to='#'>Forgot password?</Link></p>
            </form>
          </div>
          <div className='registrationDiv'>
            <h3>Register</h3>
            <form action='/admin'>
              <small>Sign up now. </small>
              <select id="role">
                  <option value="Inspectors">Inspectors</option>
                  <option value="Residents">Residents</option>
              </select>
          
              <div className='input-div'>
                  <input type='text' id="name" placeholder='Name'/>
              </div>
              <div className='input-div'>
                  <input type='text' id="dob" placeholder='Date Of Birth'/>
              </div>
              <div className='input-div'>
                  <input type='text' id="address" placeholder='Address'/>
              </div>
              <div className='input-div'>
                  <input type='text' id="remail" placeholder='E-mail'/>
              </div>
              <div className='input-div'>
                  <input type='number' id="phone" placeholder='Phone'/>
              </div>
              <div className='input-div'>
                  <input type='password' id="rpassword" placeholder='Password'/>
              </div>
              <div>
                  <button type="button" onClick={register} className='Button'>Register</button>
              </div>
            </form>
          </div>
        </section>
    </div>
  )
}

export default LoginRegistration