import React from "react";
import AdminHeader from "./NavBar/AdminHeader";
import UserHeader from "./NavBar/UserHeader";
import Header from "./NavBar/Header";
import HomeHeaderLinks from "./NavBar/HomeHeaderLinks.js";
import AdminLinks from "./NavBar/AdminLinks.js";
import UserLinks from './NavBar/UserLinks.js';
import AdminLeftLinks from './NavBar/AdminLeftLinks.js';
import UserLeftLinks from './NavBar/UserLeftLinks.js';
import Home from "../Home/Home";
import Footer from "./Footer/Footer";
import Admin from '../Admin/Admin';
import User from "../User/User";
import Signin from "../Home/SigninPage";
import Signup from "../Home/SignupPage";
import { Switch, Route, Redirect } from 'react-router-dom';
import GetCardInfo from "../Admin/GetCardInfo";

const Layout = props =>{
    const { user, setUser, isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin, ...rest } = props;
    
    const LoginDisplay = ({isAdmin}) => 
        !!isAdmin === true ?
            <AdminHeader 
                leftLinks={<AdminLeftLinks />
                }
                rightLinks={<AdminLinks user={user} setUser={setUser} setIsLoggedIn={setIsLoggedIn} isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>}
                color="dark"
                {...rest}
                isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUser={setUser} user={user} isAdmin={isAdmin} setIsAdmin={setIsAdmin}
            />
            :
            <UserHeader
                leftLinks={<UserLeftLinks />
                }
                rightLinks={<UserLinks user={user} setUser={setUser} setIsLoggedIn={setIsLoggedIn} isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>}
                color="dark"
                {...rest}
                isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUser={setUser} user={user} isAdmin={isAdmin} setIsAdmin={setIsAdmin}
            />

    return (
      <>
        <div>
          <div className="removePrint">
            {!!isLoggedIn ? (
              <LoginDisplay
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setUser={setUser}
                user={user}
                isAdmin={isAdmin}
                setIsAdmin={setIsAdmin}
              />
            ) : (
              <Header
                brand="What Remains COVID Form"
                fixed
                color="secondary"
                
                {...rest}
              />
            )}
          </div>
          <Switch>
            <Route exact path="/">
              <Signin
                user={user}
                setUser={setUser}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                isAdmin={isAdmin}
                setIsAdmin={setIsAdmin}
              />
            </Route>
            {/* <Route path="/home">
              <Home />
            </Route> */}
            {/* <Route path="/signin"></Route> */}
            <Route path="/signup">
              <Signup
                user={user}
                setUser={setUser}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                isAdmin={isAdmin}
                setIsAdmin={setIsAdmin}
              />
            </Route>
            <Route path="/admin">
              {isLoggedIn ? (
                <Admin
                  user={user}
                  setUser={setUser}
                  isAdmin={isAdmin}
                  setIsAdmin={setIsAdmin}
                />
              ) : (
                <Redirect to="/" />
              )}
            </Route>
            <Route path="/user">
              {isLoggedIn ? (
                <User
                  user={user}
                  setUser={setUser}
                  isAdmin={isAdmin}
                  setIsAdmin={setIsAdmin}
                />
              ) : (
                <Redirect to="/" />
              )}
            </Route>
            <Route path="/getCardInfo/:id">
              <GetCardInfo />
            </Route>
          </Switch>
        </div>
        <Footer />
      </>
    );
}

export default Layout;
