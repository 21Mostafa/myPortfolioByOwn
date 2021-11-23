import React from 'react';
import FormOnSubmit from './../FormOnSubmit/FormOnSubmit';
 

const SecondPage = () => {
    return (
        <div className="App  m-5">
            
            <h5>Hello! My name is <strong> Mostafa Kamal. </strong></h5>
            <p className="text-secondary">I work as Web Developer  and spend my free time playing games.</p>
            <p className="text-secondary">My Website is currently market-oriented. I always try to stay Updated. I am a team member of the web developers forums, a group of volunteers that organizes five exhibitions annually in our forums. I have more than one year or two years of experiences in this field. <br />
            
           If you want any <b> suggestions/information </b> from me, then you can message me.</p>
            
            <FormOnSubmit></FormOnSubmit>
        </div>
    );
};

export default SecondPage;