import { FC } from "react";
import HomeIcon from '@mui/icons-material/Home';
import ChurchIcon from '@mui/icons-material/Church';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import timeline_background from '../../images/timeline_background.jpg';
import { ITimeline } from "../../common/type";
import './TimeLine.scss';


const data: ITimeline[] = [
  {
    icon: <HomeIcon />,
    time: '12:00',
    location: 'Հարսի տուն'
  },
  {
    icon: <ChurchIcon />,
    time: '14:00',
    location: 'Եկեղեցի'
  },
  {
    icon: <RestaurantIcon />,
    time: '18:00',
    location: 'Ռեստորան Դվին'
  },
  {
    icon: <WavingHandIcon />,
    time: '23:00',
    location: 'Բարի գիշեր'
  },
];

const TimeLine: FC = () => {
  return (
    <div className="timeline_main">
      <img src={timeline_background} alt="timeline_background" className="timeline_main_background" />
      <h2 className="timeline_title">Ժամանակացույց</h2>
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