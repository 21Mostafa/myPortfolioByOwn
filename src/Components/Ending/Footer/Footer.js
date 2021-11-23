import React from 'react';
import "./Footer.css"
 
const Footer = () => {
    const current = new Date();
    const date = ` ${current.getFullYear()}`;
  
  

    return (
        
        <div className="img">
            <div className=" App   p-5"><br /><br />
                <h1 className="hello">Wellcomes</h1>
                <h4>Your success will begin with a fully functional website  </h4>
                <p>As a  Expert, I build your website with all the features you need. I make sure that your website performs well on all devices.

                    If you are not familiar with Web then,  I will be recorded a screencast at the end of the project so you can watch and learn how to use your website.</p>
                    <p>My Email Address: <br /> <small style={{color:"goldenrod"}}>pagolmama72@gmail.com</small></p>
                    
            </div>
            
            <div  className=" row m-3 p-5">
                <h5  style={{color:"green"}} className="App">I have experience in all of these cases</h5>
                <br /> <br />
                <div className="col-md-3">
                    <ul>
                        <li>Web Development</li>
                        <li> JavaScript </li>
                        <li>react js </li>
                        <li>react native</li>

                    </ul>
                </div>
                <div className="col-md-3">
                    <ul>
                        <li>PSD to Html</li>
                        <li>SEO Audit</li>
                        <li>Bug Fixing</li>
                        <li>Maintenance</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul>
                        <li>Ongoing Support</li>
                        <li>Mobile Optimization</li>
                        <li>AngularJS</li>
                        <li>Figma to Html</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul>
                        <li>mongoDB</li>
                        <li>expressJS</li>
                        <li>Cors</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
            </div>
           <div className="container App">
           <small> <i class="far fa-copyright"></i> all rights reserved {date}  </small>  <br />
           
           </div>
            <br /><br />
        </div>
    );
};

export default Footer;