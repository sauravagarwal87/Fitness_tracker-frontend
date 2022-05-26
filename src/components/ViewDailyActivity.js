import React from 'react'
import image from './logo.png'
import '../App.css';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDailyActsService, removeDailyActsService } from "../services/DailyActivityService";
import { getDailyActs } from '../redux/DailyActivitySlice';
import { Footer } from './Footer';
import { MDBContainer } from "mdbreact";

import {Doughnut} from 'react-chartjs-2';
import 'chart.js/auto';
import { withRouter } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';


const ViewDailyActivity = () => {


    const [date, setDate] = useState('');
    const dispatch = useDispatch();
    const dailyActsDataFromStore = useSelector((state) => state.act.dailyActList);
    const dailyActsDataFromStore1 = useSelector((state) => state.act.dailyActList);

 

    const data = {
        labels: dailyActsDataFromStore1.map(function(arr){
            return arr.category;
        }),
        datasets: [
            {
                label: 'Daily Activity',
                data: dailyActsDataFromStore1.map(function(arr){
                    return arr.calorie;
                }),
                borderColor: ['rgba(255,206,86,0.2)'],
                backgroundColor: ['rgba(232,99,132,1)',
                'rgba(232,211,6,1)',
                'rgba(54,162,235,1)',
                'rgba(255,159,64,1)',
                'rgba(153,102,255,1)',
                'rgba(60,179,113,1)',
                'rgba(255,0,0,1)',
                'rgba(201,255,50,1)'
                ],
                pointBackgroundColor: 'rgba(255,206,86,0.2)',
            }         
        ]
    }

    const option = {
        plugins: {
            title: {
                display: true,
                text: 'Activity Wise Calorie Chart',
                color:'wheat',
                font: {
                    size:34
                },
                padding:{
                    top:30,
                    bottom:30
                },
                responsive:true,
                animation:{
                    animateScale: true,
                               }
            },
            legend:{
                display:true,
                position:'top',
                labels: {
                    color: 'white'
                  }
              }
        }
        
    }

    const submitGetDailyActs = (e) => {
        e.preventDefault();
        getDailyActsService(date)
            .then((response) => {
                dispatch(getDailyActs(response.data));
                console.log(response.data);
                console.log(dailyActsDataFromStore1[0]);
                if(response.data.length === 0){
                    alert("No activities found");
                }
            })
            .catch((error) => {
                alert(error);
            });
    }

    const handleChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        
        setDate(e.target.value);
    }

    let deletePost = (id) =>{
        removeDailyActsService(id).then(() =>{
            getDailyActsService(date)
            .then((response) => {
                dispatch(getDailyActs(response.data));
                console.log(response.data);
            })}
        )
    
        
        // window.location.reload(false);
    }

    

   


    return (
        <div>

            <div className="header-dark">
                <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
                    <div className="container"><Link className="navbar-brand" to="/userDashboard">
                        <img width="200px" height="100px" src={image} />
                        </Link>
                        <div className="collapse navbar-collapse"
                            id="navcol-1">
                        </div>
                    </div>
                </nav>
            </div>

            <div className="container ">
                {/* row justify-content-around */}
                <div className="d-flex justify-content-center">
                    <div className="card">
                        <div className="card-header">
                            <h3>View Daily Activity</h3>

                        </div>
                        <div className="card-body ">
                            <form className='bottom-two'>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-calendar"></i></span>
                                    </div>
                                    <input type="text"
                                    placeholder='DD/MM/YYYY'
                                        id='date' name='date'
                                        onChange={handleChange}
                                        className="form-control" />

                                </div>

                                <div className="form-group">
                                    <input type="submit" value="View"
                                        onClick={submitGetDailyActs}
                                        className="btn float-right login_btn" />
                                </div>


                            </form>
                           

                            <div>
                                <div>
                                <div> {(dailyActsDataFromStore.length !== 0) &&
                                    <div>
                                        <p className="text-center font-weight-bold lead title-activity">List of Daily Activities</p>
                                        {
                                            <div id='table-wrapper'>
                                            <div id ='table-scroll'>
                                            <table className="table table-info">
                                                <thead style={{backgroundColor:'peachPuff'}}>
                                                    <tr>

                                                        <th>Id</th>
                                                        <th>Category</th>
                                                        <th>Duration</th>
                                                        <th>Frequency</th>
                                                        <th>Calorie</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                {dailyActsDataFromStore.map((e =>
                                                    <tbody>

                                                        {/* <td>{e[0]}</td>
                                                        <td>{e[1]}</td>
                                                        <td>{e[2]}</td>
                                                        <td>{e[3]}</td>
                                                        <td>{e[4]}</td> */}
                                                        <td>{e.dailyActivityId}</td>
                                                        <td>{e.category}</td>
                                                        <td>{e.duration}</td>
                                                        <td>{e.frequency}</td>
                                                        <td>{e.calorie}</td>
                                                        <td><button type="button" 
                                                        className="btn btn-sm btn-danger far fa-trash-alt delete-button"
                                                         onClick={()=>deletePost(e.dailyActivityId)}/></td>
                                                    
                                                        {/* <tr>

                                                            <td>{e.category}</td>
                                                            <td>{e.duration}</td>
                                                            <td>{e.frequency}</td>
                                                            <td>{e.calorie}</td>
                                                        </tr> */}
                                                     
                                                    </tbody>
                                               ))}
                                            </table>
                                            
                                            </div>
                                            </div>

                                        }
                                    </div>
                                }
                                </div>

                                </div>
                            </div>

                            <div>
                                <div>
                                    <div> {(dailyActsDataFromStore1.length !== 0) &&
                                        <Doughnut data={data} options={option} />
                                    }
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* <Footer></Footer> */}
            
        </div>





    )
}


export default ViewDailyActivity;