 import React from 'react'
import image from './logo.png'
import '../App.css';
import { Link, useHistory } from 'react-router-dom';
import { useState } from "react";
import { viewWActivityService, updateWActivityService } from "../services/WeeklyActivityService";
import User from '../models/User';
import DailyActivity from '../models/DailyActivity';
import WeeklyActivity from '../models/WeeklyActivity';
import { useDispatch, useSelector } from "react-redux";
import { getWActs } from '../redux/WeeklyActivitySlice';

function UpdateWeeklyActivity() {

  const dispatch = useDispatch();
  const [wactToBeUpdated, setWActToBeUpdated] = useState(new WeeklyActivity());
  const [user, setUser] = useState(new User());
  const [date1, setDate1] = useState('');
  const [res, setRes] = useState(new WeeklyActivity());
  const [c, setc] = useState();




  const handleUpdateWAct = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setWActToBeUpdated({
      ...wactToBeUpdated,
      [e.target.name]: e.target.value
    });

    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  const submitUpdateWAct = (evt) => {
    evt.preventDefault();
    let actTemp = { ...wactToBeUpdated, user };
    
    updateWActivityService(date1, wactToBeUpdated.date)
      .then((response) => {
        console.log(response.data);
         setRes(response.data);
         setc(1);
        alert(`Weekly Activity with Id ${response.data.weeklyActivityId} updated successfully.`);
      })
      .catch(() => {
        setWActToBeUpdated(new WeeklyActivity());
        actTemp = '';
        alert("Weekly Activity could not be updated.");
      });

    

  }

  const handleChange1 = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setDate1(e.target.value);
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


        




        <div className="container ">
          <div className="d-flex justify-content-center  ">
            <div className="card">
              <div className="card-header">
                <h3>Update Weekly Activity</h3>

              </div>
              <div className="card-body" >
                <form className='bottom-two'>





                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-user"></i></span>
                    </div>

                    <input type="text" placeholder='dd/mm/yyyy'
                      onChange={handleChange1}
                      className="form-control">
                    </input>

                  </div>

                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-user"></i></span>
                    </div>
                    <input type="text" placeholder='dd/mm/yyyy'
                      name='date' id='date'
                      value={wactToBeUpdated.date}
                      onChange={handleUpdateWAct}
                      className="form-control" />

                  </div>



                  <div className="form-group">
                    <input type="submit" value="Update"
                      onClick={submitUpdateWAct}
                      className="btn float-right login_btn" />
                  </div>
                </form>

                <div>
                                <div> {(c=== 1) &&
                                    <div>
                                        <p className="text-center font-weight-bold lead title-activity">Weekly Activity Details</p>
                                        {
                                            <div id='table-wrapper'>
                                                <div id='table-scroll'>
                                                    <table className="table table-info">
                                                        <thead  style={{backgroundColor:'peachPuff'}}>
                                                            <tr>
                                                                
                                                                
                                                                <th>Net Calorie</th>
                                                                <th>Net Point</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        {/* {WActFromStore.map((e => */}
                                                            <tbody>
                                                                <tr>
                                                                    {/* <td>Date: </td> */}
                                                                    <td>{res.netCalorie}</td>
                                                                    <td>{res.netPoint}</td>
                                                                    
                                                                </tr>
                                                            </tbody>
                                                        {/*  ))} */}
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




    </div>
  )
}

export default UpdateWeeklyActivity