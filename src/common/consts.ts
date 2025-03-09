import location_icon from '../images/location/church_icon.png';
import restaurant_icon from '../images/location/nor_dvin.jpg';
import { ILocationData } from './type';

export const locationData: ILocationData = {
  church: {
    name: 'Պսակադրությունը տեղի կունենա Հռիփսիմե եկեղեցում',
    background: location_icon,
    link: 'https://maps.app.goo.gl/XkLZw953nEbLyxFu7'
  },
  restaurant: {
    name: 'Հարսանյաց հանդեսը տեղի կունենա “Նոր Դվին” ռեստորանում',
    background: restaurant_icon,
    link: 'https://www.google.com/maps/search/?api=1&query=Restaurant+Nor+Dvin+Armenia'
  }
}
