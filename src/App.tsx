import Logo from './assets/scp.png';
import Silo from './assets/silo.jpg'
import './App.css';
import Font from "react-font";
import {IconCrane, IconRippleOff, IconShovel, IconShieldCheck} from '@tabler/icons-react'
import Avetta from './assets/avetta.png';
import Cattlemens from './assets/cattlemens.png';
import isn from './assets/isn.png';
import nts from './assets/nts.png';
import osha from './assets/osha.png';
import sala from './assets/sala.png';

function App() {
    return (
        <div className="main">
            <div className="banner">
                <img className="logo" src={Logo} alt="Silo Clean Pro Logo"/>
            </div>
            <div className="video-container">
                <video className="video" autoPlay muted loop playsInline>
                    <source src="/silos.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
            <Font family="Noto Sans">
                <div className="page-contents">
                    <div className="intro-heading">
                        Nationwide Silo Cleaning Services
                    </div>
                    <div className="intro-box">
                        <div className="card-container">
                            <div className="card">
                                <IconRippleOff size={40} color="#2978bd"/>
                                <br/>
                                We use advanced dry cleaning techniques to ensure silos are cleaned
                                efficiently without water or chemicals.
                            </div>
                            <div className="card">
                                <IconShovel size={40} color="#2978bd"/>
                                <br/>
                                Our team specializes in removing stubborn hang-ups and unwanted
                                materials to restore silo functionality.
                            </div>
                            <div className="card">
                                <IconCrane size={40} color="#2978bd"/>
                                <br/>
                                While prioritizing non-entry methods, we perform silo entry with full
                                safety compliance when needed.
                            </div>
                            <div className="card">
                                <IconShieldCheck size={40} color="#2978bd"/>
                                <br/>
                                Our professionals are trained to use top-tier safety equipment,
                                adhering to confined space permits and regulations.
                            </div>
                        </div>
                        <div className="quote-button-container">
                            <button className="quote-button">Get a Quote</button>
                        </div>
                    </div>
                    <div className="welcome-section">
                        <div className="welcome-section-sub">
                            <h2 className="welcome-heading">Welcome to Silo Clean Pro</h2>
                            <p className="welcome-text">
                                We are an OSHA-approved silo cleaning and silo inspection company, specializing in the
                                cleaning of plastic and mold injection company silos. At GreeneServices, we serve
                                clients nationwide in a wide range of industries, from farming to coal silos and more.
                            </p>
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
                        <img className="welcome-img" src={Silo} alt="Silo Cleaning"/>
                    </div>
                    <div className="video-container2">
                        <video className="video2" autoPlay muted loop playsInline>
                            <source src="/silos2.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="about-section">
                        <h2 className="about-heading">About Our Silo Cleaning Company</h2>
                        <p className="about-text">
                            We are a licensed and insured silo cleaning company and provide a wide range of services,
                            including soda blasting, dry ice blasting, sanitizing, hang-up removal, and more. Our
                            trained technicians physically enter the bin to ensure the highest quality service. Call us
                            today to request a quote!
                        </p>
                        <div className="about-button-container">
                            <button className="about-button">Request a Quote</button>
                        </div>
                    </div>

                </div>
            </Font>
        </div>
    );
}

export default App;
