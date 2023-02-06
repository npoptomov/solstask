import React, { useState, useEffect } from 'react';
import FloatingHeader from './FloatingHeader';
import logo from '../assets/homepageimage.png'
import circleWatch from '../assets/circleWatch.png'
import Footer from './Footer';
import Sidebar from './Sidebar';
import axios from 'axios';


const HomePage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [titleValue, setTitleValue] = useState("");
  const [descValue, setDescValue] = useState("");


  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleTitleValue = (value) => {
    setTitleValue(value);
  };

  const handleDescValue = (value) => {
    setDescValue(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3333/data');
      setTitleValue(response.data.title);
      setDescValue(response.data.description);
    };
    fetchData();
  }, []);


  return (
    <main className="h-screen">
      <button onClick={toggleSidebar} className="float-left bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded">
        {isSidebarOpen ? "Hide" : "Show"}
      </button>
      <div className="flex flex-col h-screen">

        <div className="flex h-full hero">

          <div className={` ${isSidebarOpen ? 'flex' : 'hidden'}`}>
            <Sidebar onUpdateTitle={handleTitleValue} onUpdateDesc={handleDescValue}/>
          </div>


          <img className="" src={logo} />

          <div className="flex flex-col px-4 sm:px-6 mx-auto">
            <FloatingHeader />
            <div className="flex flex-col pt-32 w-96 mb-40 h-64">
              <div className="text-black font-normal xl:text-[65px] text-7xl relative mb-10 leading fade-in-left">{titleValue}</div>
              <div className="prose lg:prose-base prose-p:text-black prose-p:my-0 lg:prose-p:my-0 leading-normal lg:leading-normal	fade-in-bottom">
                <p>{descValue}
                </p>
              </div>
            </div>

          </div>

        </div>

        <div className="flex">

          <div className="flex flex-col pt-32 mb-40 h-64">
            <div className="text-black font-normal xl:text-[65px] text-7xl relative mb-10 leading fade-in-left">Your health & fitness partner.</div>
            <div className="prose lg:prose-base prose-p:text-black prose-p:my-0 lg:prose-p:my-0 leading-normal lg:leading-normal	fade-in-bottom">
              <p>Vestibulum nec semper ipsum, quis ornare turpis. Morbi in risus velit. Integer consectetur lacinia nibh non rhoncus. Quisque varius sapien a rutrum congue. Sed eget convallis eros. Nulla facilisis nibh tincidunt, iaculis lorem sed, ornare elit..
              </p>
            </div>
            <a className=" largeText border-2 min-w-[200px] text-[#0086CB] md:w-36 sm:w-96 w-80 h-10 mt-11 mb-16 sm:mb-10 md:mb-0 text-center text-red rounded-full items-center py-1 hover:text-white hover:bg-[#0086CB] border-[#0086CB] " 
            href="#">See more</a>
          </div>
          <img src={circleWatch} />
        </div>

        <Footer />


      </div>
    </main>
  );
};

export default HomePage;
