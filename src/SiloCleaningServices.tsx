import Silo from '/stock_silos.jpg'
import './App.css';
import Footer from "./Footer.tsx";
import { IconCircleCheck } from '@tabler/icons-react';

function SiloCleaning() {

    return (
        <div className="main">
            <div className="video-container-header">
                <video className="video-header"
                       autoPlay
                       muted
                       loop
                       poster="/silos2.png"
                       playsInline
                       preload="metadata"
                >
                    <source src="/silos2_1080.webm" type="video/webm"/>
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="video-header-text">
                <h1>
                    Silo Cleaning Services
                </h1>
            </div>
            <div className="page-contents" style={{paddingTop: 'unset'}}>
                <div className="welcome-section-super" style={{marginTop: '40px', boxShadow: 'none'}}>
                    <div className="welcome-section">
                        <div className="welcome-section-sub"
                             style={{padding: 'unset', paddingLeft: '5vw', paddingRight: '5vw'}}>
                            <h2 className="welcome-heading" style={{fontSize: '2.3rem'}}>Professional Silo Cleaning
                                Services You Can Trust</h2>
                            <p className="welcome-text">
                                Silo cleaning is vital to ensuring that your silos are working correctly.
                                A build-up of debris can cause clogs and corrosion, interrupting the flow of whatever
                                product you are holding in your silo. We are a dependable, certified, and highly-trained
                                silo cleaning company serving clients nationwide. Contact us today to request a quote!
                            </p>
                            <div className="about-button-container" style={{
                                display: 'flex', alignItems: 'center',
                                justifyContent: 'center', marginTop: '5vh'
                            }}>
                                <button className="about-button-2">Request a Quote</button>
                            </div>
                        </div>
                        <img className="welcome-img" style={{width: '25vw', padding: 'unset',}} src={Silo}
                             alt="Silo Cleaning"/>
                    </div>
                </div>
                <div className="welcome-section-super" style={{width: '90vw', margin: '5vw', background: 'linear-gradient(135deg, #e7ebf0, #fff)',
                marginTop: 'unset'}}>
                    <h3 className="welcome-heading">Our Silo Cleaning Services</h3>
                    <div className="benefits-grid">
                        <div className="benefit-item">
                            <IconCircleCheck size={24} color="#8fd66f"/>
                            <div>
                                <h3 className="benefit-title">Hang-up Removal</h3>
                                <p className="benefit-description">Efficient removal of material blockages to restore
                                    silo
                                    flow.</p>
                            </div>
                        </div>
                        <div className="benefit-item">
                            <IconCircleCheck size={24} color="#8fd66f"/>
                            <div>
                                <h3 className="benefit-title">Mold Removal</h3>
                                <p className="benefit-description">Thorough cleaning to eliminate mold and ensure
                                    hygienic
                                    conditions.</p>
                            </div>
                        </div>
                        <div className="benefit-item">
                            <IconCircleCheck size={24} color="#8fd66f"/>
                            <div>
                                <h3 className="benefit-title">Bad Grain Removal</h3>
                                <p className="benefit-description">Specialized services to remove spoiled or
                                    contaminated
                                    grain safely.</p>
                            </div>
                        </div>
                        <div className="benefit-item">
                            <IconCircleCheck size={24} color="#8fd66f"/>
                            <div>
                                <h3 className="benefit-title">Vacuum Truck Services</h3>
                                <p className="benefit-description">Powerful vacuum services to handle silo cleanouts
                                    effectively.</p>
                            </div>
                        </div>
                        <div className="benefit-item">
                            <IconCircleCheck size={24} color="#8fd66f"/>
                            <div>
                                <h3 className="benefit-title">Hydro Blasting</h3>
                                <p className="benefit-description">High-pressure cleaning to remove tough build-ups.</p>
                            </div>
                        </div>
                        <div className="benefit-item">
                            <IconCircleCheck size={24} color="#8fd66f"/>
                            <div>
                                <h3 className="benefit-title">Dry Ice Blasting</h3>
                                <p className="benefit-description">Safe, chemical-free cleaning using dry ice
                                    technology.</p>
                            </div>
                        </div>
                        <div className="benefit-item">
                            <IconCircleCheck size={24} color="#8fd66f"/>
                            <div>
                                <h3 className="benefit-title">Silo Sanitization</h3>
                                <p className="benefit-description">Comprehensive cleaning and sanitization for
                                    hygiene-sensitive silos.</p>
                            </div>
                        </div>
                        <div className="benefit-item">
                            <IconCircleCheck size={24} color="#8fd66f"/>
                            <div>
                                <h3 className="benefit-title">Baghouse Cleaning</h3>
                                <p className="benefit-description">Thorough cleaning and filter replacement for optimal
                                    airflow.</p>
                            </div>
                        </div>
                        <div className="benefit-item">
                            <IconCircleCheck size={24} color="#8fd66f"/>
                            <div>
                                <h3 className="benefit-title">Soda Blasting</h3>
                                <p className="benefit-description">Environmentally friendly abrasive cleaning
                                    method.</p>
                            </div>
                        </div>
                        <div className="benefit-item">
                            <IconCircleCheck size={24} color="#8fd66f"/>
                            <div>
                                <h3 className="benefit-title">Injection Molding Resin Cleaning</h3>
                                <p className="benefit-description">Specialized cleaning for resin changeovers in
                                    silos.</p>
                            </div>
                        </div>
                        <div className="benefit-item">
                            <IconCircleCheck size={24} color="#8fd66f"/>
                            <div>
                                <h3 className="benefit-title">Grain, Cement, and Flour Silos</h3>
                                <p className="benefit-description">Specialized cleaning for silos storing grain, cement,
                                    and
                                    flour.</p>
                            </div>
                        </div>
                        <div className="benefit-item">
                            <IconCircleCheck size={24} color="#8fd66f"/>
                            <div>
                                <h3 className="benefit-title">Rotten Material Removal</h3>
                                <p className="benefit-description">Removal of rotten corn and clogged materials for
                                    optimal
                                    performance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="video-container3">
                <video className="video3"
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
            </div>*/}
            <Footer/>
        </div>
    );
}

export default SiloCleaning;
