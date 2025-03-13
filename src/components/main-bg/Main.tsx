import { FC, useEffect } from 'react';
import ContactOwnerForm from '../contact-owner/ContactOwnerForm';
import AOS from "aos";
import "aos/dist/aos.css";
import './Main.scss';
// import video from '../../images/fixed/video.mp4';

const Main: FC = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="main_fixed_image">
            {/* <video src={video} autoPlay loop muted/> */}
            <ContactOwnerForm />
            <div data-aos="fade-up">
                <h1>Hello</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <div data-aos="zoom-in">
                    <div style={{ width: '500px', height: '400px', background: 'blue'}}></div>
                </div>
            </div>
        </div>
    )
}

export default Main;