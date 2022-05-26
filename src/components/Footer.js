import React from 'react'
import '../Footer.css'
import image from './logo.png'
import { Link, useHistory } from 'react-router-dom';



function Footer() {

    const history = useHistory();


    let logout =() =>{
        
        localStorage.removeItem('loggedInUser');
        localStorage.clear();
        alert("Logged out successfully...");
        history.push("/");
        window.location.reload();
    };

  return (
    <div>
        <div className="d-flex flex-column h-100 mt-5 ">




<footer className="w-100 py-4 flex-shrink-0">
    <div className="container py-4">
        <div className="row gy-4 gx-5">
            <div className="col-lg-3 col-md-4">
                
                <img width="190px" height="100px" src={image} className="mb-3"/>
                <p className="small text-muted">Join the best mobile fitness tracking experience today and get on the path to healthier living! </p>
                <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a className="text-primary" href="#">FitTrack.com</a></p>
            </div>
            <div className="col-lg-2 col-md-4">
                
                <h5 className="text-white mb-3">About Us</h5>
                <p className='small text-muted'>At FitTrack.com, we focus on making sure you can log your diets and activities as easily as possible. Because the easier we make it for you, the more likely you are to stay on track of healthiness, and the more likely you are to succeed in fitness goals. </p>
            </div>
            <div className="col-lg-2 col-md-4">
                <h5 className="text-white mb-3">Quick links</h5>
                <ul className="list-unstyled text-muted">
                    <li><Link to="/userDashboard">Home</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/AdminLogin">Admin Login</Link></li>
                    <li><Link  onClick={logout}>User Logout</Link></li>
                </ul>
            </div>
            
            <div className="col-lg-3 col-md-4">
                <h5 className="text-white mb-3">Newsletter</h5>
                <p className="small text-muted" >5 Nutritious and Sustainable Snack Food Ideas.</p>
                <p className="small text-muted">Your Foolproof Guide to Eating More Veggies</p>
                <form action="#">
                    <div className="input-group mb-3">
                        <input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button className="btn btn-primary" id="button-addon2" type="button"><i className="fas fa-paper-plane"></i></button>
                    </div>
                </form>
            </div>

            <div className="col-lg-2 col-md-4">
            <h5 className="text-white mb-3">Contact</h5>
            <p className="small text-muted"><i className="fas fa-home me-3"></i> Kolkata, Kolkata 700012, India</p>
          <p className="small text-muted">
            <i className="fas fa-envelope me-3"></i>
             fitrack@gmail.com
          </p>
          <p className="small text-muted"><i className="fas fa-phone me-3"></i> + 91 234 567 88</p>
          <p className="small text-muted"><i className="fas fa-print me-3"></i> + 91 234 567 89</p>

            </div>

        </div>
    </div>
</footer>
</div>

    </div>
  )
}

export default Footer