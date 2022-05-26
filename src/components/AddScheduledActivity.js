import { React, useState } from 'react';
import image from './logo.png'
import '../App.css';
import { addScheduledActivityService } from "../services/ScheduledActivityService";
import User from '../models/User';
import ScheduledActivity from '../models/ScheduledActivity';
import { Link, useHistory } from 'react-router-dom';


const AddScheduledActivity = () => {


    const [activityToBeScheduled, setActivityToBeScheduled] = useState(new ScheduledActivity());
    const [user, setUser] = useState(new User());
    const [c, setc] = useState();

    const handleAddScheduledActivity = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setActivityToBeScheduled({
            ...activityToBeScheduled,
            [e.target.name]: e.target.value
        });

        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }


    const submitScheduledActivity = (evt) => {
        evt.preventDefault();
        let actTemp = { ...activityToBeScheduled, user };
        addScheduledActivityService(actTemp)
            .then((response) => {
                console.log(response.data);
                alert(`Scheduled Activity added `);
            })
            .catch(() => {
                setActivityToBeScheduled(new ScheduledActivity());
                actTemp = '';
                alert("Activity could not be scheduled.");
            });
    }

    const submitaddScheduleActivity = (evt) => {
        evt.preventDefault();
        setc(1);
                
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
                            <h3>AddScheduledActivity</h3>

                        </div>
                        <div className="card-body">
                            <form className='bottom-two'>


                                <div className="form-group">
                                    <input type="submit" value="Add"
                                        onClick={submitaddScheduleActivity}

                                        className="btn float-right login_btn" />
                                </div>


                            </form>

                            <div>
                                <div> {(c === 1) &&
                                    <div className="form form-group" >
                                    <input type="email"
                                        id="email" name="email"
                                        value={user.email}
    
                                        onChange={handleAddScheduledActivity}
                                        className="form-control" placeholder="email" />
    
                                    <input
                                        type="number"
                                        id="day1Calorie"
                                        name="day1Calorie"
                                        className="form-control mb-3 mt-3"
                                        value={activityToBeScheduled.day1Calorie}
                                        onChange={handleAddScheduledActivity}
                                        placeholder="Enter Day1 calorie" />
                                    <input
                                        type="number"
                                        id="day2Calorie"
                                        name="day2Calorie"
                                        className="form-control mb-3 mt-3"
                                        value={activityToBeScheduled.day2Calorie}
                                        onChange={handleAddScheduledActivity}
                                        placeholder="Enter Day2 calorie" />
                                    <input
                                        type="number"
                                        id="day3Calorie"
                                        name="day3Calorie"
                                        className="form-control mb-3 mt-3"
                                        value={activityToBeScheduled.day3Calorie}
                                        onChange={handleAddScheduledActivity}
                                        placeholder="Enter Day3 calorie" />
                                    <input
                                        type="number"
                                        id="day4Calorie"
                                        name="day4Calorie"
                                        className="form-control mb-3 mt-3"
                                        value={activityToBeScheduled.day4Calorie}
                                        onChange={handleAddScheduledActivity}
                                        placeholder="Enter Day4 calorie" />
                                    <input
                                        type="number"
                                        id="day5Calorie"
                                        name="day5Calorie"
                                        className="form-control mb-3 mt-3"
                                        value={activityToBeScheduled.day5Calorie}
                                        onChange={handleAddScheduledActivity}
                                        placeholder="Enter Day5 calorie" />
                                    <input
                                        type="number"
                                        id="day6Calorie"
                                        name="day6Calorie"
                                        className="form-control mb-3 mt-3"
                                        value={activityToBeScheduled.day6Calorie}
                                        onChange={handleAddScheduledActivity}
                                        placeholder="Enter Day6 calorie" />
                                    <input
                                        type="number"
                                        id="day7Calorie"
                                        name="day7Calorie"
                                        className="form-control mb-3 mt-3"
                                        value={activityToBeScheduled.day7Calorie}
                                        onChange={handleAddScheduledActivity}
                                        placeholder="Enter Day7 calorie" />
    
                                    <input
                                        type="submit"
                                        className="btn btn-primary form-control mb-3 mt-3"
                                        value="Add "
                                        onClick={submitScheduledActivity}
    
                                    ></input>
                                </div>
                                }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default AddScheduledActivity;