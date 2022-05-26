import React from 'react'
import image from './logo.png'
import '../App.css';

import { useState } from "react";
import { viewWDietService, updateWDietService } from "../services/WeeklyDietService";
import User from '../models/User';
import DailyDiet from '../models/DailyDiet';
import WeeklyDiet from '../models/WeeklyDiet';
import { useDispatch, useSelector } from "react-redux";
import { getWDiets } from '../redux/WeeklyDietSlice';

function UpdateWeeklyDiet() {

  const dispatch = useDispatch();
  const [wdietToBeUpdated, setWDietToBeUpdated] = useState(new WeeklyDiet());
  const [user, setUser] = useState(new User());
  const [date1, setDate1] = useState('');
  const [res, setRes] = useState(new WeeklyDiet());
  const [c, setc] = useState();




  const handleUpdateWDiet = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setWDietToBeUpdated({
      ...wdietToBeUpdated,
      [e.target.name]: e.target.value
    });

    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  const submitUpdateWDiet = (evt) => {
    evt.preventDefault();
    let dietTemp = { ...wdietToBeUpdated, user };
    
    updateWDietService(date1, wdietToBeUpdated.date)
      .then((response) => {
        console.log(response.data);
         setRes(response.data);
         setc(1);
        alert(`Weekly Diet with Id ${response.data.weeklyDietId} updated successfully.`);
      })
      .catch(() => {
        setWDietToBeUpdated(new WeeklyDiet());
        dietTemp = '';
        alert("Weekly Diet could not be updated.");
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
          <div className="container"><a className="navbar-brand" href="#"><img width="200px" height="100px" src={image} /></a><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse"
              id="navcol-1">
            </div>
          </div>
        </nav>


        




        <div className="container ">
          <div className="d-flex justify-content-center  ">
            <div className="card">
              <div className="card-header">
                <h3>Update Weekly Diet</h3>

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
                      value={wdietToBeUpdated.date}
                      onChange={handleUpdateWDiet}
                      className="form-control" />

                  </div>



                  <div className="form-group">
                    <input type="submit" value="Update"
                      onClick={submitUpdateWDiet}
                      className="btn float-right login_btn" />
                  </div>
                </form>

                <div>
                                <div> {(c=== 1) &&
                                    <div>
                                        <p className="text-center font-weight-bold lead  title-diet"><mark>Weekly Diet Details</mark></p>
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

export default UpdateWeeklyDiet