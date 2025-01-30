import Silo from '/silo.jpg'
import './App.css';
import {
    IconCrane,
    IconRippleOff,
    IconShovel,
    IconShieldCheck,
    IconCertificate,
    IconAlarm,
    IconMap, IconUserCheck,
    IconThumbUp, IconPackage
} from '@tabler/icons-react'
import Avetta from '/avetta.png';
import Cattlemens from '/cattlemens.png';
import isn from '/isn.png';
import nts from '/nts.png';
import osha from '/osha.png';
import sala from '/sala.png';
import Footer from "./Footer.tsx";
import whychooseus from '/insidesilo.png'

function App() {

    return (
        <div className="main">
            <div className="video-container">
                <video className="video"
                       autoPlay
                       muted
                       loop
                       poster="/silos.png"

                       preload="metadata"
                       playsInline
                >
                    <source src="/silos_720.webm" type="video/webm"/>
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="page-contents">
                <div className="intro-heading">
                    Nationwide Silo Cleaning and Inspection Services
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
                <div className="welcome-section-super">
                    <div className="welcome-section">
                        <div className="welcome-section-sub">
                            <h2 className="welcome-heading">Welcome to Silo Clean Pro</h2>
                            <p className="welcome-text">
                                We are an OSHA-approved silo cleaning and silo inspection company, specializing in
                                the
                                cleaning of plastic and mold injection company silos. At GreeneServices, we serve
                                clients nationwide in a wide range of industries, from farming to coal silos and
                                more.
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
                </div>
                <div className="video-container2">
                    <video className="video2"
                           autoPlay
                           muted
                           style={{transform: 'translate(-60%, -30%)'}}
                           loop
                           poster="/silos2.png"
                           playsInline
                           preload="metadata"
                    >
                        <source src="/silos2_1080.webm" type="video/webm"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="about-section">
                    <h2 className="about-heading">About Silo Clean Pro</h2>
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
                <div className="welcome-section-super">
                    <div className="welcome-section">
                        <img className="welcome-img" src={whychooseus} style={{marginRight: 'unset', marginLeft: '5vw', marginTop: '5vw'}} alt="Why Choose Us?"/>
                        <div className="welcome-section-sub" style={{display: 'flex', flex: 'unset', flexDirection: 'column',
                        alignItems: 'center'}}>
                            <h3 className="welcome-heading">Why Choose Silo Clean Pro?</h3>
                            <ul className="features-list">
                                <li className="feature-item">
                                    <div className="icon-container">
                                        <IconMap size={40} color="#2978bd"/>
                                    </div>
                                    <div>
                                        <strong>Nationwide Service:</strong> We provide expert silo services across the
                                        country, ensuring help is always within reach.
                                    </div>
                                </li>
                                <li className="feature-item">
                                    <div className="icon-container">
                                        <IconAlarm size={40} color="#2978bd"/>
                                    </div>
                                    <div>
                                        <strong>Emergency Response:</strong> Our team is ready to act quickly when
                                        urgent silo cleaning or maintenance is required.
                                    </div>
                                </li>
                                <li className="feature-item">
                                    <div className="icon-container">
                                        <IconCertificate size={40} color="#2978bd"/>
                                    </div>
                                    <div>
                                        <strong>OSHA-Approved:</strong> We strictly adhere to Occupational Safety and
                                        Health Administration standards for safe and compliant operations.
                                    </div>
                                </li>
                                <li className="feature-item">
                                    <div className="icon-container">
                                        <IconShieldCheck size={40} color="#2978bd"/>
                                    </div>
                                    <div>
                                        <strong>Licensed & Insured:</strong> Our services are fully licensed and
                                        insured, giving you peace of mind during every project.
                                    </div>
                                </li>
                                <li className="feature-item">
                                    <div className="icon-container">
                                        <IconUserCheck size={40} color="#2978bd"/>
                                    </div>
                                    <div>
                                        <strong>Confined Space Trained & Certified Technicians:</strong> Our technicians
                                        are highly trained and certified to handle confined space environments safely
                                        and efficiently.
                                    </div>
                                </li>
                                <li className="feature-item">
                                    <div className="icon-container">
                                        <IconPackage size={40} color="#2978bd"/>
                                    </div>
                                    <div>
                                        <strong>Dependable Services:</strong> Count on us for reliable and consistent
                                        service tailored to your silo maintenance needs.
                                    </div>
                                </li>
                                <li className="feature-item">
                                    <div className="icon-container">
                                        <IconThumbUp size={40} color="#2978bd"/>
                                    </div>
                                    <div>
                                        <strong>Exceptional Customer Service:</strong> We prioritize your satisfaction
                                        with responsive and personalized service every step of the way.
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
