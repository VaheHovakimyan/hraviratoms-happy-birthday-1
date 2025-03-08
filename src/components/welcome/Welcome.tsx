import { FC } from "react";
import './Welcome.scss';
import Countdown from "react-countdown";

const Welcome: FC = () => {
  return (
    <div className="welcome_main">
      <div className="welcome_main_border_div">
        <div className="welcome_content">
          <p className="please_text">
            PLEASE JOIN US TO
            <br />
            CELEBRATE THE UNION OF
          </p>
          <p className="people_name">
            Hakob
            <br />
            Hakobyan
          </p>
          <p className="and_text">and</p>
          <p className="people_name">
            Lianna
            <br />
            Hakobyan
          </p>
          <div className="timer_block">
            <p className="timer_block_title">Left for wedding day</p>
            <p className="timer_block_coutndown">
              <Countdown date={new Date('April 17, 2025 18:30:00').getTime()} />
            </p>

            <div className="timer_parent">
              <div className="timer_name">
                <span className="day">օր</span> : <span className="hour">ժամ</span> ։ <span className="minute">րոպե</span> ։ <span className="second">վրկ</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome;