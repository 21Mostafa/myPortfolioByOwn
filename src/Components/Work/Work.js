import React from 'react';
import "./work.css"
import Experience from './../Experience/Experience/Experience';
import SecondExperience from '../Experience/SecondExperience/SecondExperience';
import ThirdExperience from './../Experience/ThirdExperience/ThirdExperience';
import Ending from './../Ending/Ending/Ending';
import MyPicture from "./MyPicture.jpeg"
import Footer from '../Ending/Footer/Footer';
const Work = () => {
     
    return (
        <section >
            <div className="container full-color">
            <div className="wantimg  ">
                <div className="row ">

                    <div className=" col-md-7 left p-5 ">
                        <br /><br /><br /><br />
                        <h1 className="hello">Frontend  <br /> Developer.</h1> <br />
                        <p className="mb-5">I like to craft solid and scalable frontend products  <br /> with great user experiences.</p>

                        
                        <div className="mt-5 " style={{ display: 'flex' }}>
                            <small className="m-2">Highly skilled at progressive <br /> enhancement, design systems & <br /> UI Engineering.</small>
                            <br />
                            <small className=" m-2 " > Over a years of experience <br />  building products for clients <br /> across several countries.</small><br />
                        </div><br /> <br />
                    </div>




                    <div class="text-center col-md-3  right  p-5 ">
                        <img src={MyPicture} class="rounded smalls mt-5" alt="..." />
                    </div>
                    <div className="col-md-2 right  ">
                    </div>
                    
                </div>
               
            </div>
          
            <Experience></Experience> 
            <SecondExperience></SecondExperience>
            <ThirdExperience></ThirdExperience>
            <Ending></Ending>
            
            </div>
            <Footer></Footer>
        </section>
    );
};

export default Work;