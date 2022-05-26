

import React from 'react'
import image from './logo.png'
import '../App.css';

import { useState } from "react";
import {  updateActivityService } from "../services/DailyActivityService";
import User from '../models/User';
import DailyActivity from '../models/DailyActivity';
import { Link, useHistory } from 'react-router-dom';
function UpdateDailyActivity() {
    

        const [actToBeUpdated, setActToBeUpdated] = useState(new DailyActivity());
        const [user, setUser] = useState(new User());
    
        const handleUpdateAct = (e) => {
            console.log(e.target.name);
            console.log(e.target.value);
            setActToBeUpdated({
                ...actToBeUpdated,
                [e.target.name]: e.target.value
            });
    
            setUser({
                ...user,
                [e.target.name]: e.target.value
            });
        }
    
        const submitUpdateAct = (evt) => {
            evt.preventDefault();
            let actTemp = { ...actToBeUpdated, user };
            updateActivityService(actTemp)
                .then((response) => {
                    console.log(response.data);
                    alert(`Daily Activity with Id ${response.data.dailyActivityId} updated successfully.`);
                })
                .catch(() => {
                    setActToBeUpdated(new DailyActivity());
                    actTemp = '';
                    alert("Daily Activity could not be updated.");
                });
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

            <div className="container">
                <div className="d-flex justify-content-center  ">
                    <div className="card">
                        <div className="card-header">
                            <h3>Update Daily Activity</h3>

                        </div>
                        <div className="card-body" >
                            <form>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-id-badge"></i></span>
                                    </div>
                                    <input type="number" className="form-control"
                                        placeholder="Daily Activity Id" 
                                        id='dailyActivityId'
                                        name='dailyActivityId'
                                        value={actToBeUpdated.dailyActivityId}
                                        onChange={handleUpdateAct}
                                        />

                                </div>



                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-envelope"></i></span>
                                    </div>
                                    <input type="email" className="form-control" placeholder="email"
                                    id='email'
                                    name='email'
                                    value={actToBeUpdated.user.email}
                                    onChange={handleUpdateAct} 
                                    />

                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-calendar"></i></span>
                                    </div>
                                    <input type="date" className="form-control" 
                                    id='date' name='date' value={actToBeUpdated.date}
                                    onChange={handleUpdateAct}
                                    />

                                </div>


                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-bicycle"></i></span>
                                    </div>
                                    <div >
                                        <select className="form-control" name="category" id="category" onChange={handleUpdateAct} > {/*onChange={handleAppUser}> */}
                                            <option value="Category">Select a Category</option>
                                            <option value="CYCLING">CYCLING</option>
                                            <option value="WALKING">WALKING</option>
                                            <option value="JOGGING">JOGGING</option>
                                            <option value="SWIMMING">SWIMMING</option>
                                            <option value="YOGA">YOGA</option>
                                            <option value="SQUAT">SQUAT</option>
                                            <option value="RUNNING">RUNNING</option>
                                            <option value="JUMPING">JUMPING</option>
                                        </select>
                                    </div>

                                </div>


                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-bar-chart"></i></span>
                                    </div>
                                    <input type="number" className="form-control"
                                        placeholder="Frequency"
                                        id='frequency'
                                        name='frequency'
                                        value={actToBeUpdated.frequency}
                                        onChange={handleUpdateAct}
                                        />

                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-clock-o"></i></span>
                                    </div>
                                    <input type="number" className="form-control"
                                        placeholder="Duration" 
                                        id='duration'
                                        name='duration'
                                        value={actToBeUpdated.duration}
                                        onChange={handleUpdateAct}
                                        />

                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-free-code-camp"></i></span>
                                    </div>
                                    <input type="number" className="form-control"
                                        placeholder="Calorie" 
                                        id='calorie'
                                        name='calorie'
                                        value={actToBeUpdated.calorie}
                                        onChange={handleUpdateAct}
                                        />

                                </div>

                                <div className="form-group">
                                    <input type="submit" value="Update"
                                    onClick={submitUpdateAct}
                                    className="btn float-right login_btn" />
                                </div>
                            </form>


                        </div>

                    </div>
                </div>
            </div>



        </div>
    )
}

export default UpdateDailyActivity