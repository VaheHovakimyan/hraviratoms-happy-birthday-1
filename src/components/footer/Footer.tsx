import footer_icon from '../../media/images/footer/tel_icon.svg';
import footer_mail from '../../media/images/footer/mail_hraviratoms.svg';
import footer_facebook_icon from '../../media/images/footer/facebook_icon.svg';
import footer_instagram_icon from '../../media/images/footer/instagram_icon.svg';
import footer_tiktok_icon from '../../media/images/footer/tik-tok.svg';
import footer_logo from '../../media/images/footer/footer_logo.png';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer_main">
      <div className="container_1">
        <div className="footer_logo">
          <img src={footer_logo} width="150px" height="150px" alt="footer_logo" />
        </div>
      </div>

      <p className="text_hraviratoms">hraviratoms.com</p>

      <div className="footer_number">
        <div className="footer_number_child">
          <img src={footer_icon} width="20px" height="20px" alt="tel_icon" />
          <a href="tel:+37477497515">
            <p>+374 77 49 75 15</p>
          </a>
        </div>
      </div>

      <div className="mail_hraviratoms">
        <img src={footer_mail} width="22px" height="22px" className="mail_icon" alt="mail_icon" />
        <a href="mailto:hraviratoms.com@gmail.com?subject=Without%20Minimum%20Subject&body=As%20a%20letter" target="_blank" className="mail_hraviratoms_child">
          <span>hraviratoms.com@gmail.com</span>
        </a>
      </div>

      <div className="footer_divider"></div>

      <div className="contacts_hraviratoms">
        <a href="https://www.facebook.com/share/1Bo7zzyW7E/?mibextid=wwXIfr" target="_blank">
          <img src={footer_facebook_icon} width="30px" height="30px" alt="facebook_icon" />
        </a>
        <a href="https://www.instagram.com/hraviratoms_com?igsh=MTFwczgyaXpsMXVidw%3D%3D&utm_source=qr" target="_blank">
          <img src={footer_instagram_icon} width="30px" height="30px" alt="instagram_icon" />
        </a>
        <a href="https://www.tiktok.com/@hraviratoms.com?_t=ZS-8vHtUd9OVq4&_r=1" target="_blank">
          <img src={footer_tiktok_icon} width="30px" height="30px" alt="tiktok_icon" />
        </a>
      </div>

    </div>
  )
}

export default Footer;
