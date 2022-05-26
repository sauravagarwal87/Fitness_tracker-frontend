import React from 'react'
import image from './logo.png'
import '../App.css';
import { Link, useHistory } from 'react-router-dom';

import { useState } from "react";
import { addDietService,removeDailyDietsService } from "../services/DailyDietService";
import User from '../models/User';
import DailyDiet from '../models/DailyDiet';
import { useDispatch, useSelector } from "react-redux";
import { getAllDietsService, getDietsByDateService, deleteDailyDietsService } from "../services/DailyDietService";
import { getAllDiets, getDietsByDate } from '../redux/DailyDietSlice';
// import Footer from './components/Footer';


import { Doughnut } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';

import 'chart.js/auto';

const ViewAllDiets = () => {


    const dispatch = useDispatch();
    const allDietsDataFromStore = useSelector((state) => state.diet.dietList);
    const allDietsDataFromStore1 = useSelector((state) => state.diet.dietListByDate);
    const [user, setUser] = useState('');
    const [dietToBedeleted, setDietToBeDeleted] = useState(new DailyDiet());
   



    const submitGetAllDiets = (evt) => {
        evt.preventDefault();
        getAllDietsService()
            .then((response) => {
                dispatch(getAllDiets(response.data));
                console.log(response.data);
            })
            .catch((error) => {
                alert(error);
            });

        getDietsByDateService()
            .then((response) => {
                dispatch(getDietsByDate(response.data));
                console.log(response.data);
            })
            .catch((error) => {
                alert(error);
            });
    }

    let deletePost = (id) =>{
        removeDailyDietsService(id).then(() =>{
            getAllDietsService()
            .then((response) => {
                dispatch(getAllDiets(response.data));
                console.log(response.data);
            })
            .catch((error) => {
                alert(error);
            });

        getDietsByDateService()
            .then((response) => {
                dispatch(getDietsByDate(response.data));
                console.log(response.data);
            })
            .catch((error) => {
                alert(error);
            });
        }
        )
    
        
        // window.location.reload(false);
    }

    // const submitDeleteAct = (evt) => {
    //     console.log(evt);
    //     const newList = actToBedeleted.filter((e) => e.id !== evt);

    //     setActToBeDeleted(newList);


    //     e.preventDefault();
    //     let actTemp = { ...actToBedeleted, user };
    //     deleteDailyActsService()
    //         .then((response) => {
    //             dispatch(getAllActs(response.data));
    //             console.log(response.data);
    //         })
    //         .catch((error) => {
    //             alert(error);
    //         });
    //     }



    const data = {
        labels: allDietsDataFromStore1.map(function (arr) {
            return arr[1];
            
        }),
        datasets: [
            {
                label: 'Calorie',
                data: allDietsDataFromStore1.map(function (arr) {
                    return arr[0];
                }),
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1.5,

            }

        ]
    }

    const option = {
        plugins: {
            title: {
                display: true,
                text: 'Day Wise Calorie Chart',
                color: 'wheat',
                font: {
                    size: 34
                },
                padding: {
                    top: 30,
                    bottom: 30
                },
                responsive: true,
                animation: {
                    animateScale: true,
                }
            },
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: 'white'
                }
            },
            labels:{
                fontColor:'white',
            },

            scales: {
                x: {
                  ticks: {
                    color: 'green'
                  }
                },
                y: {
                  ticks: {
                    color: 'red'
                  }
                }
              }
            }

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
                            <h3>View All Diets</h3>

                        </div>
                        <div className="card-body">
                            <form className='bottom-two'>


                                <div className="form-group">
                                    <input type="submit" value="View"
                                        onClick={submitGetAllDiets}
                                        className="btn float-right login_btn" />
                                </div>


                            </form>

                            <div>
                                <div> {(allDietsDataFromStore.length !== 0) &&
                                    <div>
                                        <p className="text-center font-weight-bold lead title-activity">List of All Activities</p>
                                        {
                                            <div id='table-wrapper'>
                                                <div id='table-scroll'>
                                                    <table className="table table-info">
                                                        <thead  style={{backgroundColor:'peachPuff'}}>
                                                            <tr>
                                                                <th>Diet Id</th>
                                                                {/* <th>First Name</th> */}
                                                                <th>Date</th>
                                                                <th>FoodType</th>
                                                                <th>FoodName</th>
                                                                <th>Calorie</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        {allDietsDataFromStore.map((e =>
                                                            <tbody>
                                                                <tr>
                                                                    <td>{e.dailyDietId}</td>


                                                                    {/* {(e.user) &&
                                                                <>
                                                                    <td>{e.user.firstName}</td>

                                                                </>
                                                            } */}
                                                                    <td>{e.date}</td>
                                                                    <td>{e.foodtypey}</td>
                                                                    <td>{e.name}</td>
                                                                    <td>{e.calorie}</td>
                                                                    <td><button type="button" 
                                                                    className="btn btn-sm btn-danger far fa-trash-alt delete-button" 
                                                                    onClick={()=>deletePost(e.dailyDietId)}
                                                                    // onClick={() => submitDeleteAct(e.dailyActivityId)}
                                                                    /></td>
                                                                </tr>
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

                            <div>
                                <div>
                                    <div> {(allDietsDataFromStore1.length !== 0) &&
                                        <Bar data={data} options={option} />
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

export default ViewAllDiets;

// import React from 'react'
// import image from './logo.png'
// import '../App.css';
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { removeDailyDietsService } from "../services/DailyDietService";
// import { getDailyDiets } from '../redux/DailyDietSlice';
// import { Footer } from './Footer';
// import { MDBContainer } from "mdbreact";
// // import { Pie } from "react-chartjs-2";
// // import { PieChart, Pie} from 'recharts';
// import {Doughnut} from 'react-chartjs-2';
// import 'chart.js/auto';
// import { withRouter } from 'react-router-dom';
// //import Moment from 'moment';


// const ViewDailyDiet = () => {


//     const [date, setDate] = useState('');
//     const dispatch = useDispatch();
//     const dailyDietsDataFromStore = useSelector((state) => state.diet.dailyDietList);
//     const dailyDietsDataFromStore1 = useSelector((state) => state.diet.dailyDietList);

//     //let arr = dailyActsDataFromStore1.slice(0).map(i => i.slice(0, 2));
//     //let data = new Map(arr);

//     const data = {
//         labels: dailyDietsDataFromStore1.map(function(arr){
//             return arr.category;
//         }),
//         datasets: [
//             {
//                 label: 'Daily Diet',
//                 data: dailyDietsDataFromStore1.map(function(arr){
//                     return arr.calorie;
//                 }),
//                 borderColor: ['rgba(255,206,86,0.2)'],
//                 backgroundColor: ['rgba(232,99,132,1)',
//                 'rgba(232,211,6,1)',
//                 'rgba(54,162,235,1)',
//                 'rgba(255,159,64,1)',
//                 'rgba(153,102,255,1)',
//                 'rgba(60,179,113,1)',
//                 'rgba(255,0,0,1)',
//                 'rgba(201,255,50,1)'
//                 ],
//                 pointBackgroundColor: 'rgba(255,206,86,0.2)',
//             }
            
//         ]
//     }

//     const option = {
//         plugins: {
//             title: {
//                 display: true,
//                 text: 'Diet Wise Calorie Chart',
//                 color:'wheat',
//                 font: {
//                     size:34
//                 },
//                 padding:{
//                     top:30,
//                     bottom:30
//                 },
//                 responsive:true,
//                 animation:{
//                     animateScale: true,
//                                }
//             },
//             legend:{
//                 display:true,
//                 position:'top',
//                 labels: {
//                     color: 'white'
//                   }
//               }
//         }
        
//     }

//     const submitGetDailyDiets = (e) => {
//         e.preventDefault();
//         getDailyDietsService(date)
//             .then((response) => {
//                 dispatch(getDailyDiets(response.data));
//                 console.log(response.data);
//                 console.log(dailyDietsDataFromStore1[0]);
//                 if(response.data.length == 0){
//                     alert("No diets found");
//                 }
//             })
//             .catch((error) => {
//                 alert(error);
//             });
//     }

//     const handleChange = (e) => {
//         console.log(e.target.name);
//         console.log(e.target.value);
        
//         setDate(e.target.value);
//     }

//     let deletePost = (id) =>{
//         removeDailyDietsService(id).then(() =>{
//             getDailyDietsService(date)
//             .then((response) => {
//                 dispatch(getDailyDiets(response.data));
//                 console.log(response.data);
//             })}
//         )
    
        
//         // window.location.reload(false);
//     }

    

   


//     return (
//         <div>

//             <div className="header-dark">
//                 <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
//                     <div className="container"><a className="navbar-brand" href="#"><img width="200px" height="100px" src={image} /></a><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
//                         <div className="collapse navbar-collapse"
//                             id="navcol-1">
//                         </div>
//                     </div>
//                 </nav>
//             </div>

//             <div className="container ">
//                 {/* row justify-content-around */}
//                 <div className="d-flex justify-content-center">
//                     <div className="card">
//                         <div className="card-header">
//                             <h3>View Daily Diet</h3>

//                         </div>
//                         <div className="card-body ">
//                             <form className='bottom-two'>
//                                 <div className="input-group form-group">
//                                     <div className="input-group-prepend">
//                                         <span className="input-group-text"><i className="fas fa-user"></i></span>
//                                     </div>
//                                     <input type="text"
//                                     placeholder='DD/MM/YYYY'
//                                         id='date' name='date'
//                                         onChange={handleChange}
//                                         className="form-control" />

//                                 </div>

//                                 <div className="form-group">
//                                     <input type="submit" value="View"
//                                         onClick={submitGetDailyDiets}
//                                         className="btn float-right login_btn" />
//                                 </div>


//                             </form>
                           

//                             <div>
//                                 <div>
//                                 <div> {(dailyDietsDataFromStore.length !== 0) &&
//                                     <div>
//                                         <p className="text-center font-weight-bold lead title-diet">List of Daily Diets</p>
//                                         {
//                                             <div id='table-wrapper'>
//                                             <div id ='table-scroll'>
//                                             <table className="table table-info">
//                                                 <thead style={{backgroundColor:'peachPuff'}}>
//                                                     <tr>

//                                                         <th>Id</th>
//                                                         <th>FoodName</th>
//                                                         <th>FoodName</th>
//                                                         <th>Calorie</th>
//                                                         <th>Action</th>
//                                                     </tr>
//                                                 </thead>
//                                                 {dailyDietsDataFromStore.map((e =>
//                                                     <tbody>

//                                                         {/* <td>{e[0]}</td>
//                                                         <td>{e[1]}</td>
//                                                         <td>{e[2]}</td>
//                                                         <td>{e[3]}</td>
//                                                         <td>{e[4]}</td> */}
//                                                         <td>{e.dailyDietId}</td>
//                                                         <td>{e.foodtype}</td>
//                                                         <td>{e.name}</td>
//                                                         <td>{e.calorie}</td>
//                                                         <td><button type="button" 
//                                                         className="btn btn-sm btn-danger far fa-trash-alt delete-button"
//                                                          onClick={()=>deletePost(e.dailyDietId)}/></td>
                                                    
//                                                         {/* <tr>

//                                                             <td>{e.category}</td>
//                                                             <td>{e.duration}</td>
//                                                             <td>{e.frequency}</td>
//                                                             <td>{e.calorie}</td>
//                                                         </tr> */}
                                                     
//                                                     </tbody>
//                                                ))}
//                                             </table>
                                            
//                                             </div>
//                                             </div>

//                                         }
//                                     </div>
//                                 }
//                                 </div>

//                                 </div>
//                             </div>

//                             <div>
//                                 <div>
//                                     <div> {(dailyDietsDataFromStore1.length !== 0) &&
//                                         <Doughnut data={data} options={option} />
//                                     }
//                                     </div>

//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>

//             {/* <Footer></Footer> */}
            
//         </div>





//     )
// }


// export default ViewDailyDiet;