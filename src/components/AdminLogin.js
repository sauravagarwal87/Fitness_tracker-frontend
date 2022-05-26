import React from 'react'
import image from './logo.png' 
import { useState } from 'react';
import Admin from '../models/Admin'
import{loginService} from '../services/AdminService'
import { Link, useHistory } from 'react-router-dom';


	const AdminLogin = () => {

		const [userName, setuserName] =useState('');
		const [password, setPassword] =useState('');
		const [credentials, setCredentials] = useState('');
		const history = useHistory();
	
		const handleAdmin = (event) => {
			console.log(event.target.name);
			console.log(event.target.value);
			setuserName(event.target.value);
		};

		const handleAdmin1 = (event) => {
			console.log(event.target.name);
			console.log(event.target.value);
			setPassword(event.target.value);
		};
	
		const submitAdmin = (event) => {
			loginService(userName,password)
				.then((response) => {
					localStorage.setItem('loggedInAdmin', response.data);
					console.log(localStorage.getItem('loggedInAdmin'));
					alert('Success');
					history.push('/adminDashboard');
					// window.location.assign('/home');
					// window.location.reload();
				}).catch((error) => {
					localStorage.removeItem('loggedInAdmin');
					localStorage.clear();
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
							<h3>Admin Sign In</h3>
							
						</div>
						<div className="card-body">
							<form>
								<div className="input-group form-group">
									<div className="input-group-prepend">
										<span className="input-group-text"><i className="fas fa-user"></i></span>
									</div>
									<input
                            type="text"
                            id="userName"
							value={userName}
                            className="form-control"
                            placeholder="Enter username"
                            onChange={handleAdmin}
                            autoFocus
                            required
                        />

								</div>
								<div className="input-group form-group">
									<div className="input-group-prepend">
										<span className="input-group-text"><i className="fas fa-key"></i></span>
									</div>
									<input
                            type="password"
							value={password}
                            id="password"
                            className="form-control"
                            placeholder="Enter password"
                            onChange={handleAdmin1}
                            required
                        />
								</div>
								<div className="row align-items-center remember">
									<input type="checkbox" />Remember Me
								</div>
								<div className="form-group">
								<input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn float-right login_btn"
                            value="Login"
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

export default AdminLogin