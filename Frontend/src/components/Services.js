/* 
Nudrat Nawal Saber 1001733394
Feng Jiang 1001888843
Singh Sankalp Sandeep  1001964065
*/
import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'

const Services = () => {
	
	let formData = new FormData();
    formData.append('count', "count");

    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }
    const [userr, setUR] = useState([]);
	axios.post('http://localhost/getblogs', formData, config)
      .then(response => {
        let users = response.data.split(';');
        console.log(users);
        var urarr = [];
        for(var i=1; i<users.length; i++){
			var utemp = users[i].split(',');
			urarr.push({
				image: utemp[0],
				title: utemp[1],
				content: utemp[2],
			});
            console.log(urarr);
        }
        setUR(urarr);
      })
      .catch(error => {
        console.log(error);
      });
  return (
    <div>
      <div className='Services'>
        <Header/>
      </div>
      <section className='ServiceGrid_new'>
        <div>
          <div className='PlaceHolder1'></div>
              <h3>Create your resident account</h3>
              <p>Every resident can create his own account and log in to the platform at any time to manage his own account.</p>
        </div>
        <div>
          <div className='PlaceHolder2'></div>
              <h3>Get discounts for various things like shops and travels</h3>
              <p>Siremar will regularly provide users with some welfare activities, such as we will provide discounts on air tickets, store promotions and so on. Users can log in to Siremar for more discount information.</p>
        </div>
        <div>
          <div className='PlaceHolder3'></div>
            <h3>Get info about school admission and more...</h3>
            <p>Siremar will provide a lot of school information. If users want to register for a school, they can log in to Siremar to get help, and Siremar will also provide more services for residents.</p>
        </div>
      </section>
    </div>
  )
}

export default Services