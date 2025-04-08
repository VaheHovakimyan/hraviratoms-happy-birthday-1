import { FC } from "react";
import HomeIcon from '@mui/icons-material/Home';
import { ITimeline } from "../../common/type";
import './TimeLine.scss';


const data: ITimeline[] = [
  {
    icon: <HomeIcon />,
    time: '12:00',
    location: 'Հարսի տուն'
  }
];

const TimeLine: FC = () => {
  return (
    <div className="timeline_main">
      {/* <img src={timeline_background} alt="timeline_background" className="timeline_main_background" /> */}
      {/* <h2 className="timeline_title">Ժամանակացույց</h2> */}
      <div className="timeline_content">
        {data.map((item) => {
          return (
            <div className="timeline_item" key={item.location}>
              <div style={{marginTop: '8px'}}>{item.icon}</div>
              <p className="time_item">{item.time}</p>
              <p className="location_item">{item.location}</p>
            </div>
          ) 
        })}
      </div>
    </div>
  )
}

export default TimeLine;