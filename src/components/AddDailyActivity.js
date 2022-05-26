import React from 'react'
import image from './logo.png'
import '../App.css';
import { useState } from "react";
import { addActService } from "../services/DailyActivityService";
import User from '../models/User';
import DailyActivity from '../models/DailyActivity';
import { Link, useHistory } from 'react-router-dom';

const AddDailyActivity=() =>{

    const [actToBeAdded, setActToBeAdded] = useState(new DailyActivity());
    const [user, setUser] = useState(new User());


    const handleAddAct = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setActToBeAdded({
            ...actToBeAdded,
            [e.target.name]: e.target.value
        });

        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }


    const submitAddAct = (evt) => {
        evt.preventDefault();
        let actTemp = { ...actToBeAdded, user };
        addActService(actTemp)
            .then((response) => {
                console.log(response.data);
                alert(`Daily Activity with Id ${response.data.dailyActivityId} added successfully.`);
            })
            .catch(() => {
                setActToBeAdded(new DailyActivity());
                actTemp = '';
                alert("Daily Activity could not be added.");
            });
    }

    return (
        <div>
            <div className="header-dark">
                <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
                    <div className="container">
                        <Link className="navbar-brand" to="/userDashboard">
                        <img width="200px" height="100px" src={image} />
                        </Link>
                        <div className="collapse navbar-collapse"
                            id="navcol-1">
                            </div>
                    </div>
                </nav>
            </div>

            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="card">
                        <div className="card-header">
                            <h3>Add Daily Activity</h3>

                        </div>
                        <div className="card-body" >
                            <form>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-envelope"></i></span>
                                    </div>
                                    <input type="email"
                                    id="email" name="email"
                                    value={user.email}
                                    onChange={handleAddAct}
                                    className="form-control" placeholder="email"/>
                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-calendar"></i></span>
                                    </div>
                                    <input type="date" className="form-control"
                                    id='date' name='date' value={actToBeAdded.date}
                                    onChange={handleAddAct}
                                    />
                                </div>


                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-bicycle"></i></span>
                                    </div>
                                    <div >
                                        <select className="form-control" name="category" id="category" onChange={handleAddAct}> {/*onChange={handleAppUser}> */}
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
                                        id='frequency' name='frequency'
                                        value={actToBeAdded.frequency}
                                        onChange={handleAddAct}
                                        />

                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-clock-o"></i></span>
                                    </div>
                                    <input type="number" className="form-control"
                                        placeholder="Duration"
                                        id='duration' name='duration'
                                        value={actToBeAdded.duration}
                                        onChange={handleAddAct}
                                        />

                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-free-code-camp"></i></span>
                                    </div>
                                    <input type="number" className="form-control"
                                        placeholder="Calorie" 
                                        id='calorie' name='calorie'
                                        value={actToBeAdded.calorie}
                                        onChange={handleAddAct}
                                        />

                                </div>

                                <div className="form-group">
                                    <input type="submit" value="Add" className="btn float-right login_btn" 
                                     onClick={submitAddAct}
                                    
                                    />
                                </div>
                            </form>


                        </div>

                    </div>
                </div>
            </div>
     


        </div>
    )
}

export default AddDailyActivity