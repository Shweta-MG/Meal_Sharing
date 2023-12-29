import React from 'react';
import './Footer.module.css';
import logo from './logo.png';

const Footer = () => {
    return ( 
        <div className='Footer_Container'>

            <div className='Footer_Body'>
                <div className='Footer_Logo'>
                <img src={logo} alt="Logo" />
                </div>
                
                <div className='Footer_Text'>

                    <h1>Blanquette</h1>
                    <p> A delicious WP theme especially designed for true
                        culinary experts, restaurants, master chefs and all with
                        a passion for cooking.
                    </p>
                </div>

                <div className='Footer_Social_Media'>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Insagram</li>
                    </ul>
                </div>
            </div>

            <div className='Footer_Second_para'>
                <div>©2022 Qode Interactive</div>
                <div>All rights reserved</div>
            </div>
        </div>
     );
}
 
export default Footer;