import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
        <footer class="footer-distributed">
 
        <div class="footer-left">
        
        <h3>Edu<span>Care</span></h3>

        
        <p class="footer-company-name">joy &copy; 2021</p>
        </div>
        
        <div class="footer-center">
        
        <div>
        <i class="fa fa-map-marker"></i>
        <p><span>Aftabnager</span>Badda,Dhaka</p>
        </div>
        
        <div>
        <i class="fa fa-phone"></i>
        <p>+880 000 00000000</p>
        </div>
        
        <div>
        <i class="fa fa-envelope"></i>
        <p><a href="mailto:support@company.com">contact@educare.com</a></p>
        </div>
        
        </div>
        
        <div class="footer-right">
        
        <p class="footer-company-about">
        <span>About the company</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur iste quos dolores odio consectetur voluptatum accusamus tenetur laboriosam vel placeat.
        </p>
        
        <div class="footer-icons">
        
        </div>
        
        </div>
        
        </footer>
        </div>
    );
};

export default Footer;