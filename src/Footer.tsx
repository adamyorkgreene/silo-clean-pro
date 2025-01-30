import React from 'react';
import './app.css'; // Ensure this file is correctly imported.

const Footer = React.memo(() => {
    return (
        <footer className="footer">
            <nav className="footer-nav">
                <a href="/public" className="footer-link">Home</a>
                <span className="footer-separator">|</span>
                <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
                <span className="footer-separator">|</span>
                <a href="/contact-us" className="footer-link">Contact Us</a>
                <span className="footer-separator">|</span>
                <a href="/get-a-quote" className="footer-link">Get a Quote</a>
            </nav>
            <p className="footer-copyright">&copy; 2024 GreeneServices, Inc.</p>
        </footer>
    );
});

export default Footer;
