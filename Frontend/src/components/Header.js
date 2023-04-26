/* 
Nudrat Nawal Saber 1001733394
Feng Jiang 1001888843
Singh Sankalp Sandeep  1001964065
*/
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Header = () => {

  const [rid, setRid] = useState(0);
  const [role, setRole] = useState(0);

  const checkrole = (rrid)=>{
    let formData = new FormData();
    formData.append('checkid', "checkid");
    formData.append('rid', rrid);

    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }
    axios.post('http://localhost/checkuser', formData, config)
      .then(response => {
        console.log(response.data);
        setRole(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const logout = ()=>{
    document.cookie = "rid=;";
    window.location.href="/";
  }

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
        checkrole(c.substring(name.length, c.length));
      }
    }
  },[])

  return (
    <header className='Header'>
      <nav>
        <h1><Link to='/'>Siremar</Link></h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/services'>Services</Link></li>
          <li><Link to='/contacts'>Contact</Link></li>
          {rid==0?<li><Link to='/login_registration'>Login/Register</Link></li>:null}
          {role=="Admin"?<li><Link to='/Admin'>Admin</Link></li>:null}
          {role=="Admin"?<li><Link to='/Chat'>Chat/Blog</Link></li>:null}
          {role=="Inspectors"?<li><Link to='/Inspector'>Inspector</Link></li>:null}
          {role=="Residents"?<li><Link to='/Resident'>Residents</Link></li>:null}
          {rid!=0?<li><Link to="#" onClick={logout}>Logout</Link></li>:null}
        </ul>
      </nav>
    </header>
  )
}

export default Header