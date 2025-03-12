import { FC } from 'react';
import ContactOwnerForm from '../contact-owner/ContactOwnerForm';
import './Main.scss';
import video from '../../images/fixed/video.mp4';

const Main: FC = () => {
    return (
        <div className="main_fixed_image">
            <video src={video} autoPlay loop muted/>
            <ContactOwnerForm />
        </div>
    )
}

export default Main;