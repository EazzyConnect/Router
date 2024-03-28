import React from 'react';
import routerCSS from './Router.module.css';
import {Link, NavLink} from 'react-router-dom'


const Router = () => {
  return (
    <>
    <div id={routerCSS.navBar}>
        <h2 id={routerCSS.logo}>Logo</h2>
        <div id={routerCSS.navBtns}>
            <Link to={"/"} style={{textDecoration: "none"}}>
                <div className={routerCSS.navBar2}>Home</div>
            </Link>
            <Link to={"/about"} style={{textDecoration: "none"}}>
                <div className={routerCSS.navBar2}>About</div>           
            </Link>
            <Link to={"/contact"} style={{textDecoration: "none"}}>           
                <div className={routerCSS.navBar2}>Contact</div>
            </Link>
        </div>
    </div>
      
    </>
  )
}

export default Router
