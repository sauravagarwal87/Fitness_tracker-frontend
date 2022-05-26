import React from 'react'
import sample from './sample.mp4'
import image from './logo.png' 
import '../App.css';
import { Link } from "react-router-dom";

function Home() {
  return (
<div>
        <div className="header-dark">
            <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
                <div className="container">
                    <Link  className="navbar-brand" role="button" to="/"><img width="200px" height="100px" src={image}/></Link>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <span className="navbar-text" style={{marginLeft:'700px'}}><Link className="login" to="/login" >Log In</Link></span>
                        <Link className="btn btn-light action-button" role="button" to="/register">Sign Up</Link></div>
                </div>
            </nav>
            <div className="container hero">
                <div className="row">
                    <div className="col-md-8 offset-md-2 pb-5">
                        <h1 className="text-center">The Revolution is Here.</h1>
                        <div className="embed-responsive embed-responsive-16by9"><video className="video-home" width="700" height="480" loop autoPlay muted>
        <source src={sample} type="video/mp4"/>
        </video></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home