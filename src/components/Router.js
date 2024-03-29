import React from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "components/Navigation";
import Profile from "routes/Profile";
import { HashRouter } from "react-router-dom";

export default function Router({isLoggedIn, userObj, refreshUser}) {
   
    return(
        <HashRouter base = "/">
        {/* navigator 표시여부 지정 */}
        {isLoggedIn && <Navigation userObj = {userObj}/>}
            <Switch>
                {isLoggedIn ? 
                <>
                <div style={{
                        maxWidth: 890,
                        width: "100%",
                        margin: "0 auto",
                        marginTop: 80,
                        display: "flex",
                        justifyContent: "center",
                        }}>
                    <Route exact path = "/">
                        <Home userObj = {userObj}/>
                    </Route> 
                    <Route exact path = "/profile">
                        <Profile userObj = {userObj} refreshUser = {refreshUser}/>
                    </Route> 
                </div>
                </>
                
                : 
                <>
                <Route exact path = "/">
                    <Auth />
                </Route>
                </>

                }
            </Switch>
        </HashRouter>
    )
}