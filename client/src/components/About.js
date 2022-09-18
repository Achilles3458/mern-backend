import React, { useEffect,useState } from 'react'
import profile1 from "../images/profile1.jpg"
import profile2 from "../images/profile2.jpg"
import { useHistory } from "react-router-dom";
const About = () => {

  const history = useHistory();
  const [userData, setUserData] = useState(0);
  const callAboutPage = async () => {
    try {
      const res = await fetch('/about', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
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
      history.push('/login');
    }
  }
  useEffect(() =>{
    callAboutPage();
  });


  return (
    <>
      <div className="container emp-profile">
        <form method="GET">
          <div className="row">
            <div className="col-md-4">
              <img src={userData.name === "Sk Elaf Ahmed" ? profile1 : profile2} alt="profile1" />
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h4>{userData.name}</h4>
                <h5>{userData.work}</h5>
                <p className='profile-rating mt-3 mb-5'>RANKINGS: <span>8/10</span></p>

                <ul className="nav" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" id='home-tab' data-toggle="tab" href="#home" role="tab">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" id='profile-tab' data-toggle="tab" href="#profile" role="tab">Timeline</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <input type="submit" className='btn btn-info' name='btnAddMore' value="Edit Profile" />
            </div>
          </div>

          <div className="row">
            {/* left side url */}

            <div className="col-md-4">
              <div className="profile-work">
                <p>WORK LINKS</p>
                <a href="https://github.com/Elu007" target="github">GitHub</a> <br />
                <a href="https://github.com/Elu007" target="github">Instagram</a> <br />
                <a href="https://github.com/Elu007" target="github">LinkedIn</a> <br />
                <a href="https://github.com/Elu007" target="github">LeetCode</a> <br />
                <a href="https://github.com/Elu007" target="github">Geeks For Geeks</a> <br />
                <a href="https://github.com/Elu007" target="github">Hackerrank</a> <br />
                <a href="https://github.com/Elu007" target="github">CodeChef</a> <br />
              </div>
            </div>


            {/* Right side data toogle */}
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id='myTabContent'>
                <div className="tab-pane fade show active" id='home' role="tabpanel" aria-labelledby="home-tab">
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>USER ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>46411179678197</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.name}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.phone}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.work}</p>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>

          </div>
        </form>
      </div>
    </>
  )
}

export default About
