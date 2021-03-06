import React, { Component } from "react"
import { NavLink } from 'react-router-dom'

class Nav extends Component{
  render(){
    return(
      <div style={{height: "45px", width: "100%", backgroundColor: "rgb(222,222,222)", boxShadow: "0px 0px 7px 1px #CCCCCC"}}>
        <div style={{margin: "0 auto", maxWidth: "800px", width: "100%", height: "45px"}}>
          <div style={{fontSize: "14px", float: "left", display: "inline-block", width: "170px", height: "39px"}}>
            <div style={{position: "relative", borderLeft: "1px solid rgb(202,202,202)", borderRight: "1px solid rgb(202,202,202)", marginTop: "2px", display: "inline-block", width: "49%", height: "39px"}}>
              <div style={{position: "absolute", paddingTop: "13px", textAlign: "center", width:"100%"}}>
                <NavLink style={{textDecoration: "none", color: "black"}} to="/worker/progress" activeStyle={{color: "#00BCD4", textDecoration: "none"}}>PROGRESS</NavLink>
              </div>
            </div>
            <div style={{position: "relative", borderRight: "1px solid rgb(202,202,202)", marginTop: "2px", display: "inline-block", width: "49%", height: "39px"}}>
              <div style={{position: "absolute", paddingTop: "13px", textAlign: "center", width:"100%"}}>
                <NavLink style={{textDecoration: "none", color: "black"}} to="/worker/jobs" activeStyle={{color: "#00BCD4", textDecoration: "none"}}>JOBS</NavLink>
              </div>
            </div>
          </div>
          <div style={{fontSize: "14px", float: "right", display: "inline-block", width: "120px", height: "39px"}}>
            <NavLink style={{marginRight: "3px", borderRadius: "50%", overflow: "hidden", border: "1px solid", position: "relative", marginTop: "2px", display: "inline-block", width: "39px", height: "39px", textDecoration: "none", color: "black"}} to="/worker/myprofile" activeStyle={{borderColor: "#00BCD4", textDecoration: "none"}}>
                  <img src={require("../profile.png")} height="39px" width="39px"/>
            </NavLink>
            <div style={{position: "relative", borderLeft: "1px solid rgb(202,202,202)", borderRight: "1px solid rgb(202,202,202)", marginTop: "2px", display: "inline-block", width: "60%", height: "39px"}}>
              <div style={{position: "absolute", paddingTop: "13px", textAlign: "center", width:"100%"}}>
                <NavLink style={{textDecoration: "none", color: "black"}} to="/worker/logout" activeStyle={{color: "#00BCD4", textDecoration: "none"}}>LOGOUT</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav