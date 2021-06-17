import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

import { NavLink } from 'react-router-dom'


const Footer = () => {
    return (
        <>
            <footer>
                <div className="container bg-light mt-5 text-center">
                    <div className="row">
                        <div className="col-lg-6 col-sm-10 bg-white text-start">
                            <strong className="text-primary"><h4>Brand-Name</h4></strong><br />
                            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                            <div className="social-link">
                                <NavLink to="#"><i><InstagramIcon /></i></NavLink>
                                <NavLink to="#"><i><GitHubIcon /></i></NavLink>
                                <NavLink to="#"><i><LinkedInIcon /></i></NavLink>
                                <NavLink to="#"><i><TwitterIcon /></i></NavLink>
                                <NavLink to="#"><i><FacebookIcon /></i></NavLink>
                            </div>
                        </div>

                        <div className="col-lg-2 col-sm-10 bg-white">
                            <h5 className="text-primary">UseFul Links</h5>
                            <div className="footer-link">
                                <ul>
                                    <li>Home</li>
                                    <li>About Us</li>
                                    <li>Services</li>
                                    <li>Terms of service</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-10 bg-white">
                            <h5 className="text-primary">Our Services</h5>
                            <div className="footer-link">
                                <ul>
                                    <li>Web Design</li>
                                    <li>Web Development</li>
                                    <li>Product-Management</li>
                                    <li>Marketing</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-10 bg-white">
                            <h5 className="text-primary">Contact Us</h5>
                            <div className="footer-link">
                                <p>A108 Adam Street<br />
                                    New York, NY 535022<br />
                                    United States</p>
                                <p><strong>Phone:</strong> +1 5589 55488 55 <br />
                                    <strong>Email:</strong> info@example.com</p>
                            </div>
                        </div>


                        <div className="text-center mt-2">
                            <p> &copy; 2021  <strong className="text-primary">Brand-Name.</strong> All Rights Reserved<br />
                                Designed by <strong className="text-primary">Karti-7</strong></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
