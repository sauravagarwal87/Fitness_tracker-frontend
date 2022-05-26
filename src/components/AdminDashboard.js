import React from 'react'
import '../Dashboard.css'
import image from './logo.png' 
import userim from './userlogo-modified.png'
import fruit from './fruits-modified.png'
import running from './running-modified.png'
import logout from './logout-modified.png'
import welcome from './welcome2-modified.png'
 import { Link, useHistory } from 'react-router-dom';
 import { useState, useEffect } from 'react';
// export default function 
// () {
    const AdminDashboard = () => {

        const history = useHistory();
    
        let [admin, setAdmin] = useState({});
    
    //     useEffect(() => {
    //         setAdmin(JSON.parse(localStorage.getItem('loggedInUser')));
    //         console.log(localStorage.getItem('loggedInUser'));
    //         console.log(admin);
    //     }, []);
    
        let logout1 =() =>{
            
            localStorage.removeItem('loggedInUser');
            localStorage.clear();
            alert("Logged out successfully...");
            history.push("/");
            window.location.reload();
        };
    
    //     if(JSON.parse(localStorage.getItem('loggedInUser')) !== null){
  return (
    <div className="container-fluid mb-5">
    <div className="text-center mt-5">
        {/* <h1 style={{color:'white'}}>WELCOME !!!</h1> */}
        <img src={welcome} style={{height:'200px', width:'200px'}}/>
    </div>
    <div className="row">
        <div className="col-md-6">
            <div className="box">
                <div className="our-services settings">
                    <Link to="/AdminAllDetails">
                    <div className="icon"> <img src={userim} style={{height:'90px', width:'90px'}}/> </div>
                    <h4>View All Admins</h4>
                    <p>View and Delete Admins profile</p>
                    </Link>
                </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="box">
                <div className="our-services speedup">
                    <Link to="/ViewAllUsers">
                    <div className="icon"> <img src={userim} style={{height:'90px', width:'90px'}}/> </div>
                    <h4>View All Users</h4>
                    <p>View and Delete Users profile</p>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-md-6">
            <div className="box">
                <div className="our-services backups">
                    <Link to="/AdminRegister">
                    <div className="icon"> <img src={userim} style={{height:'90px', width:'90px'}}/> </div>
                    <h4>Register Admins</h4>
                    <p>Add new Admins</p>
                    </Link>
                </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="box">
                <div className="our-services ssl">
                <Link  onClick={logout1}>
                    <div className="icon"> <img src={logout} style={{height:'90px', width:'90px'}}/> </div>
                    <h4>logout</h4>
                    <p>Done for today?? Now Sleep</p>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</div>
  )
    // }
    // else{
    //     return(
    //         <div>
    //             <Link to="/"></Link>
    //         </div>);
    //   }
 }
export default AdminDashboard;
