import React from 'react'
import image from './logo.png'
import '../App.css';
import { Link, useHistory } from 'react-router-dom';

import { useState } from "react";
import { addActService,removeDailyActsService } from "../services/DailyActivityService";
import User from '../models/User';
import DailyActivity from '../models/DailyActivity';
import { useDispatch, useSelector } from "react-redux";
import { getAllActsService, getActsByDateService, deleteDailyActsService } from "../services/DailyActivityService";
import { getAllActs, getActsByDate } from '../redux/DailyActivitySlice';
// import Footer from './components/Footer';


import { Doughnut } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';

import 'chart.js/auto';

const ViewAllActivities = () => {


    const dispatch = useDispatch();
    const allActsDataFromStore = useSelector((state) => state.act.actList);
    const allActsDataFromStore1 = useSelector((state) => state.act.actListByDate);
    const [user, setUser] = useState('');
    const [actToBedeleted, setActToBeDeleted] = useState(new DailyActivity());
   



    const submitGetAllActs = (evt) => {
        evt.preventDefault();
        getAllActsService()
            .then((response) => {
                dispatch(getAllActs(response.data));
                console.log(response.data);
            })
            .catch((error) => {
                alert(error);
            });

        getActsByDateService()
            .then((response) => {
                dispatch(getActsByDate(response.data));
                console.log(response.data);
            })
            .catch((error) => {
                alert(error);
            });
    }

    let deletePost = (id) =>{
        removeDailyActsService(id).then(() =>{
            getAllActsService()
            .then((response) => {
                dispatch(getAllActs(response.data));
                console.log(response.data);
            })
            getActsByDateService()
            .then((response) => {
                dispatch(getActsByDate(response.data));
                console.log(response.data);
            })
            .catch((error) => {
                alert(error);
            });

        
        }
        )
    
        
       
    }

    



    const data = {
        labels: allActsDataFromStore1.map(function (arr) {
            return arr[1];
            
        }),
        datasets: [
            {
                label: 'Calorie',
                data: allActsDataFromStore1.map(function (arr) {
                    return arr[0];
                }),
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1.5,

            }

        ]
    }

    const option = {
        plugins: {
            title: {
                display: true,
                text: 'Day Wise Calorie Chart',
                color: 'wheat',
                font: {
                    size: 34
                },
                padding: {
                    top: 30,
                    bottom: 30
                },
                responsive: true,
                animation: {
                    animateScale: true,
                }
            },
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: 'white'
                }
            },
            labels:{
                fontColor:'white',
            },

            scales: {
                x: {
                  ticks: {
                    color: 'green'
                  }
                },
                y: {
                  ticks: {
                    color: 'red'
                  }
                }
              }
            }

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
                <div className="d-flex justify-content-center">
                    <div className="card">
                        <div className="card-header">
                            <h3>View All Activities</h3>

                        </div>
                        <div className="card-body">
                            <form className='bottom-two'>


                                <div className="form-group">
                                    <input type="submit" value="View"
                                        onClick={submitGetAllActs}
                                        className="btn float-right login_btn" />
                                </div>


                            </form>

                            <div>
                                <div> {(allActsDataFromStore.length !== 0) &&
                                    <div>
                                        <p className="text-center font-weight-bold lead title-activity">List of All Activities</p>
                                        {
                                            <div id='table-wrapper'>
                                                <div id='table-scroll'>
                                                    <table className="table table-info">
                                                        <thead  style={{backgroundColor:'peachPuff'}}>
                                                            <tr>
                                                                <th>Activity Id</th>
                                                                {/* <th>First Name</th> */}
                                                                <th>Date</th>
                                                                <th>Category</th>
                                                                <th>Frequency</th>
                                                                <th>Duration</th>
                                                                <th>Calorie</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        {allActsDataFromStore.map((e =>
                                                            <tbody>
                                                                <tr>
                                                                    <td>{e.dailyActivityId}</td>


                                                                    {/* {(e.user) &&
                                                                <>
                                                                    <td>{e.user.firstName}</td>

                                                                </>
                                                            } */}
                                                                    <td>{e.date}</td>
                                                                    <td>{e.category}</td>
                                                                    <td>{e.frequency}</td>
                                                                    <td>{e.duration}</td>
                                                                    <td>{e.calorie}</td>
                                                                    <td><button type="button" 
                                                                    className="btn btn-sm btn-danger far fa-trash-alt delete-button" 
                                                                    onClick={()=>deletePost(e.dailyActivityId)}
                                                                    // onClick={() => submitDeleteAct(e.dailyActivityId)}
                                                                    /></td>
                                                                </tr>
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

                            <div>
                                <div>
                                    <div> {(allActsDataFromStore1.length !== 0) &&
                                        <Bar data={data} options={option} />
                                    }
                                    </div>

                                </div>
                            </div>



                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAllActivities;