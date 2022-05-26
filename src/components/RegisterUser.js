import React from 'react'
import image from './logo.png'
import '../App.css';
import { useState } from "react";
import { addUserService } from "../services/UserService";
import User from '../models/User';
import { Link, useHistory } from 'react-router-dom';



const RegisterUser=() =>{

    const [userToBeAdded, setUserToBeAdded] = useState(new User());
    // const [user, setUser] = useState(new User());






    const handleAddUser = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setUserToBeAdded({
            ...userToBeAdded,
            [e.target.name]: e.target.value
        });

        
    }


    const submitAddUser = (evt) => {
        evt.preventDefault();
        let actTemp = { ...userToBeAdded};
        addUserService(actTemp)
            .then((response) => {
                console.log(response.data);
                alert(`User with email ${response.data.email} added successfully.`);
            })
            .catch(() => {
                setUserToBeAdded(new User());
                actTemp = '';
                alert("User could not be registered.");
            });
    }

    return (
        <div>
            <div className="header-dark">
                <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
                    <div className="container"><Link className="navbar-brand" to="/"><img width="200px" height="100px" src={image} /></Link><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
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
                            <h3>Register User</h3>

                        </div>
                        <div className="card-body" >
                            <form>



                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="email"
                                    id="email" name="email"
                                    value={userToBeAdded.email}

                                    onChange={handleAddUser}
                                    className="form-control" placeholder="Email" />

                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text"
                                    id="firstName" name="firstName"
                                    value={userToBeAdded.firstName}

                                    onChange={handleAddUser}
                                    className="form-control" placeholder="First Name" />

                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text"
                                    id="lastName" name="lastName"
                                    value={userToBeAdded.lastName}

                                    onChange={handleAddUser}
                                    className="form-control" placeholder="Last Name" />

                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="number"
                                    id="age" name="age"
                                    value={userToBeAdded.age}
                                    onChange={handleAddUser}
                                    className="form-control" placeholder="Age" />
                                 </div>

                                 <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="number"
                                    id="weight" name="weight"
                                    value={userToBeAdded.weight}
                                    onChange={handleAddUser}
                                    className="form-control" placeholder="Weight (in kgs)" />
                                 </div>

                                 <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="number"
                                    id="height" name="height"
                                    value={userToBeAdded.height}
                                    onChange={handleAddUser}
                                    className="form-control" placeholder="Height (in cm)" />
                                 </div>

                                 <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type='userName'
                                    id="userName" name="userName"
                                    value={userToBeAdded.userName}

                                    onChange={handleAddUser}
                                    className="form-control" placeholder="Username" />

                                </div>


                                 


                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="password"
                                    id="password" name="password"
                                    value={userToBeAdded.password}

                                    onChange={handleAddUser}
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
                            value="Register"
                            onClick={submitAddUser}
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

export default RegisterUser