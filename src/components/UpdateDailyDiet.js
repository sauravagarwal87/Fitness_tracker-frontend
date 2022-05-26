import React from 'react'
import image from './logo.png'
import '../App.css';
import { useState } from "react";
import { updateDietService } from "../services/DailyDietService";
import User from '../models/User';
import DailyDiet from '../models/DailyDiet';
import { Link, useHistory } from 'react-router-dom';
//import { useSelector } from 'react-redux';


const UpdateDailyDiet=() => {

    const [dietToBeUpdated, setDietToBeUpdated] = useState(new DailyDiet());
    const [user, setUser] = useState(new User());

    const handleUpdateDiet = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setDietToBeUpdated({
            ...dietToBeUpdated,
            [e.target.name]: e.target.value
        });

        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const submitUpdateDiet = (evt) => {
        evt.preventDefault();
        let dietTemp = { ...dietToBeUpdated, user };
        updateDietService(dietTemp)
            .then((response) => {
                console.log(response.data);
                alert(`Daily Diet with Id ${response.data.dailyDietId} updated successfully.`);
            })
            .catch(() => {
                setDietToBeUpdated(new DailyDiet());
                dietTemp = '';
                alert("Daily Diet could not be updated.");
            });
    }

    return (
        <div>
            <div className="header-dark">
                <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
                    <div className="container"><Link className="navbar-brand" to="/userDashboard">
                        <img width="200px" height="100px src={image}" />
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
                            <h3>Update Daily Diet</h3>

                        </div>
                        <div className="card-body" >
                            <form>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="number" className="form-control"
                                        placeholder="Daily Diet Id" 
                                        id='dailyDietId'
                                        name='dailyDietId'
                                        value={dietToBeUpdated.dailyDietId}
                                        onChange={handleUpdateDiet}
                                        />

                                </div>



                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="email" className="form-control" placeholder="email"
                                    id='email'
                                    name='email'
                                    value={dietToBeUpdated.user.email}
                                    onChange={handleUpdateDiet} 
                                    />

                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="date" className="form-control" 
                                    id='date' name='date' value={dietToBeUpdated.date}
                                    onChange={handleUpdateDiet}
                                    />

                                </div>


                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <div >
                                        <select className="form-control" name="foodtype" id="foodtype" onChange={handleUpdateDiet} > {/*onChange={handleAppUser}> */}
                                            <option value="FoodType">Select a FoodType</option>
                                            <option value="BREAKFAST">BREAKFAST</option>
                                            <option value="BRUNCH">BRUNCH</option>
                                            <option value="LUNCH">LUNCH</option>
                                            <option value="EVENINGSNACK">EVENINGSNACK</option>
                                            <option value="DINNER">DINNER</option>
                                        </select>
                                    </div>

                                </div>


                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="string" className="form-control"
                                        placeholder="FoodName"
                                        id='name'
                                        name='name'
                                        value={dietToBeUpdated.name}
                                        onChange={handleUpdateDiet}
                                        />

                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="number" className="form-control"
                                        placeholder="Calorie" 
                                        id='calorie'
                                        name='calorie'
                                        value={dietToBeUpdated.calorie}
                                        onChange={handleUpdateDiet}
                                        />

                                </div>

                                <div className="form-group">
                                    <input type="submit" value="Update"
                                    onClick={submitUpdateDiet}
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

export default UpdateDailyDiet;