import { FC, useState } from "react";
import { Formik, Form, Field } from 'formik';
import { sendInviteRequest } from '../../api/invite-api';
import { PhoneInput } from 'react-international-phone';
import BadgeIcon from '@mui/icons-material/Badge';
import GroupIcon from '@mui/icons-material/Group';
import { IGuest } from "../../common/type";
import { Button } from "@mui/material";
import { userSchema } from "../../common/schema";
import './ContactOwnerForm.scss';
import toast, { Toaster } from "react-hot-toast";

const initialValue: IGuest = {
  name: '',
  phone: '',
  guestCount: 1,
  isVisiting: 'Yes'
}

const ContactOwnerForm: FC = () => {
  const [phone, setPhone] = useState<string>();

  return (
    <>
      <Formik
        validateOnMount
        validateOnChange
        initialValues={initialValue}
        validationSchema={userSchema}
        onSubmit={async (values) => {
          const response = await sendInviteRequest({ ...values, phone });
          console.log('response', response);

          if (response.ok) {
            console.log("Success");

            toast.success("Հարգելի հյուր Ձեր մասնակցության հայտը մեծ սիրով ընդունվեց❤️");
          } else {
            toast.error("Տեղի ունեցավ սխալ, փորձեք մի փոքր ուշ😔");
          }
        }}
      >
        {({ values, isValid, handleChange }) => (
          <Form>
            <div className="contact_main_div" id="form">
            <div style={{display: 'flex', justifyContent: 'center', margin: 'auto', background:'rgba(255, 255, 255, 0.4)', padding: '48px', borderRadius: '16px'}}>    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',  gap: '12px'}}>
        <h2 style={{fontSize: '35px', color:'white'}}>Dress code</h2>        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{background: '#FF69B4', borderRadius: '50%', width: '50px', height: '50px', border: '1px white solid', marginLeft: '8px'}}></div>            <div style={{background: '#FFF44F', borderRadius: '50%', width: '50px', height: '50px', border: '1px white solid', marginLeft: '-8px'}}></div>
            <div style={{background: '#87CEEB', borderRadius: '50%', width: '50px', height: '50px', border: '1px white solid', marginLeft: '-8px'}}></div>            <div style={{background: '#FFFFFF', borderRadius: '50%', width: '50px', height: '50px', border: '1px white solid', marginLeft: '-8px'}}></div>
            <div style={{background: '#98FF98', borderRadius: '50%', width: '50px', height: '50px', border: '1px white solid', marginLeft: '-8px'}}></div>        </div>
        <p style = {{color: 'white', fontSize: '24px', textAlign: 'center'}}>Խնդրում ենք ներկայանալ այս գույների հագուստով</p>    </div>
</div>
              <h3 className="contact_div_title">Պատասխան կարող եք ուղարկել մինչև 15.07.2025թ</h3>

              <div className="contact_form">
                <div className="contact_form_input_div">
                  <div className="contact_form_input_div_span">
                    <p className="contact_form_input_span">Անուն Ազգանուն</p>
                    <div className="contact_form_input_div_border">
                      <div className="contact_form_input_and_icon_div">
                        <BadgeIcon className="contact_form_input_icon" sx={{ fontSize: 37 }} />
                        <Field
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Անուն Ազգանուն"
                          onChange={handleChange}
                          className="contact_input"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="contact_form_input_div_span">
                    <p className="contact_form_input_span">Հեռախոսահամար</p>
                    <div className="contact_form_input_div_border">
                      <div className="contact_form_input_and_icon_div" style={{ padding: '12px 16px' }}>
                        <PhoneInput
                          defaultCountry="am"
                          value={phone}
                          onChange={(phone: string) => setPhone(phone)}
                          style={{
                            width: '100%',
                            height: '100%',
                            border: 'none',
                            outline: 'none',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="contact_form_input_div_span">
                    <p className="contact_form_input_span">Հյուրերի քանակ</p>
                    <div className="contact_form_input_div_border">
                      <div className="contact_form_input_and_icon_div">
                        <GroupIcon className="contact_form_input_icon" sx={{ fontSize: 37 }} />
                        <Field
                          id="guestCount"
                          name="guestCount"
                          type="number"
                          placeholder="Հյուրերի քանակ"
                          onChange={handleChange}
                          className="contact_input"
                        />
                      </div>
                    </div>
                  </div>

                </div>
                <div className="contact_div_general_2">
                  <p className="contact_paragraph">Արարողությանը ներկա ե՞ք լինելու</p>

                  <div id="contact_input">
                    <div className="contact_input_flex">
                      <Field type="radio" name="isVisiting" id="Yes" value="Yes" />
                      <label className="contact_radio_label">Այո</label>
                    </div>
                    <div className="contact_input_flex">
                      <Field type="radio" name="isVisiting" id="No" value="No" />
                      <label className="contact_radio_label">Ոչ</label>
                    </div>
                  </div>

                  <Button
                    className={isValid ? "contact_button" : "contact_button_disabled"}
                    type="submit"
                    disabled={!isValid}
                  >Ուղարկել</Button>
                </div>
              </div>

            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default ContactOwnerForm;