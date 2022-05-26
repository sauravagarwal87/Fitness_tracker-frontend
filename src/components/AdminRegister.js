import image from './logo.png'
import React from 'react';
// import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import Admin from '../models/Admin';

import '../Admin.css';
import { addAdminsService } from '../services/AdminService';

const AdminRegister = () => {

    // const history = useHistory();

    const [admin, setAdmin] = useState(new Admin());
    const [credentials, setCredentials] = useState('');

    const handleAdmin = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setAdmin({
            ...admin,
            [event.target.name]: event.target.value
        });
    };

    const submitAdmin = (event) => {

        addAdminsService(admin)
            .then((response) => {
                console.log(response.data);
                alert('You are registered successfully. Please login now.');
                // history.push('/login'); // check this method to navigate 
            }).catch((error) => {
                console.log(error.response);
                setCredentials("Enter proper credentials.");
            });
        event.preventDefault();
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
                        <div className="container">
                        <div className="d-flex justify-content-center">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Admin Register</h3>
                                </div>

                                <div className="card-body" >
                                    <form>
                                    <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="email"
                                    id="email" name="email"
                                    value={admin.email}
                                    onChange={handleAdmin}
                                    className="form-control" placeholder="email"/>
                                </div>
                                    <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="userName"
                                    id="userName" name="userName"
                                    value={admin.userName}
                                    onChange={handleAdmin}
                                    className="form-control" placeholder="userName"/>
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="password"
                                    id="password" name="password"
                                    value={admin.password}
                                    onChange={handleAdmin}
                                    className="form-control" placeholder="password"/>
                                </div>
                                <div className="input-group form-group"> 
                                     {/* <div className="input-group-prepend"> 
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div> */}
                                    <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="form-control btn btn-success mb-3"
                            value="Register"
                            onClick={submitAdmin}
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
export default AdminRegister;



