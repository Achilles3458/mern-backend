import React, {useEffect,useState} from 'react'

const Home = () => {
  const [userName, setUserName] = useState('');
  const [show, setShow] = useState(false);
  const userHomePage = async () => {
    try {
      const res = await fetch('/getdata', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const data = await res.json();
      console.log(data);
      setUserName(data.name);
      setShow(true);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() =>{
    userHomePage();
  });


  return (
    <>
      <div className='container'>
        <div className="home-div shadow p-3 mb-5 bg-body rounded">
          <h1>WELCOME</h1>
          <h1>{userName}</h1>
          <h4>{show ? 'Happy to see you back' : 'We are the MERN Developer'}</h4>
        </div>
      </div>
    </>
  )
}

export default Home
