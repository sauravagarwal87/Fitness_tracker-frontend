import React from 'react'
import '../ActivityDashboard.css'
import image from './logo.png'
import addactivity from './joglogo-modified.png'
import upactivity from './updatedietlogo-modified.png'
import chart from './chartlogo-modified.png'
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function
    () {
    let [user, setUser] = useState({});

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('loggedInUser')));
        console.log(localStorage.getItem('loggedInUser'));
        console.log(user);
    }, []);
    if (JSON.parse(localStorage.getItem('loggedInUser')) !== null) {

        return (
            <div className="container-fluid mb-5">
                <div className="container"><Link className="navbar-brand" to="/"><img width="200px" height="100px" src={image} /></Link></div>
                <div className="text-center mt-5">
                    {/* <h1 style={{color:'white'}}>WELCOME !!!</h1> */}
                    <h1 style={{ color: 'white' }}>My Activity !!!</h1>
                    {/* <img src={welcome} style={{height:'200px', width:'200px'}}/> */}
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="box2">
                            <div className="our-services2 da1">
                                <Link to='/add-Daily-Activity'>
                                    <div className="icon"> <img src={addactivity} style={{ height: '90px', width: '90px' }} /> </div>
                                    <h4>Add Daily Activity</h4>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="box2">
                            <div className="our-services2 da2">
                                <Link to='/update-Daily-Activity'>
                                    <div className="icon"> <img src={upactivity} style={{ height: '90px', width: '90px' }} /> </div>
                                    <h4>Update Daily Activity</h4>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="box2">
                            <div className="our-services2 da3">
                                <Link to='/view-All-Daily-Activity'>
                                    <div className="icon"> <img src={chart} style={{ height: '90px', width: '90px' }} /> </div>
                                    <h4>View All Activity</h4>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="box2">
                            <div className="our-services2 da4">
                                <Link to='/view-Daily-Activity'>
                                    <div className="icon"> <img src={chart} style={{ height: '90px', width: '90px' }} /> </div>
                                    <h4>View Daily Report</h4>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <div className="box2">
                            <div className="our-services2 da5">
                                <Link to='/add-Weekly-Activity'>
                                    <div className="icon"> <img src={addactivity} style={{ height: '90px', width: '90px' }} /> </div>
                                    <h4>Add Weekly Activity</h4>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="box2">
                            <div className="our-services2 da6">
                                <Link to='/view-Weekly-Activity'>
                                    <div className="icon"> <img src={chart} style={{ height: '90px', width: '90px' }} /> </div>
                                    <h4>View Weekly Activity</h4>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="box2">
                            <div className="our-services2 da7">
                                <Link to='/schedule-Activity'>
                                    <div className="icon"> <img src={addactivity} style={{ height: '90px', width: '90px' }} /> </div>
                                    <h4>Schedule Activity</h4>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="box2">
                            <div className="our-services2 da8">
                                <Link to='/view-Scheduled-Activity'>
                                    <div className="icon"> <img src={chart} style={{ height: '90px', width: '90px' }} /> </div>
                                    <h4>View Schedule Activity</h4>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <Link to="/"></Link>
            </div>);
    }
}