import React from 'react'
import User from '../models/User';
import image from './logo.png' 
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { loginService } from '../services/LoginService';


function Login() {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
    // const [loggedInUser, setLoggedInUser] = useState('')
    const [credentials, setCredentials] = useState('');
    const history = useHistory();

    const handleAppUser = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);

		setEmail(event.target.value);
        // setEmail({
        //     ...email,
        //     [event.target.name]: event.target.value
        // });
		// setPassword({
        //     ...password,
        //     [event.target.name]: event.target.value
        // });
		
    };

	const handleAppUser1 = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);

		setPassword(event.target.value);
    };

    const submitAppUser = (event) => {
        loginService(email,password)
            .then((response) => {
                localStorage.setItem('loggedInUser', JSON.stringify(response.data));
                console.log(JSON.parse(localStorage.getItem('loggedInUser')));
                console.log(response.data);
                alert('Successfully Logged In');
                history.push('/UserDashboard');
                // window.location.assign('/home');
                // window.location.reload();
            }).catch((error) => {
                localStorage.removeItem('loggedInUser');
                localStorage.clear();
				alert('Enter proper credentials')
                console.log(error.response);
                setCredentials("Enter proper credentials.");
            });
        event.preventDefault();
    }

	return (
		<div>
			<div className="container"><Link className="navbar-brand" to="/"><img width="200px" height="100px" src={image}/></Link><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button></div>
			<div className="container">
				<div className="d-flex justify-content-center h-100">
					<div className="card">
						<div className="card-header">
							<h3>Sign In</h3>
							
						</div>
						<div className="card-body">
							<form>
								<div className="input-group form-group">
									<div className="input-group-prepend">
										<span className="input-group-text"><i className="fas fa-user"></i></span>
									</div>
									{/* <input type="text" className="form-control" placeholder="username" /> */}
									<input
                            type="text"
                            id="email"
							value={email}
                            className="form-control"
                            placeholder="Enter username"
                            onChange={handleAppUser}
                            autoFocus
                            required
                        />

								</div>
								<div className="input-group form-group">
									<div className="input-group-prepend">
										<span className="input-group-text"><i className="fas fa-key"></i></span>
									</div>
									{/* <input type="password" className="form-control" placeholder="password" /> */}
									<input
                            type="password"
							value={password}
                            id="password"
                            className="form-control"
                            placeholder="Enter password"
                            onChange={handleAppUser1}
                            required
                        />
								</div>
								<div className="row align-items-center remember">
									<input type="checkbox" />Remember Me
								</div>
								<div className="form-group">
								{/* <input type="submit" value="Login" className="btn float-right login_btn" /> */}
								<input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn float-right login_btn"
                            value="Login"
                            onClick={submitAppUser}
                        />
								</div>
							</form>
						</div>
						<div className="card-footer">
							<div className="d-flex justify-content-center links">
								Don't have an account?<Link to="/register">Sign Up</Link>
							</div>
						</div>
                        <div className="card-footer">
							<div className="d-flex justify-content-center links">
								Are you an admin?<Link to="/AdminLogin">Login Here</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login