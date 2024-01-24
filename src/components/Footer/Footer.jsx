import React from "react";
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'
import './footer.css';
const Footer = ()=>{
    return(
        <div className="footer-Container">
<hr />
<div className="footer">
    <div className="social-links">
    <img src={Github} alt="" />
    <img src={LinkedIn} alt="" />
    <img src={Instagram} alt="" />
    </div>
<div className="logo">
    <img src={Logo} alt="" />
</div>
 </div>
 <div className="blur blur-f-1"></div>
 <div className="blur blur-f-2"></div>
</div>
    );
}
export default Footer;