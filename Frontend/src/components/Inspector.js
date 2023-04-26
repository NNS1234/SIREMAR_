/* 
Nudrat Nawal Saber 1001733394
Feng Jiang 1001888843
Singh Sankalp Sandeep  1001964065
*/
import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Chat } from "@progress/kendo-react-conversational-ui";
import '@progress/kendo-theme-default/dist/all.css';
import axios from 'axios'

const user = {
    id: 1,
    avatarUrl: "https://via.placeholder.com/24/008000/008000.png",
  };
  const bot = {
    id: 0,
  };
  const initialMessages = [
    {
      author: bot,
      text: "Can i help you?",
      suggestedActions: [
        {
          value: "I have some questions.",
          type: "reply",
        },
        {
          title: "Place a call",
          value: "555-123-45`6",
          type: "call",
        },
      ],
    },
  ];

const Inspector = () => {
    const [userr, setUR] = useState([]);
    const [chats, setChat] = useState([]);
  const [rid, setRid] = useState(0);
  const [messages, setMessages] = React.useState(initialMessages);
    const addNewMessage = (event) => {
        setMessages([...messages, event.message]);
    };

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

  const addschool = ()=>{
    let formData = new FormData();
    formData.append('school', "school");
    formData.append('rid', document.getElementById('resid').value);
    formData.append('school', document.getElementById('school').value);
    formData.append('admission', document.getElementById('admission').value);
    formData.append('address', document.getElementById('address').value);

    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }
    axios.post('http://localhost/addschool', formData, config)
      .then(response => {
        alert(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const addbusiness = ()=>{
    let formData = new FormData();
    formData.append('business', document.getElementById('business').value);
    formData.append('company', document.getElementById('company').value);
    formData.append('date', document.getElementById('date').value);
    formData.append('comment', document.getElementById('comment').value);

    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }
    axios.post('http://localhost/addbusiness', formData, config)
      .then(response => {
        alert(response.data);
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

  const addmoveout = ()=>{
    let formData = new FormData();
    formData.append('moveout', "register");
    formData.append('mid', document.getElementById('mid').value);
    formData.append('mname', document.getElementById('mname').value);
    formData.append('maddress', document.getElementById('maddress').value);
    formData.append('mdate', document.getElementById('mdate').value);

    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }
    axios.post('http://localhost/addmoveout', formData, config)
      .then(response => {
        alert(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

    useEffect(()=>{
    let formData = new FormData();
    formData.append('count', "count");

    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }
    axios.post('http://localhost/getusers', formData, config)
      .then(response => {
        console.log(response.data)
        let users = response.data.split(';');
        var urarr = [];
        for(var i=1; i<users.length; i++){
            var utemp = users[i].split(',');
            console.log(utemp);
            if(utemp[2]==" Residents "){
                urarr.push({
                    name: utemp[0],
                    dob: utemp[1],
                    address: utemp[3],
                    email: utemp[4],
                    rid: utemp[5],
                });
            }
            setUR(urarr);
        }
      })
      .catch(error => {
        console.log(error);
      });
    axios.post('http://localhost/getchat', formData, config)
      .then(response => {
        console.log(response.data)
        let users = response.data.split(';');
        var urarr = [];
        for(var i=1; i<users.length; i++){
            var utemp = users[i].split(',');
            console.log(utemp);
                urarr.push({
                    message: utemp[0],
                    user: utemp[1]
                });
            setChat(urarr);
        }
      })
      .catch(error => {
        console.log(error);
      });
  },[])

  const addchat = ()=>{
    let formData = new FormData();
    formData.append('rid', rid);
    formData.append('message', document.getElementById('chatmsg').value);

    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }
    axios.post('http://localhost/addchat', formData, config)
      .then(response => {
        alert(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }

  const deleteres = (e)=>{
    let formData = new FormData();
    formData.append('rid', e);

    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }
    axios.post('http://localhost/deleteres', formData, config)
      .then(response => {
        alert(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      <div className='Contacts' >
        <Header />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1>Manage Registration</h1>
        </div>
      </div>
      <section className='ServiceGrid '>
        <div>
          <div className='description'>
            <h4>Manage Resident</h4>
            <form action='/admin' className='form-group'>
              <select id="role">
                  <option value="Inspectors">Inspectors</option>
                  <option value="Residents">Residents</option>
              </select>
            
              <div className='input-div'>
                  <input type='text' id="name" placeholder='Name' className='form-control'/>
              </div>
              <div className='input-div'>
                  <input type='text' id="dob" placeholder='Date Of Birth' className='form-control'/>
              </div>
              <div className='input-div'>
                  <input type='text' id="address" placeholder='Address' className='form-control'/>
              </div>
              <div className='input-div'>
                  <input type='text' id="remail" placeholder='E-mail' className='form-control'/>
              </div>
              <div className='input-div'>
                  <input type='password' id="rpassword" placeholder='Password' className='form-control'/>
              </div>
              <div>
                  <button type="button" onClick={register}>Register</button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <div className='description'>
            <h4>Manage Moveouts</h4>
            <form className='form-group'>
              <div className='input-div'>
                <input type='text' placeholder='ID' id="mid" className='form-control' />
              </div>
              <div className='input-div'>
                <input type='text' placeholder='Name' id="mname" className='form-control' />
              </div>
              <div className='input-div'>
                <input type='text' placeholder='Address' id="maddress" className='form-control' />
              </div>
              <div className='input-div'>
                <input type='text' placeholder='Moving Date' id="mdate" className='form-control' />
              </div>
              <div>
                  <button type="button" onClick={addmoveout}>Submit</button>
              </div>
            </form>
          </div>
        </div>

        <div>
          <div className='description'>
            <h4>Register Business</h4>
            <form className='form-group'>
              <div className='input-div'>
                <input type='text' id="business" placeholder='New Business' className='form-control' />
              </div>
              <div className='input-div'>
                <input type='text' id="company" placeholder='Company' className='form-control' />
              </div>
              <div className='input-div'>
                <input type='text' id="date" placeholder='Date' className='form-control' />
              </div>
              <div>
                <textarea placeholder='COMMENTS' id="comment" className='form-control'></textarea>
              </div>
              <button type="button" onClick={addbusiness}>Submit</button>
            </form>
          </div>
        </div>
        <div>
          <div className='description'>
            <h4>Manage resident Schools</h4>
            <form className='form-group'>
              <div className='input-div'>
                <input id="resid" type='text' placeholder='Resident ID' className='form-control' />
              </div>
              <div className='input-div'>
                <input id="school" type='text' placeholder='School' className='form-control' />
              </div>
              <div className='input-div'>
                <input id="admission" type='text' placeholder='Admission Date' className='form-control' />
              </div>
              <div className='input-div'>
                <input id="address" type='text' placeholder='Address' className='form-control' />
              </div>
              <button type="button" onClick={addschool}>Submit</button>
            </form>
          </div>
        </div>
        <div id = 'table1' className='col-lg-4 col-md-12'>
            <h4>Residents</h4>
        <table class="table">
        <thead id='thead1'>
            <tr id ='tb1'>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Dob</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">R_Id</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {userr.map((data, key)=>{
                return(
                    <tr key={key}>
                        <th scope="row">{key}</th>
                        <td>{data.name}</td>
                        <td>{data.dob}</td>
                        <td>{data.email}</td>
                        <td>{data.address}</td>
                        <td>{data.rid}</td>
                        <td>
                            <button onClick={()=>{deleteres(data.rid)}}>Delete</button>
                        </td>
                    </tr>
                )
            })}
        </tbody>
        </table>
        </div>
        <div className='description'>
          <div className='chatbox'>
            {chats.map((data, key)=>{
              if(data.user==rid){
                return(
                  <div className="chatrightholder">
                    <div className="chatright">
                      {data.message}
                    </div>
                  </div>
                  )
              }else{
                return(
                  <div className="chatleftholder">
                    <div className="chatleft">
                      {data.message}
                    </div>
                  </div>
                  )
              }
            })}
            <div className="chatmessage">
              <input type="text" placeholder="Enter Message" id="chatmsg" /><button type="button" onClick={()=>{addchat()}}>SEND</button>
            </div>
          </div>
       </div>
      </section>
    </div >
  )
}

export default Inspector