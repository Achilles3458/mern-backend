import React, {useEffect, useState} from 'react'

const Contact = () => {
  const [userData, setUserData] = useState({name:"", email:"", phone:"", message:""});
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
      setUserData({...userData,  name:data.name, email:data.email, phone:data.phone});

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

  // We are storing data in state
  const handleInputs = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setUserData({...userData, [name]:value});
  }

  // Send the data to backend

  const contactForm = async(e) =>{
    e.preventDefault();
    const {name,email,phone,message} = userData;

    const res = await fetch('/contact',{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, message
      })
    });

    const data = await res.json();
    if(!data){
      console.log("message not send");
    } else{
      alert("Message send");
      setUserData({...userData, message: ""})
    }
  }
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
              <form method="POST" id='contact_form'>
                  <div className="contact_form_name col-auto d-flex justify-content-between align-items-between">
                    <input type="text" id='contact_form_name' className='contact_form_name input_field form-control' 
                    value={userData.name}  name="name" onChange={handleInputs} placeholder='Your name' required="true"/>
                    <input type="email" id='contact_form_email' className='contact_form_email input_field form-control' 
                    value={userData.email}  name="email" onChange={handleInputs} placeholder='Your email id' required="true"/>
                    <input type="number" id='contact_form_phone' className='contact_form_phone input_field form-control' 
                    value={userData.phone}  name="phone" onChange={handleInputs} placeholder='Your phone number' required="true"/>
                  </div>
                  <div className="contact_form_text mt-4">
                    <textarea name="text_field contact_form_message" name="message"
                    value={userData.message} onChange={handleInputs} 
                    id="" cols="123" rows="7"></textarea>
                  </div>
                  <div className="contact_form_button">
                    <button type='submit' className='btn btn-success' onClick={contactForm}>Send Message</button>
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
