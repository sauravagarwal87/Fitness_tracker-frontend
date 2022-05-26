import React from 'react'
import '../DietDashboard.css'
import image from './logo.png'
import logo from './MicrosoftTeams-image.png' 
import adddiet from './adddietlogo-modified.png'
import updiet from './updatedietlogo-modified.png'
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
   if(JSON.parse(localStorage.getItem('loggedInUser')) !== null) {
  return (
    <div className="container-fluid mb-5">
        <div className="container"><Link className="navbar-brand" to="/UserDashboard"><img width="200px" height="100px" src={image} /></Link></div>
                <div className="text-center mt-5">
                    {/* <h1 style={{color:'white'}}>WELCOME !!!</h1> */}
                    <h1 style={{ color: 'white' }}>My Diet !!!</h1>
                    {/* <img src={welcome} style={{height:'200px', width:'200px'}}/> */}
                </div>
         <div className="row">
        <div className="col-md-3">
            <div className="box1">
                <div className="our-services1 settings3">
                    <Link to='/add-Daily-Diet'>
                        <div className="icon"> <img src={adddiet} style={{height:'90px', width:'90px'}}/> </div>
                        <h4>Add Daily Diet</h4>
                    </Link>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="box1">
                <div className="our-services1 settings1">
                    <Link to='/update-Daily-Diet'>
                        <div className="icon"> <img src={updiet} style={{height:'90px', width:'90px'}}/> </div>
                        <h4>Update Daily Diet</h4>
                    </Link>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="box1">
                <div className="our-services1 settings2">
                    <Link to='/view-All-Diet'>
                        <div className="icon"> <img src={chart} style={{height:'90px', width:'90px'}}/> </div>
                        <h4>View All Diet</h4>
                    </Link>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="box1">
                <div className="our-services1 speedup1">
                    <Link to='/view-Daily-Diet'>
                        <div className="icon"> <img src={chart} style={{height:'90px', width:'90px'}}/> </div>
                        <h4>View Daily Report</h4>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    
    <div className="row">
        <div className="col-md-3">
            <div className="box1">
                <div className="our-services1 backups1">
                    <Link to ='/add-Weekly-Diet'>
                        <div className="icon"> <img src={adddiet} style={{height:'90px', width:'90px'}}/> </div>
                        <h4>Add Weekly Diet</h4>
                    </Link>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="box1">
                <div className="our-services1 ssl1">
                    <Link to='/view-Weekly-Diet'>
                        <div className="icon"> <img src={chart} style={{height:'90px', width:'90px'}}/> </div>
                        <h4>View Weekly Diet</h4>
                    </Link>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="box1">
                <div className="our-services1 backups1">
                    <Link to='/addScheduledDiet'>
                    <div className="icon"> <img src={adddiet} style={{height:'90px', width:'90px'}}/> </div>
                    <h4>Schedule Diet</h4>
                    </Link>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="box1">
                <div className="our-services1 ssl1">
                    <Link to='/viewScheduledDiet'>
                    <div className="icon"> <img src={chart} style={{height:'90px', width:'90px'}}/> </div>
                    <h4>View Schedule Diet</h4>
                    </Link>
                </div>
            </div>
        </div>
        
    </div>
</div>
  )
}
else{
    return(
        <div>
            <Link to="/"></Link>
        </div>);
}
}