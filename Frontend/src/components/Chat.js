/* 
Nudrat Nawal Saber 1001733394
Feng Jiang 1001888843
Singh Sankalp Sandeep  1001964065
*/
import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'

const Chat = () => {
    const [chat, setChat] = useState([]);
    const [userr, setUR] = useState([]);
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
  useEffect(()=>{
    let formData = new FormData();
    formData.append('count', "count");

    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }
    axios.post('http://localhost/getadminchat', formData, config)
      .then(response => {
        let cnt = response.data.split(';');
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
  return (
    <div className='Admin'>
        <Header/>
        <div className='container-fluid' style={{ display:"flex", flexWrap:"wrap" }}>
            <div style={{ width:"60%" }}>
				<form>
					<div id ='frmAdmin'>
						<h3>Create Blog</h3>
						<input className='frm' id="image" type='text' required placeholder='Image' /><br></br>
						<input className='frm' id="title" type='text' required placeholder='Title' /><br></br>
						<textarea className='frm' id="content" type='text' required placeholder='Content'></textarea><br></br>

						<button className='Button'>Submit</button>
					</div>
				</form>
			</div>
            <div style={{ width:"40%" }}>


            <div className='description'>
              <div className='chatbox'>
                {chat.map((data, key)=>{
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
      </div>
		</div>
    </div>
  )
}

export default Chat