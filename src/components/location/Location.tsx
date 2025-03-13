import { FC } from "react";
import { ILocationDataContent } from "../../common/type";
import './Location.scss';

interface LocationComponentProps {
  locationData: ILocationDataContent;
}

const Location: FC<LocationComponentProps> = ({locationData}) => {
  const {name, background, link} = locationData;

  return (
    <div className="location_main">
      <div className="location_content">
         <div>
          <p className="location_text">{name}</p>
         </div>

         <div className="location_img_div">
          <img src={background} alt="location_icon" className="location_img"/>
         </div>

         <div>
          <a className="location_map" href={link} target="_blank">Քարտեզ</a>
         </div>
      </div>
    </div>
  )
}

export default Location;