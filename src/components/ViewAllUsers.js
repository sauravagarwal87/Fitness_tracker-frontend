import React from 'react'
import image from './logo.png'
import '../App.css';
import { useState } from "react";
import { addActService } from "../services/DailyActivityService";
import User from '../models/User';
import Admin from './AdminLogin';
import { useDispatch, useSelector } from "react-redux";
import { getAllAdminsService } from "../services/AdminService";
import { getAllAdmins } from '../redux/AdminSlice';
import { getAllUser } from '../redux/UserSlice';
import { getAllUserService } from '../services/AdminService';
import { removeUserService } from '../services/AdminService';

const ViewAllUsers = () => {
    const dispatch = useDispatch();
    const allUserDataFromStore = useSelector((state) => state.usr.usrList);

    const submitGetAllUser = (evt) => {
        evt.preventDefault();
        getAllUserService()
            .then((response) => {
                dispatch(getAllUser(response.data));
                console.log(response.data);
            })
            .catch((error) => {
                alert(error);
            });
        }
            let deletePost = (email) =>{
                removeUserService(email).then(() =>{
                    getAllUserService()
                    .then((response) => {
                        dispatch(getAllUser(response.data));
                        console.log(response.data);
                    })}
                )
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
                            <h3>View All User</h3>

                        </div>
                        <div className="card-body">
                            <form>


                                <div className="form-group">
                                    <input type="submit" value="View"
                                        onClick={submitGetAllUser}
                                        className="btn float-right login_btn" />
                                </div>


                            </form>

                            <div>
                                <div> {(allUserDataFromStore.length !== 0) &&
                                    <div>
                                        <p className="text-primary text-center font-weight-bold lead">List of All Users</p>
                                        {
                                            <div id='table-wrapper'>
                                            <div id='table-scroll'>
                                            <table className="table table-info">
                                                <thead style={{backgroundColor:'peachPuff'}}>
                                                    <tr>
                                                        <th>Email </th>
                                                        <th>firstName</th>
                                                        <th>lastName</th>
                                                        <th>Age </th>
                                                        <th>Weight</th>
                                                        <th>Height</th>
                                                        <th>UserName</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                {allUserDataFromStore.map((e =>
                                                    <tbody>
                                                        <tr>
                                                            <td>{e.email}</td>
                                                            <td>{e.firstName}</td>
                                                            <td>{e.lastName}</td>
                                                            <td>{e.age}</td>
                                                            <td>{e.weight}</td>
                                                            <td>{e.height}</td>
                                                            <td>{e.userName}</td>
                                                            <td><button type="button" 
                                                                    className="btn btn-sm btn-danger far fa-trash-alt delete-button" 
                                                                    onClick={()=>deletePost(e.email)}
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
                        </div>

                    </div>
                </div>
            </div>

        </div>

    )
}
export default ViewAllUsers;