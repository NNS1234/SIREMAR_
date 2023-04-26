/* 
Nudrat Nawal Saber 1001733394
Feng Jiang 1001888843
Singh Sankalp Sandeep  1001964065
*/
import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'

const Admin = () => {
    const [count, setCount] = useState([0, 0, 0, 0]);
    const [userr, setUR] = useState([]);
    const [useri, setUI] = useState([]);
    const [busi, setBusi] = useState([]);
    useEffect(() => {
        let formData = new FormData();
        formData.append('count', "count");

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        axios.post('http://localhost/getcount', formData, config)
            .then(response => {
                let cnt = response.data.split(';');
                setCount(cnt);
            })
            .catch(error => {
                console.log(error);
            });
        axios.post('http://localhost/getusers', formData, config)
            .then(response => {
                let users = response.data.split(';');
                console.log(users);
                var urarr = [];
                var uiarr = [];
                for (var i = 1; i < users.length; i++) {
                    var utemp = users[i].split(',');
                    console.log(utemp);
                    if (utemp[2] == " Inspectors ") {
                        uiarr.push({
                            name: utemp[0],
                            dob: utemp[1],
                            address: utemp[3],
                            email: utemp[4],
                            rid: utemp[5],
                        });
                        console.log("work")
                    } else if (utemp[2] == " Residents ") {
                        urarr.push({
                            name: utemp[0],
                            dob: utemp[1],
                            address: utemp[3],
                            email: utemp[4],
                            rid: utemp[5],
                        });
                    }
                    console.log(uiarr);
                    setUR(urarr);
                    setUI(uiarr);
                }
            })
            .catch(error => {
                console.log(error);
            });
        axios.post('http://localhost/getbusiness', formData, config)
            .then(response => {
                console.log(response);
                let busin = response.data.split(';');
                var busiarr = [];
                for (var i = 1; i < busin.length; i++) {
                    var butemp = busin[i].split(',');
                    console.log(butemp);
                    busiarr.push({
                        business: butemp[0],
                        company: butemp[1],
                        date: butemp[2],
                        comment: butemp[3]
                    });
                    setBusi(busiarr);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }, [])

    const deleteres = (e) => {
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

    const deleteins = (e) => {
        let formData = new FormData();
        formData.append('rid', e);

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        axios.post('http://localhost/deleteins', formData, config)
            .then(response => {
                alert(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className='Admin'>
            <Header />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col col-md-2'>

                        <div class="color234">
                        </div> <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <div class="color234">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Resident
                                        </button>
                                    </div>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="color123">
                                        <div className="accordion-body"><ul className="list-group">
                                            <li className="list-group-item">New Residents</li>
                                            <li className="list-group-item">Imigrants</li>
                                            <li className="list-group-item">Resident Services</li>

                                        </ul></div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Schools
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">

                                    <div class="color123">
                                        <div className="accordion-body">
                                            <ul className="list-group">
                                                <li className="list-group-item">New Schools built </li>
                                                <li className="list-group-item">Private Schools</li>
                                                <li className="list-group-item">Universities</li>
                                                <li className="list-group-item">School of Business</li>
                                                <li className="list-group-item">Law Schools</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Business
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div class="color123">
                                        <div className="accordion-body">
                                            <ul className="list-group">
                                                <li className="list-group-item">Private </li>
                                                <li className="list-group-item">Public</li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* RIGHT SIDE */}
                    <div className='col col-md-10'>
                        {/* ROW 1 */}
                        <div className="row">
                            <div className="col-md-3">
                                <div className="card">
                                    <div className='tblhr'>
                                        <div className="card-body">
                                            <h5 className="card-title"> Resident Details</h5>
                                            <p className="card-text">{count[0]}</p>
                                        </div></div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <div className='tblhr'>
                                        <div className="card-body">
                                            <h5 className="card-title">Inspector Details</h5>
                                            <p className="card-text">{count[1]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <div className='tblhr'>
                                        <div className="card-body">
                                            <h5 className="card-title">Manage Businesses</h5>
                                            <p className="card-text">{count[2]}</p>
                                        </div></div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <div className='tblhr'>
                                        <div className="card-body">
                                            <h5 className="card-title">Event Details</h5>
                                            <p className="card-text">{count[3]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ROW 2 */}
                        <div className='row'>
                            <div className='col-lg-1'>
                            </div>
                            <div id='table1' className='col-lg-4 col-md-12'>
                                <h4>Residents</h4>
                                <table class="table">
                                    <thead id='thead1'>
                                        <tr id='tb1'>
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
                                        {userr.map((data, key) => {
                                            return (
                                                <tr key={key}>
                                                    <th scope="row">{key}</th>
                                                    <td>{data.name}</td>
                                                    <td>{data.dob}</td>
                                                    <td>{data.email}</td>
                                                    <td>{data.address}</td>
                                                    <td>{data.rid}</td>
                                                    <td>
                                                        <button onClick={() => { deleteres(data.rid) }}>Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>

                            <div className='col-lg-2'>
                            </div>
                            <div id='table2' className='col-lg-4  col-md-12'>
                                <h4>Inspectors</h4>
                                <table className="table">

                                    <thead id='thead1'>
                                        <tr id='tb1'>
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
                                        {useri.map((data, key) => {
                                            return (
                                                <tr key={key}>
                                                    <th scope="row">{key}</th>
                                                    <td>{data.name}</td>
                                                    <td>{data.dob}</td>
                                                    <td>{data.email}</td>
                                                    <td>{data.address}</td>
                                                    <td>{data.rid}</td>
                                                    <td>
                                                        <button onClick={() => { deleteins(data.rid) }}>Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <div className='col-lg-1'>
                            </div>
                        </div>


                        <div id='roww3' className='row'>
                            <div className='col-lg-1'>
                            </div>
                            <div id='table1' className='col-md-10'>
                                <h4>Businesses Details</h4>
                                <table class="table">
                                    <thead id='thead1'>
                                        <tr id='tb1'>
                                            <th scope="col">#</th>
                                            <th scope="col">Business</th>
                                            <th scope="col">Company</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Comment</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {busi.map((data, key) => {
                                            return (
                                                <tr key={key}>
                                                    <th scope="row">{key}</th>
                                                    <td>{data.business}</td>
                                                    <td>{data.company}</td>
                                                    <td>{data.date}</td>
                                                    <td>{data.comment}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>



                            <div className='col-lg-4'>
                            </div>


                            <div id='row4' className='row'>

                                <div className='col-md-4'>
                                    <form>
                                        <div id='frmAdmin'>
                                            <h3>Search for Resident</h3>
                                            <input className='frm' type='number' required placeholder='Phone No.' /><br></br>
                                            <input className='frm' type='email' required placeholder='E-mail' /><br></br>
                                            <select id="cars" name="cars">
                                                <option value="resident">resident</option>
                                                <option value="saab">Inspector</option>
                                                <option value="fiat">Business</option>
                                                <option value="audi">Imigrants</option>
                                            </select><br></br>

                                            <button className='Button'>Search</button>
                                        </div>
                                    </form>
                                </div>
                                <div className='col-md-2'></div>
                                <div id='imgdiv' className='col-md-4'>
                                    <div className='img2'> <img src={require('./residents.png')} /></div>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin