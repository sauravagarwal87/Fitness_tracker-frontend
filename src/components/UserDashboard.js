import React from 'react'
import '../Dashboard.css'
import image from './logo.png' 
import userim from './userlogo-modified.png'
import fruit from './fruits-modified.png'
import running from './running-modified.png'
import logout1 from './logout-modified.png'
import welcome from './welcome2-modified.png'
import User from '../models/User'
import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

const UserDashBoard = () => {

    const history = useHistory();

    let [user, setUser] = useState({});

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('loggedInUser')));
        console.log(localStorage.getItem('loggedInUser'));
        console.log(user);
    }, []);

    let logout =() =>{
        
        localStorage.removeItem('loggedInUser');
        localStorage.clear();
        alert("Logged out successfully...");
        history.push("/");
        window.location.reload();
    };

    if(JSON.parse(localStorage.getItem('loggedInUser')) !== null){
  return (
    <div className="container-fluid">
        <div className="container"><Link className="navbar-brand" to="/"><img width="200px" height="100px" src={image} /></Link><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
        {/* <img src={welcome} style={{height:'200px', width:'200px', marginLeft:'180px', marginTop:'20px'}}/> */}
        </div>
    <div className="text-center">
        <h1 style={{color:'white'}}>WELCOME !!!</h1>
        
    </div>
    <div className="row">
        <div className="col-md-6">
            <div className="box">
                <div className="our-services settings">
                    <Link to='/UpdateUser'>
                    <div className="icon"> <img src={userim} style={{height:'90px', width:'90px'}}/> </div>
                    <h4>My Profile</h4>
                    <p>Update your profile details</p>
                    </Link>
                </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="box">
                <div className="our-services speedup">
                    <Link to='/dietDashboard'>
                    <div className="icon"> <img src={fruit} style={{height:'90px', width:'90px'}}/> </div>
                    <h4>My Diet</h4>
                    <p>Plan and Track your diet</p>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-md-6">
            <div className="box">
                <div className="our-services backups">
                    <Link to='/activityDashboard'>
                    <div className="icon"> <img src={running} style={{height:'90px', width:'90px'}}/> </div>
                    <h4>My Activity</h4>
                    <p>Plan and Track your Activity</p>
                    </Link>
                </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="box">
                <div className="our-services ssl">
                    <Link  onClick={logout}>
                    <div className="icon"> <img src={logout1} style={{height:'90px', width:'90px'}}/> </div>
                    <h4>logout</h4>
                    <p>Done for today?? Now Sleep</p>
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

export default UserDashBoard;
