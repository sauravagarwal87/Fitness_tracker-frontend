

import React from 'react'
import image from './logo.png'
import '../App.css';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewWActivityByCatService } from "../services/WeeklyActivityService";
import { getWActsByCat } from '../redux/WeeklyActivitySlice';
import {getDAct} from '../redux/DailyActivitySlice'
import {Doughnut} from 'react-chartjs-2';
import { Link, useHistory } from 'react-router-dom';

function ViewWeeklyActivityByCategory() {

  const [date1, setDate1] = useState();
  const [date2, setDate2] = useState();
  const [weekData, setWeekData] = useState();
  const dispatch = useDispatch();
  const weeklyActsDataFromStore = useSelector((state) => state.act.dActList);

  const data = {
    labels: weeklyActsDataFromStore.map(function(arr){
        return arr[0];
    }),
    datasets: [
        {
            label: 'Weekly Activity',
            data: weeklyActsDataFromStore.map(function(arr){
                return arr[3];
            }),
            borderColor: ['rgba(255,206,86,0.2)'],
            backgroundColor: ['rgba(232,99,132,1)',
            'rgba(232,211,6,1)',
            'rgba(54,162,235,1)',
            'rgba(255,159,64,1)',
            'rgba(153,102,255,1)',
            'rgba(60,179,113,1)',
            'rgba(255,0,0,1)',
            'rgba(201,255,50,1)'
            ],
            pointBackgroundColor: 'rgba(255,206,86,0.2)',
        }
        
    ]
}

const option = {
    plugins: {
        title: {
            display: true,
            text: 'Activity Wise Calorie Chart',
            color:'wheat',
            font: {
                size:34
            },
            padding:{
                top:30,
                bottom:30
            },
            responsive:true,
            animation:{
                animateScale: true,
                           }
        },
        legend:{
            display:true,
            position:'top',
            labels: {
                color: 'white'
              }
          }
    }
    
}


  const submitGetWeeklyActs = (e) => {
    e.preventDefault();
    viewWActivityByCatService(date1, date2)
      .then((response) => {
        dispatch(getDAct(response.data));
        // setWeekData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }

  const handleChange1 = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setDate1(e.target.value);
  }

  const handleChange2 = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setDate2(e.target.value);
  }


  return (
    <div>
      <div className="header-dark">
        <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
          <div className="container"><Link className="navbar-brand" to="/userDashboard">
                        <img width="200px" height="100px" src={image} />
                        </Link>  <div className="collapse navbar-collapse"
              id="navcol-1">
            </div>
          </div>
        </nav>


      




        <div className="container ">
          <div className="d-flex justify-content-center  ">
            <div className="card">
              <div className="card-header">
                <h3>View Weekly Activity By Category</h3>

              </div>
              <div className="card-body" >
                <form className='bottom-two'>
                  
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fa fa-calendar"></i></span>
                    </div>

                    <input type="text"
                      placeholder='DD/MM/YYYY'
                      // id='date1' name='date1'
                      onChange={handleChange1}
                      className="form-control"></input>

                  </div>

                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fa fa-calendar"></i></span>
                    </div>
                    <input type="text"
                      placeholder='DD/MM/YYYY'
                      // id='date2' name='date2'
                      onChange={handleChange2}
                      className="form-control" />

                  </div>



                  <div className="form-group">
                    <input type="submit" value="View"
                      onClick={submitGetWeeklyActs}
                      className="btn float-right login_btn" />
                  </div>
                </form>

                <div>
                  <div> {(weeklyActsDataFromStore.length !== 0) &&
                    <div>
                      <p className=" text-center font-weight-bold lead title-activity">List of Weekly Activities</p>
                      {
                        <div id='table-wrapper'>
                        <div id ='table-scroll'>
                        <table className="table table-info">
                          <thead style={{backgroundColor:'peachPuff'}}>
                            <tr>

                              <th>Category</th>
                              <th>Duration</th>
                              <th>Frequency</th>
                              <th>Calorie</th>
                            </tr>
                          </thead>
                          {weeklyActsDataFromStore.map((e =>
                            <tbody>

                              <td>{e[0]}</td>
                              <td>{e[1]}</td>
                              <td>{e[2]}</td>
                              <td>{e[3]}</td>



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


              </div>

              <div>
                                <div>
                                    <div> {(weeklyActsDataFromStore.length !== 0) &&
                                        <Doughnut data={data} options={option} />
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

export default ViewWeeklyActivityByCategory