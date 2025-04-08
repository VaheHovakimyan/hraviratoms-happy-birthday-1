import { FC, useEffect } from 'react';
import ContactOwnerForm from '../contact-owner/ContactOwnerForm';
import AOS from "aos";
import "aos/dist/aos.css";
import './Main.scss';
import TimeLine from '../timeline/TimeLine';
import Location from '../location/Location';

const Main: FC = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="main_fixed_image">
            <div className='main_opacity'>
                {/* <video src={video} autoPlay loop muted/> */}
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <h1 className='invite_title'>Սիրով հրավիրում ենք Ձեզ նշելու Դավիթի 20 ամյակը</h1>
                </div>

                <a href='#form'>
                    <div className='link_to_form'>
                        <span>Ներկա կլի՞նեք</span>
                    </div>
                </a>

                <Location />

                {/* <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <div data-aos="zoom-in">
                    <div style={{ width: '500px', height: '400px', background: 'blue' }}></div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <div data-aos="zoom-in">
                    <div style={{ width: '500px', height: '400px', background: 'blue' }}></div>
                </div>
            </div> */}
                <div data-aos="zoom-in">
                    <ContactOwnerForm />
                </div>
            </div>
        </div>
    )
}

export default Main;