import { React, useState } from 'react';
import image from './logo.png'
import '../App.css';
import { addScheduledActivityService } from "../services/ScheduledActivityService";
import User from '../models/User';
import { useDispatch, useSelector } from 'react-redux';
import { viewScheduledActivity } from "../redux/ScheduledActivitySlice"
import ScheduledActivity from '../models/ScheduledActivity';
import { viewScheduledActivityService } from '../services/ScheduledActivityService';
import { Link, useHistory } from 'react-router-dom';



const ViewAllScheduledActivity = () => {

  
   
    const [Sdact, setSdact] = useState(new ScheduledActivity());
    const [c, setc] = useState();



    

    const submitViewScheduleActivity = (evt) => {
        evt.preventDefault();
        viewScheduledActivityService()
            .then((response) => {
                setSdact(response.data);
                setc(1);
              
                console.log(response.data);

            })
            .catch((error) => {
                alert(error);
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

            <div className="container ">
                <div className="d-flex justify-content-center">
                    <div className="card">
                        <div className="card-header">
                            <h3>ViewScheduledActivity</h3>

                        </div>
                        <div className="card-body">
                            <form className='bottom-two'>


                                <div className="form-group">
                                    <input type="submit" value="View"
                                        onClick={submitViewScheduleActivity}

                                        className="btn float-right login_btn" />
                                </div>


                            </form>

                            <div>
                                <div> {(c === 1) &&
                                    <div>
                                        <p className="text-center font-weight-bold lead title-activity">List of All Activities</p>
                                        {
                                            <div id='table-wrapper'>
                                                <div id='table-scroll'>
                                                    <table className="table table-info">
                                                        <thead style={{ backgroundColor: 'peachPuff' }}>
                                                            <tr>
                                                                <th>Days</th>
                                                               
                                                                <th>Calorie Burnt</th>

                                                            </tr>
                                                        </thead>
                                                      
                                                        <tbody>
                                                            <tr>
                                                                <td>Day1</td>



                                                                <td>{Sdact.day1Calorie}</td>


                                                            </tr>
                                                            <tr>
                                                                <td>Day2</td>
                                                                <td>{Sdact.day2Calorie}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Day3</td>
                                                                <td>{Sdact.day3Calorie}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Day4</td>
                                                                <td>{Sdact.day4Calorie}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Day5</td>
                                                                <td>{Sdact.day5Calorie}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Day6</td>
                                                                <td>{Sdact.day6Calorie}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Day7</td>
                                                                <td>{Sdact.day7Calorie}</td>
                                                            </tr>
                                                        </tbody>
                                                        {/* ))} */}
                                                    </table>
                                                </div>
                                            </div>

                                        }
                                    </div>
                                }
                                </div>
                            </div>





                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default ViewAllScheduledActivity;

