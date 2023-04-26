/* 
Nudrat Nawal Saber 1001733394
Feng Jiang 1001888843
Singh Sankalp Sandeep  1001964065
*/
import React from 'react'
import Header from './Header'
import axios from 'axios'

const Contacts = () => {

  const contact = ()=>{
    let formData = new FormData();
    formData.append('contact', "contact");
    formData.append('fname', document.getElementById('fname').value);
    formData.append('lname', document.getElementById('lname').value);
    formData.append('phone', document.getElementById('phone').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('query', document.getElementById('query').value);

    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }
    axios.post('http://localhost/contact', formData, config)
      .then(response => {
        alert(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      <div className='Contacts'>
        <Header/>
      </div>
      <section className='QuerySection'>
        <p>Do you have any questions? Please leave a message.</p>
        <form>
          <div className='inputs'>
            <input type='text' id="fname" placeholder='First Name'/>
            <input type='text' id="lname" placeholder='Last Name'/>
            <input type='text' id="phone" placeholder='Phone No.'/>
            <input type='text' id="email" placeholder='E-mail'/>
          </div>
          <textarea placeholder='Query' id="query"></textarea>
          <div>
            <button type="button" onClick={contact} className='Button'>Submit</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Contacts