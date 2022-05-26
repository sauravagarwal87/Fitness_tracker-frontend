import React from 'react'
import image from './logo.png'
import '../App.css';
import { useState } from "react";
import { addDietService } from "../services/DailyDietService";
import User from '../models/User';
import DailyDiet from '../models/DailyDiet';
import { Link, useHistory } from 'react-router-dom';

const AddDailyDiet=() =>{

    const [dietToBeAdded, setDietToBeAdded] = useState(new DailyDiet());
    const [user, setUser] = useState(new User());


    const handleAddDiet = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setDietToBeAdded({
            ...dietToBeAdded,
            [e.target.name]: e.target.value
        });

        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }


    const submitAddDiet = (evt) => {
        evt.preventDefault();
        let dietTemp = { ...dietToBeAdded, user };
        addDietService(dietTemp)
            .then((response) => {
                console.log(response.data);
                alert(`Daily Diet with Id ${response.data.dailyDietId} added successfully.`);
            })
            .catch(() => {
                setDietToBeAdded(new DailyDiet());
                dietTemp = '';
                alert("Daily Diet could not be added.");
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
                            <h3>Add Daily Diet</h3>

                        </div>
                        <div className="card-body" >
                            <form>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="email"
                                    id="email" name="email"
                                    value={user.email}
                                    onChange={handleAddDiet}
                                    className="form-control" placeholder="email" />
                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="date" className="form-control"
                                    id='date' name='date' value={dietToBeAdded.date}
                                    onChange={handleAddDiet}
                                    />
                                </div>


                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <div >

                                        
                                        <select className="form-control" name="foodtype" id="foodtype" onChange={handleAddDiet}> {/*onChange={handleAppUser}> */}
                                            <option value="foodtype">Select a Foodtype</option>
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
                                        id='name' name='name'
                                        value={dietToBeAdded.name}
                                        onChange={handleAddDiet}
                                        />

                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="number" className="form-control"
                                        placeholder="Calorie" 
                                        id='calorie' name='calorie'
                                        value={dietToBeAdded.calorie}
                                        onChange={handleAddDiet}
                                        />

                                </div>

                                <div className="form-group">
                                    <input type="submit" value="Add" className="btn float-right login_btn" 
                                     onClick={submitAddDiet}
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

export default AddDailyDiet