import { FC } from 'react';
import ContactOwnerForm from '../contact-owner/ContactOwnerForm';
import './Main.scss';
import ReactPlayer from 'react-player';
import video from '../../images/fixed/video.mp4';

const Main: FC = () => {
    return (
        <div className="main_fixed_image">
            <ReactPlayer url={video} playing={true} loop width={'100%'} height={'100%'} />
            <ContactOwnerForm />
        </div>
    )
}

export default Main;