import { FC } from "react";
import footer_icon from '../../media/images/icons/tel_icon.svg';
import footer_mail from '../../media/images/footer/mail_hraviratoms.svg';
import footer_facebook_icon from '../../media/images/footer/facebook_icon.svg';
import footer_instagram_icon from '../../media/images/footer/instagram_icon.svg';
import footer_tiktok_icon from '../../media/images/footer/tik-tok.svg';
import footer_logo from '../../media/images/footer/footer_logo.png';
import './Footer.scss';

const Footer: FC = () => {
  return (
    <div className="footer_main">
      <div className="container_1">
        <div className="footer_logo">
          <img src={footer_logo} alt="footer_logo" width="150px" height="150px"/>
        </div>
      </div>

      <p className="text_hraviratoms">hraviratoms.com</p>

      <div className="footer_number">
        <div className="footer_number_child">
          <img src={footer_icon} alt="footer_icon" width="24px" height="24px" />
          <a href="tel:+37477497515"><p>+374 77 49 75 15</p></a>
        </div>
      </div>

      <div className="mail_hraviratoms">
        <img src={footer_mail} alt="" width="24px" height="24px" />
        <a href="Hraviratoms.com@gmail.com" target="_blank"><span>hraviratoms.com@gmail.com</span></a>
      </div>

      <div className="footer_divider">

      </div>

      <div className="contacts_hraviratoms">
        <a href="https://www.facebook.com/share/1Bo7zzyW7E/?mibextid=wwXIfr" target="_blank">
          <img src={footer_facebook_icon} alt="facebook_icon" width="30px" height="30px" />
        </a>
        <a href="https://www.instagram.com/hraviratoms_com?igsh=MTFwczgyaXpsMXVidw%3D%3D&utm_source=qr" target="_blank">
          <img src={footer_instagram_icon} alt="instagram_icon" width="30px" height="30px" />
        </a>
        <a href="#" target="_blank">
          <img src={footer_tiktok_icon} alt="tiktok_icon" width="30px" height="30px" />
        </a>
      </div>

    </div>
  )
}

export default Footer;