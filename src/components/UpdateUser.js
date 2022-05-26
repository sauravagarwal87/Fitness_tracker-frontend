import React from 'react'
import image from './logo.png'
import '../App.css';
import { useState } from "react";
import { updateUser } from "../services/UserService";
import User from '../models/User';
import { Link, useHistory } from 'react-router-dom';



const UpdateUser=() =>{

    const [userToBeUpdate, setUserToBeUpdate] = useState(new User());
    // const [user, setUser] = useState(new User());






    const handleUpdateUser = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setUserToBeUpdate({
            ...userToBeUpdate,
            [e.target.name]: e.target.value
        });

        
    }


    const submitUpdateUser = (evt) => {
        evt.preventDefault();
        let actTemp = { ...userToBeUpdate};
        updateUser(actTemp)
            .then((response) => {
                console.log(response.data);
                alert(`User with email ${response.data.email} added successfully.`);
            })
            .catch(() => {
                setUserToBeUpdate(new User());
                actTemp = '';
                alert("User could not be updated.");
            });
    }

    return (
        <div>
            <div className="header-dark">
                <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
                    <div className="container"><Link className="navbar-brand" to="/UserDashboard"><img width="200px" height="100px" src={image} /></Link><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse"
                            id="navcol-1">
                            </div>
                    </div>
                </nav>
            </div>

            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="card">
                        <div className="card-header">
                            <h3>Update User</h3>

                        </div>
                        <div className="card-body" >
                            <form>



                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="email"
                                    id="email" name="email"
                                    value={userToBeUpdate.email}

                                    onChange={handleUpdateUser}
                                    className="form-control" placeholder="Email" />

                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text"
                                    id="firstName" name="firstName"
                                    value={userToBeUpdate.firstName}

                                    onChange={handleUpdateUser}
                                    className="form-control" placeholder="First Name" />

                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text"
                                    id="lastName" name="lastName"
                                    value={userToBeUpdate.lastName}

                                    onChange={handleUpdateUser}
                                    className="form-control" placeholder="Last Name" />

                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="number"
                                    id="age" name="age"
                                    value={userToBeUpdate.age}
                                    onChange={handleUpdateUser}
                                    className="form-control" placeholder="Age" />
                                 </div>

                                 <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="number"
                                    id="weight" name="weight"
                                    value={userToBeUpdate.weight}
                                    onChange={handleUpdateUser}
                                    className="form-control" placeholder="Weight (in kgs)" />
                                 </div>

                                 <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="number"
                                    id="height" name="height"
                                    value={userToBeUpdate.height}
                                    onChange={handleUpdateUser}
                                    className="form-control" placeholder="Height (in cm)" />
                                 </div>

                                 <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type='userName'
                                    id="userName" name="userName"
                                    value={userToBeUpdate.userName}

                                    onChange={handleUpdateUser}
                                    className="form-control" placeholder="Username" />

                                </div>


                                 


                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="password"
                                    id="password" name="password"
                                    value={userToBeUpdate.password}

                                    onChange={handleUpdateUser}
                                    className="form-control" placeholder="Password" />

                                </div>

                                
                                <div className="form-group">
                                    {/* <input type="submit" value="Add" className="btn float-right login_btn" 
                                     onClick={submitAddUser}
                                    
                                    /> */}
                                       <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="form-control btn btn-success mb-3"
                            value="Update"
                            onClick={submitUpdateUser}
                        />
                                </div>
                            </form>


                        </div>

                    </div>
                </div>
            </div>
     


        </div>
    )
}

export default UpdateUser