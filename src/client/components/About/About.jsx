import React from 'react';
import './About.module.css';
import chickerCurry from './chickerCurry.png';

const About = () => {
    return (
    <div className="About_container">

        <div className="About_Description">
            <h1>CHEFS SECRETS </h1>
            <h4>TRULY EXOTIC AND APPETIZING CUISINE FOR THOSE SPECIAL MOMENTS IN LIFE</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In cursus turpis massa tincidu dui ut ornare. Sodales neque sodales ut etiam.
            </p>
        </div>
            
        <div className="About_image">
            <img src={chickerCurry} alt="chickerCurry" />
        </div>
       
    </div>  );
}
 
export default About;