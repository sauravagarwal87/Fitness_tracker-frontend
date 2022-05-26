import React from 'react'
import image from './logo.png'
import '../App.css';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewWDietByCatService } from "../services/WeeklyDietService";
import { getWDietsByCat } from '../redux/WeeklyDietSlice';
import {getDDiet} from '../redux/DailyDietSlice'
import {Doughnut} from 'react-chartjs-2';


function ViewWeeklyDietByCategory() {

  const [date1, setDate1] = useState();
  const [date2, setDate2] = useState();
  const [weekData, setWeekData] = useState();
  const dispatch = useDispatch();
  const weeklyDietsDataFromStore = useSelector((state) => state.diet.dDietList);

  const data = {
    labels: weeklyDietsDataFromStore.map(function(arr){
        return arr[0];
    }),
    datasets: [
        {
            label: 'Weekly Diet',
            data: weeklyDietsDataFromStore.map(function(arr){
                return arr[1];
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
            text: 'Diet Wise Calorie Chart',
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


  const submitGetWeeklyDiets = (e) => {
    e.preventDefault();
    viewWDietByCatService(date1, date2)
      .then((response) => {
        dispatch(getDDiet(response.data));
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
          <div className="container"><a className="navbar-brand" href="#"><img width="200px" height="100px" src={image} /></a><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse"
              id="navcol-1">
            </div>
          </div>
        </nav>


        {/* <div className="container ">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h1 className="text-center"> Weekly Activity </h1>
            </div> */}




        <div className="container ">
          <div className="d-flex justify-content-center  ">
            <div className="card">
              <div className="card-header">
                <h3>View Weekly Diet By FoodType</h3>

              </div>
              <div className="card-body" >
                <form className='bottom-two'>
                  
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-user"></i></span>
                    </div>

                    <input type="text"
                      placeholder='DD/MM/YYYY'
                      // id='date1' name='date1'
                      onChange={handleChange1}
                      className="form-control"></input>

                  </div>

                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-user"></i></span>
                    </div>
                    <input type="text"
                      placeholder='DD/MM/YYYY'
                      // id='date2' name='date2'
                      onChange={handleChange2}
                      className="form-control" />

                  </div>



                  <div className="form-group">
                    <input type="submit" value="View"
                      onClick={submitGetWeeklyDiets}
                      className="btn float-right login_btn" />
                  </div>
                </form>

                <div>
                  <div> {(weeklyDietsDataFromStore.length !== 0) &&
                    <div>
                      <p className=" text-center font-weight-bold lead title-activity">List of Weekly Diets</p>
                      {
                        <div id='table-wrapper'>
                        <div id ='table-scroll'>
                        <table className="table table-info">
                          <thead style={{backgroundColor:'peachPuff'}}>
                            <tr>

                              <th>FoodType</th>
                              <th>Calorie</th>
                            </tr>
                          </thead>
                          {weeklyDietsDataFromStore.map((e =>
                            <tbody>

                              <td>{e[0]}</td>
                              <td>{e[1]}</td>
                              {/* <td>{e[2]}</td> */}
                              {/* <td>{e[3]}</td> */}



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
                                    <div> {(weeklyDietsDataFromStore.length !== 0) &&
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

export default ViewWeeklyDietByCategory 