import { FC } from "react";
import restaurant_icon from '../../media/images/location/nor_dvin.jpg';
import './Location.scss';

const Location: FC = () => {

  const locationData: any = {
    name: 'Հարսանյաց հանդեսը տեղի կունենա “Նոր Դվին” ռեստորանում',
    background: restaurant_icon,
    link: 'https://www.google.com/maps/search/?api=1&query=Restaurant+Nor+Dvin+Armenia'
  }

  return (
    <div className="location_main">
      <div className="location_content">
         <div>
          <p className="location_text">{locationData.name}</p>
         </div>

         <div className="location_img_div">
          <img src={restaurant_icon} alt="location_icon" className="location_img"/>
         </div>

         <div>
          <a className="location_map" href={locationData.link} target="_blank">Քարտեզ</a>
         </div>
      </div>
    </div>
  )
}

export default Location;