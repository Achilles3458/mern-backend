import React from 'react'
import profile1 from "../images/profile1.jpg"
const About = () => {
  return (
    <>
      <div className="container emp-profile">
        <form method=''>
          <div className="row">
            <div className="col-md-4">
              <img src={profile1} alt="profile1" />
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h4>Sk Elaf Ahmed</h4>
                <h5>Web developer</h5>
                <p className='profile-rating mt-3 mb-5'>RANKINGS: <span>1/10</span></p>

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
              <input type="submit" className='btn btn-info' name='btnAddMore' value="Edit Profile"/>
            </div>
          </div>

          <div className="row">
            {/* left side url */}

              <div className="col-md-4">
                <div className="profile-work">
                  <p>WORK LINK</p>
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
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>SK Elaf Ahmed</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>eluOp99@gmail.com</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>97845612665</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p>Web Developer</p>
                    </div>
                  </div>
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
