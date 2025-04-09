import { FC, useEffect, useState } from "react";
import Footer from "../footer/Footer";
import { getGuests } from "../../api/invite-api";
import Loader from "../loader/Loader";
import './Admin.scss';

interface IGuestData {
  _id: string;
  name?: string;
  phone: string;
  isVisiting?: string;
}

const Admin: FC = () => {
  const [guests, setGuests] = useState<IGuestData[] | null>(null);

  useEffect((): void => {
    getGuests()
      .then((res) => res.json())
      .then((data) => {
        setGuests(data);
      })
  }, []);

  return (
    <>
      <div className="admin_title_div">
        <h3>Գեղամ Հակոբյանի և Լիաննա Հակոբյանի հյուրերի ցուցակը</h3>
        <h4 className="guests_count">Ձեր հյուրերի քանակը {guests?.length} է</h4>
      </div>
      <div className="table">
        <div className="tr">
          <div className="admin_param" id="guest_id">No.</div>
          <div className="admin_param" id="guest_name">Անուն Ազգանուն</div>
          <div className="admin_param" id="guest_phone">Հեռախոսահամար</div>
          <div className="admin_param" id="guest_isVisting">Ներկա Կգտնվի՞</div>
        </div>
        {guests !== null ? guests.map((item, index) => {
          return (
            <div key={item._id} className="tr">
              <div id="guest_id" className="td">
                <p className="td_p">{index + 1}</p>
              </div>
              <div id="guest_name" className="td">
                <p className="td_p">{item?.name || ''}</p>
              </div>
              <div id="guest_phone" className="td">
                <a href={`tel:${item?.phone}`} className="call_to_link">
                  <p className="td_p">{item?.phone || ''}</p>
                </a>
              </div>
              <div id="guest_isVisting" className="td">
                <p className="td_p">{item.isVisiting === "Yes" ? 'Այո' : 'Ոչ'}</p>
              </div>
            </div>
          )
        }) : <Loader message="Խնդրում ենք սպասել․․․" />}

      </div>
      <Footer />
    </>
  )
}

export default Admin;