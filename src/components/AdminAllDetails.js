import React from 'react'
import image from './logo.png'
import '../App.css';
import '../Admin.css';
import { useState } from "react";
import { addActService } from "../services/DailyActivityService";
import User from '../models/User';
import Admin from './AdminLogin';
import { useDispatch, useSelector } from "react-redux";
import { getAllAdminsService } from "../services/AdminService";
import { getAllAdmins } from '../redux/AdminSlice';
import { removeAdminService } from '../services/AdminService';

const AdminAllDetails = () => {
    const dispatch = useDispatch();
    const allAdminsDataFromStore = useSelector((state) => state.adm.admList);

    const submitGetAllAdmins = (evt) => {
        evt.preventDefault();
        getAllAdminsService()
            .then((response) => {
                dispatch(getAllAdmins(response.data));
                console.log(response.data);
            })
            .catch((error) => {
                alert(error);
            });
    }
    let deletePost = (userName) =>{
        removeAdminService(userName).then(() =>{
            getAllAdminsService()
            .then((response) => {
                dispatch(getAllAdmins(response.data));
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
                            <h3>View All Admin</h3>

                        </div>
                        <div className="card-body">
                            <form>


                                <div className="form-group">
                                    <input type="submit" value="View"
                                        onClick={submitGetAllAdmins}
                                        className="btn float-right login_btn" />
                                </div>


                            </form>

                            <div>
                                <div> {(allAdminsDataFromStore.length !== 0) &&
                                    <div>
                                        <p className="text-primary text-center font-weight-bold lead">List of All Admins</p>
                                        {
                                        <div id='table-wrapper'>
                                            <div id='table-scroll'>
                                            <table className="table table-info">
                                                <thead style={{backgroundColor:'peachPuff'}}>
                                                    <tr>
                                                        <th>Email </th>
                                                        <th>Username</th>
                                                        <th>Password</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                {allAdminsDataFromStore.map((e =>
                                                    <tbody>
                                                        <tr>
                                                            <td>{e.email}</td>
                                                            <td>{e.userName}</td>
                                                            <td>{e.password}</td>
                                                            <td><button type="button" 
                                                                    className="btn btn-sm btn-danger far fa-trash-alt delete-button" 
                                                                    onClick={()=>deletePost(e.userName)}
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
export default AdminAllDetails