import './App.css';
import {IconBuildingWarehouse, IconSnowflake, IconTools, IconLeaf} from '@tabler/icons-react'
import Avetta from '/avetta.png';
import Cattlemens from '/cattlemens.png';
import isn from '/isn.png';
import nts from '/nts.png';
import osha from '/osha.png';
import sala from '/sala.png';
import {useEffect, useRef} from "react";
import Footer from "./Footer.tsx";

function GreeneServices() {

    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5; // Adjust the speed
        }
    }, []);

    return (
        <div className="main">
            <div className="video-container" style={{height: '100%'}}>
                <video
                    ref={videoRef}
                    className="video"
                    autoPlay
                    muted
                    loop
                    preload="metadata"
                    poster="/dryice.png"
                    playsInline
                    style={{filter: 'brightness(0.4)', top: '50%', left: '50%', transform: 'translate(-50%, -70%)'}}
                >
                    <source src="/dryice_720.webm" type="video/webm"/>
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="page-contents">
                <div className="intro-heading" style={{color: '#e2e3ef'}}>
                    Comprehensive Industrial Cleaning Solutions
                </div>
                <div className="intro-box">
                    <div className="card-container">
                        <div className="card">
                            <IconSnowflake size={40} color="#2978bd"/>
                            <br/>
                            Dry ice blasting for safe and effective machinery and surface cleaning.
                        </div>
                        <div className="card">
                            <IconTools size={40} color="#2978bd"/>
                            <br/>
                            Specialized media blasting techniques for surface preparation.
                        </div>
                        <div className="card">
                            <IconBuildingWarehouse size={40} color="#2978bd"/>
                            <br/>
                            Complete silo cleaning and inspection services for maximum efficiency.
                        </div>
                        <div className="card">
                            <IconLeaf size={40} color="#2978bd"/>
                            <br/>
                            Sanitizing and environmentally friendly solutions for industrial needs.
                        </div>
                    </div>
                    <div className="quote-button-container">
                        <button className="quote-button">Get a Quote</button>
                    </div>
                </div>
                <div className="welcome-section-super">
                    <div className="welcome-section">
                        <div className="welcome-section-sub">
                            <h2 className="welcome-heading">Welcome to Greene Services</h2>
                            <p className="welcome-text">
                                Greene Services Inc. provides top-tier industrial cleaning and maintenance solutions
                                nationwide.
                                From dry ice blasting to silo cleaning, we specialize in safe, effective, and
                                environmentally
                                friendly services tailored to your industry needs. Let us help you maintain optimal
                                performance
                                while meeting your safety and environmental standards.
                            </p>
                        </div>
                        <div className="welcome-video-container">
                            <video
                                className="welcome-video"
                                autoPlay
                                poster="/blast-cleaning.png"
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                controls={false} /* Optional: Disable controls for a clean look */
                            >
                                <source src="/blast-cleaning_1080.webm" type="video/webm"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className="certifications">
                        <div className="certification-icons">
                            <img src={Avetta} alt="Avetta"/>
                        </div>
                        <div className="certification-icons">
                            <img src={Cattlemens} alt="Cattlemens"/>
                        </div>
                        <div className="certification-icons">
                            <img src={isn} alt="isn"/>
                        </div>
                        <div className="certification-icons">
                            <img src={nts} alt="nts"/>
                        </div>
                        <div className="certification-icons">
                            <img src={osha} alt="osha"/>
                        </div>
                        <div className="certification-icons">
                            <img src={sala} alt="sala"/>
                        </div>
                    </div>
                </div>
                <div className="video-container2" style={{bottom: '-20%'}}>
                    <video className="video2"
                           autoPlay
                           muted
                           loop
                           playsInline
                           poster="/silos2.png"
                    >
                        <source src="/silos2_1080.webm" type="video/webm"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="about-section">
                    <h2 className="about-heading">About Greene Services</h2>
                    <p className="about-text">
                        At Greene Services, we offer a wide range of cleaning solutions, from specialized dry ice
                        blasting
                        to detailed silo cleaning and inspection services. Our licensed and insured team ensures
                        safety,
                        quality, and efficiency with every project, making us a trusted partner across industries.
                        Contact us today for a tailored cleaning solution to fit your needs.
                    </p>
                    <div className="about-button-container">
                        <button className="about-button">Request a Quote</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default GreeneServices;
