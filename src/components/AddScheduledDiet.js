
import React from 'react'

import image from './logo.png'

import '../App.css';

import { useState } from "react";

import { addScheduledDietService } from "../services/ScheduledDietService";

import User from '../models/User';

import ScheduledDiet from '../models/ScheduledDiet';

 

const AddScheduledDiet = () => {

    const [DietToBeScheduled, setScheduledDietToBeAdded] = useState(new ScheduledDiet());

    const [user, setUser] = useState(new User());
    

 

    const handleAddScheduledDiet = (e) => {

        console.log(e.target.name);

        console.log(e.target.value);

        setScheduledDietToBeAdded({

            ...DietToBeScheduled,

            [e.target.name]: e.target.value

        });
    }

    

 

    const handleSetUser = (e) => {

        console.log(e.target.name);

        console.log(e.target.value);

        setUser({

            ...user,

            [e.target.name]: e.target.value

        });

    }

 

    const submitScheduledDiet = (evt) => {

        evt.preventDefault();

        let dietTemp = { ...DietToBeScheduled, user };

        console.log(dietTemp);

        addScheduledDietService(dietTemp)

            .then((response) => {

                console.log(response.data);

                alert(`Scheduled Diet with Id ${response.data.ScheduledDietId} added successfully.`);

            })

            .catch(() => {

                setScheduledDietToBeAdded(new ScheduledDiet());

                dietTemp = '';

                alert("Scheduled Diet could not be added.");

            });

        }

 

  return (

    <div>

 

            <div className="header-dark">

                <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">

                    <div className="container"><a className="navbar-brand" href="#"><img width="200px" height="100px" src={image} /></a><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>

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

                            <h3>AddScheduledDiet</h3>

 

                        </div>

                        <div className="card-body">

                            <form className='bottom-two'>

 

                               

 

                           

 

                            <div>

                                <div>

                                    <div className="form form-group" >

                                    <input type="email"

                                        id="email" name="email"

                                        value={user.email}

   

                                        onChange={handleSetUser}

                                        className="form-control" placeholder="email" />

   

                                    <input

                                        type="number"

                                        id="day1Calorie"

                                        name="day1Calorie"

                                        className="form-control mb-3 mt-3"

                                        value={DietToBeScheduled.day1Calorie}

                                        onChange={handleAddScheduledDiet}

                                        placeholder="Enter Day1 calorie" />

                                    <input

                                        type="number"

                                        id="day2Calorie"

                                        name="day2Calorie"

                                        className="form-control mb-3 mt-3"

                                        value={DietToBeScheduled.day2Calorie}

                                        onChange={handleAddScheduledDiet}

                                        placeholder="Enter Day2 calorie" />

                                    <input

                                        type="number"

                                        id="day3Calorie"

                                        name="day3Calorie"

                                        className="form-control mb-3 mt-3"

                                        value={DietToBeScheduled.day3Calorie}

                                        onChange={handleAddScheduledDiet}

                                        placeholder="Enter Day3 calorie" />

                                    <input

                                        type="number"

                                        id="day4Calorie"

                                        name="day4Calorie"

                                        className="form-control mb-3 mt-3"

                                        value={DietToBeScheduled.day4Calorie}

                                        onChange={handleAddScheduledDiet}

                                        placeholder="Enter Day4 calorie" />

                                    <input

                                        type="number"

                                        id="day5Calorie"

                                        name="day5Calorie"

                                        className="form-control mb-3 mt-3"

                                        value={DietToBeScheduled.day5Calorie}

                                        onChange={handleAddScheduledDiet}

                                        placeholder="Enter Day5 calorie" />

                                    <input

                                        type="number"

                                        id="day6Calorie"

                                        name="day6Calorie"

                                        className="form-control mb-3 mt-3"

                                        value={DietToBeScheduled.day6Calorie}

                                        onChange={handleAddScheduledDiet}

                                        placeholder="Enter Day6 calorie" />

                                    <input

                                        type="number"

                                        id="day7Calorie"

                                        name="day7Calorie"

                                        className="form-control mb-3 mt-3"

                                        value={DietToBeScheduled.day7Calorie}

                                        onChange={handleAddScheduledDiet}

                                        placeholder="Enter Day7 calorie" />

   

                                    <input

                                        type="submit"

                                        className="btn btn-primary form-control mb-3 mt-3"

                                        value="Add "

                                        onClick={submitScheduledDiet}

   

                                    ></input>

                                </div>

                                </div>

                            </div>

                            </form>

                        </div>

 

                    </div>

                </div>

            </div>

 

        </div>

  )

  }

 

export default AddScheduledDiet

 

 
