import React, {useEffect, useState} from 'react'

const Contact = () => {
  const [userData, setUserData] = useState(0);
  const userContact = async () => {
    try {
      const res = await fetch('/getdata', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() =>{
    userContact();
  });


  return (
    <>
      <div className="contact_info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img src="https://img.icons8.com/office/24/00000/iphone-x.png" alt="phone" />
                <div className="contact_info_content">
                  <div className="contact_info_title">Phone</div>
                  <div className="contact_info_text">+234546444</div>
                </div>
              </div>
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img src="https://img.icons8.com/office/24/00000/iphone-x.png" alt="phone" />
                <div className="contact_info_content">
                  <div className="contact_info_title">Email</div>
                  <div className="contact_info_text">eluOp99@gmail.com</div>
                </div>
              </div>
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img src="https://img.icons8.com/office/24/00000/iphone-x.png" alt="phone" />
                <div className="contact_info_content">
                  <div className="contact_info_title">Address</div>
                  <div className="contact_info_text">Kolkata</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact_form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_container py-5">
                <h1>Get in Touch</h1>
              </div>
              <form id='contact_form'>
                  <div className="contact_form_name col-auto d-flex justify-content-between align-items-between">
                    <input type="text" id='contact_form_name' className='contact_form_name input_field form-control' 
                    value={userData.name} placeholder='Your name' required="true"/>
                    <input type="email" id='contact_form_email' className='contact_form_email input_field form-control' 
                    value={userData.email} placeholder='Your email id' required="true"/>
                    <input type="number" id='contact_form_phone' className='contact_form_phone input_field form-control' 
                    value={userData.phone} placeholder='Your phone number' required="true"/>
                  </div>
                  <div className="contact_form_text mt-4">
                    <textarea name="text_field contact_form_message" id="" cols="123" rows="7"></textarea>
                  </div>
                  <div className="contact_form_button">
                    <button type='submit' className='btn btn-success'>Send Message</button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
