/* 
Nudrat Nawal Saber 1001733394
Feng Jiang 1001888843
Singh Sankalp Sandeep  1001964065
*/
import React, {useState, useEffect} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom'
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
          value: "555-123-456",
          type: "call",
        },
      ],
    },
  ];

const Residents = () => {
    const [messages, setMessages] = React.useState(initialMessages);
    const [events, setEvents] = useState([]);
    const [schools, setSchools] = useState([]);
    const addNewMessage = (event) => {
        setMessages([...messages, event.message]);
    };

    const getSchools = (data)=>{
        let ca = data.split(';');
        setSchools(ca);
    }

    const register = ()=>{
        let formData = new FormData();
        formData.append('register', "register");
    
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        axios.post('http://localhost/addregister', formData, config)
          .then(response => {
            alert(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }

  useEffect(()=>{
    let formData = new FormData();
    formData.append('event', "event");

    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }
    axios.post('http://localhost/getevents', formData, config)
      .then(response => {
        console.log(response.data);
        setEvents(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    axios.post('http://localhost/getschools', formData, config)
      .then(response => {
        console.log(response.data);
        getSchools(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },[]);
    return (
        <div>
            <div className='Contacts'>
                <Header />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h1>Hello Resident</h1>
                </div>
            </div>
            <div className='container-fluid Resident_style'>
                <div className='row'>
                    <div className='col col-md-9'>
                        {/* SUB ROW 1 */}
                        <div className='row '>
                            <div className='col col-md-8'>
                                <h4>Flight Discounts</h4>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">FLIGHTS</th>
                                            <th scope="col">AIRLINE'S PRICE</th>
                                            <th scope="col">DISCOUNT SITE</th>
                                            <th scope="col">FINAL PRICE</th>
                                            <th scope="col">DIFFERENCE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Stansted to Palma by easyjet</th>
                                            <td>61.98$</td>
                                            <td>CheapOair</td>
                                            <td>95.59$</td>
                                            <td>33.61$</td>
                                        </tr>

                                        <tr>
                                            <th scope="row">Luto. to Malta by RayonAir</th>
                                            <td>61.98$</td>
                                            <td>CheapOair</td>
                                            <td>95.59$</td>
                                            <td>33.61$s</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <div className='col col-md-4'>

                                <h4>Important Calendar Dates</h4>
                                <Calendar ></Calendar>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col col-md-7'>
                                <h4>School Registration</h4>
                                <form className='form-group-resident'>
                                    <div className='input-div-res'>
                                        <input type='text' placeholder='Name' className='form-control' />
                                    </div>
                                    <div className='input-div-res'>
                                        <input type='text' placeholder='Address' className='form-control' />
                                    </div>
                                    <div className='input-div-res'>
                                        <input type='text' placeholder='Email' className='form-control' />
                                    </div>
                                    <div className='input-div-res'>
                                        <input type='text' placeholder='Password' className='form-control' />
                                    </div>
                                    <select className='input-div-res'>
                                    {schools.map((data, key)=>{
                                        return <option key={key}>{data}</option>
                                    })}
                                        <option>Select schools</option>
                                        <option>Allen ISD</option>
                                        <option>Richardson school</option>
                                        <option>Collin College</option>
                                    </select>
                                    <div>
                                        <textarea className='form-control'></textarea>
                                    </div>
                                    <div>
                                        <button className='Button' type='button' onClick={register} >Register </button>
                                    </div>
                                </form>
                            </div>
                            <div className='col col-md-5'>

                                <h4>Business Discount</h4>

                                <div class="card11">
                                    <div class="text-right p-2"><img className="img-fluid"
                                        src={process.env.PUBLIC_URL + 'https://i.imgur.com/w68MQc4.png'}
                                        alt="logo" /> </div>
                                    <div class="text-center"> <small class="text-uppercase flat">Flat</small> </div>
                                    <div class="d-flex justify-content-center px-2">
                                        <div class="d-flex flex-row">
                                            <h1 class="mt-0 off">50% OFF</h1> <sup class="mt-2 text-primary star">*</sup>
                                        </div>
                                    </div>
                                    <div class="line">

                                    </div>
                                    <div class="text-center mb-5"> <span class="text-uppercase">Valid till 23 august</span> </div>
                                    <div class="text-right p-1"> <small>*T&C APPLY</small> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col col-md-3 hot_news' >
                        <h4>Latest Events</h4>
                        <ul>
                            <li>{events}</li>
                        </ul>
                        <div className='chatbox'>
                            <h4>Chat with Inspector</h4>
                                <Chat
                                    user={user}
                                    messages={messages}
                                    onMessageSend={addNewMessage}
                                    placeholder={"Type a message..."}
                                    width={400}
                                />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Residents