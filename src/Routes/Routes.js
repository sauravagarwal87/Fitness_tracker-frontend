import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home'
import React from 'react'
import Login from '../components/Login'

import AdminLogin from '../components/AdminLogin'
import AdminRegister from '../components/AdminRegister'
import AdminAllDetails from '../components/AdminAllDetails'
import AdminDashboard from '../components/AdminDashboard'

import AddDailyActivity from '../components/AddDailyActivity'
import UpdateWeeklyActivity from '../components/UpdateWeeklyActivity';
import UpdateDailyActivity from '../components/UpdateDailyActivity'
import ViewDailyActivity from '../components/ViewDailyActivity'
import ViewAllActivities from '../components/ViewAllActivities'
import ViewWeeklyActivityByCategory from '../components/ViewWeeklyActivityByCategory'
import UpdateDailyDiet from '../components/UpdateDailyDiet'


import ViewAllUsers from '../components/ViewAllUsers'
import ViewScheduleDiet from '../components/ViewScheduledDiet'
import AddScheduleDiet from '../components/AddScheduledDiet'
import UserDashboard from '../components/UserDashboard'
import Footer from '../components/Footer'
import DietDashboard from '../components/DietDashboard'
import ActivityDashboard from '../components/ActivityDashboard'
import Userregister from '../components/RegisterUser'
import AddScheduleActivity from '../components/AddScheduledActivity'
import ViewScheduledActivity from '../components/ViewAllScheduledActivity'

import AddDailyDiet from '../components/AddDailyDiet'
import ViewDailyDiet from '../components/ViewDailyDiet'
import ViewAllDiets from '../components/ViewAllDiets'
import ViewWeeklyDietByCategory from '../components/ViewWeeklyDietByCategory'
import UpdateWeeklyDiet from '../components/UpdateWeeklyDiet';
import UpdateRegister from '../components/UpdateUser';

import { useState, useEffect } from 'react';
import UpdateUser from '../components/UpdateUser';


const Routes = () => {
    let [user, setUser] = useState({});

    useEffect(() => {
        setUser(localStorage.getItem('loggedInUser'));
        console.log(localStorage.getItem('loggedInUser'));
    }, []);

    return (
        <div >
            <Router>
                <div>
                    <div>
                        <Switch>
                            <Route exact path="/"><Home /> </Route>
                            {/* <Route path="/home" ><Home/> </Route> */}
                            <Route path="/login" ><Login/> </Route>
                            <Route path="/register"><Userregister/>  </Route>
                            <Route path="/UserDashBoard"><UserDashboard/> </Route>
                            
                            <Route path="/AdminLogin"><AdminLogin/> </Route>
                            <Route path="/userDashboard"><UserDashboard/> </Route>
                            <Route path="/activityDashboard"><ActivityDashboard/> </Route>
                            <Route path="/dietDashboard"><DietDashboard/> </Route>
                            <Route path="/viewScheduledDiet"><ViewScheduleDiet/></Route>
                            <Route path="/addScheduledDiet"><AddScheduleDiet/></Route>
                            <Route path="/login" ><Login /> </Route>
                            <Route path="/register"><Userregister />  </Route>
                            <Route path="/UserDashBoard"><UserDashboard /> </Route>
                            <Route path="/UpdateUser"><UpdateUser /> </Route>

                            <Route path="/AdminLogin"><AdminLogin /> </Route>
                            <Route path="/userDashboard"><UserDashboard /> </Route>
                            <Route path="/activityDashboard"><ActivityDashboard /> </Route>
                            <Route path="/dietDashboard"><DietDashboard /> </Route>

                            <Route path="/add-Daily-Activity"><AddDailyActivity /> </Route>
                            <Route path="/update-Daily-Activity"><UpdateDailyActivity /> </Route>
                            <Route path="/view-All-Daily-Activity"><ViewAllActivities /> </Route>
                            <Route path="/view-Daily-Activity"><ViewDailyActivity /> </Route>
                            <Route path="/add-Weekly-Activity"><UpdateWeeklyActivity /> </Route>
                            <Route path="/view-Weekly-Activity"><ViewWeeklyActivityByCategory /> </Route>
                            <Route path="/schedule-Activity"><AddScheduleActivity /> </Route>
                            <Route path="/view-Scheduled-Activity"><ViewScheduledActivity /> </Route>
                            <Route path="/adminDashboard"><AdminDashboard /> </Route>

                            <Route path="/AdminAllDetails"><AdminAllDetails /> </Route>
                            <Route path="/ViewAllUsers">< ViewAllUsers/> </Route>
                            <Route path="/AdminRegister">< AdminRegister/> </Route>
                            

                            {/* <Route path="/emp"> <EmpData /> </Route>
                            <Route path="/register"> <Redirect to="/" /> </Route>
                            <Route path="/login"> <Redirect to="/" /> </Route>
                            <Route path="/logout"> <Logout /> </Route>
                            <Route path="/*"> <Page404 /> </Route> */}
                           

                            <Route path="/add-Daily-Diet"><AddDailyDiet /> </Route>
                            <Route path="/update-Daily-Diet"><UpdateDailyDiet /> </Route>
                            <Route path="/view-All-Diet"><ViewAllDiets /> </Route>
                            <Route path="/view-Daily-Diet"><ViewDailyDiet /> </Route>
                            <Route path="/add-Weekly-Diet"><UpdateWeeklyDiet /> </Route>
                            <Route path="/view-Weekly-Diet"><ViewWeeklyDietByCategory /> </Route>
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        </div >
    );
}


export default Routes;